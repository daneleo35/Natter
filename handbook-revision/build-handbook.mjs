import {execFileSync} from 'node:child_process';
import {randomUUID} from 'node:crypto';
import {copyFile, mkdir, readFile, readdir, unlink, writeFile} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

// Run in a checkout of Natter with dependencies installed. Create a new output
// directory each time so files from another version cannot enter this package.
const inputs = dirname(fileURLToPath(import.meta.url));
if (!process.argv[2]) throw Error('Supply a new output directory.');
const out = resolve(process.argv[2]);
await mkdir(out);
const docs = join(out, 'plugin-development'), sdk = join(out, 'plugin-sdk');
const revision = join(docs, 'revision');
const source = resolve('website/developer/build.mjs');
const temporary = join(dirname(source), '.handbook-' + randomUUID() + '.mjs');
const patch = join(inputs, 'handbook-permissions.patch');
execFileSync('git', ['apply', '--check', patch]);
// Apply to a temporary copy. The generator uses imports relative to its own URL.
const diff = (await readFile(patch, 'utf8')).split('\n');
const hunk = diff.findIndex(line => line.startsWith('@@'));
const before = diff.slice(hunk+1).filter(line => line.startsWith(' ') || line.startsWith('-')).map(line=>line.slice(1)).join('\n');
const after = diff.slice(hunk+1).filter(line => line.startsWith(' ') || line.startsWith('+')).map(line=>line.slice(1)).join('\n');
const original = (await readFile(source,'utf8')).replaceAll('\r\n','\n');
if (hunk < 0 || !before || original.split(before).length !== 2) throw Error('Handbook patch context differs.');
const generator = original.replace(before,after);
await writeFile(temporary, generator, {flag:'wx'});
try {
  const {buildDeveloperDocs} = await import(pathToFileURL(temporary));
  const {buildPluginDownloads} = await import(pathToFileURL(resolve('tools/plugins/site-downloads.mjs')));
  await buildPluginDownloads(sdk);
  await buildDeveloperDocs(docs);
} finally {
  await unlink(temporary);
}
await mkdir(revision);
for (const name of ['build-handbook.mjs','archive-sdk.py','inspect-channel-section.html.txt','handbook-permissions.patch','inspect-channel.mjs','README.txt']) {
  await copyFile(join(inputs,name),join(revision,name));
}
for (const name of ['inspect-channel.mjs','handbook-permissions.patch']) await copyFile(join(inputs,name),join(sdk,name));
const section = await readFile(join(inputs,'inspect-channel-section.html.txt'),'utf8');
const integrations = join(docs,'integrations.html');
const html = await readFile(integrations,'utf8');
if (html.split('</article>').length !== 2) throw Error('Cannot locate the integration handbook article.');
await writeFile(integrations,html.replace('</article>',section+'</article>'));
await mkdir(join(out,'assets'));
await copyFile('website/assets/natter.png',join(out,'assets/natter.png'));
for (const name of await readdir(docs)) {
  if (!name.endsWith('.html')) continue;
  const file = join(docs,name);
  const page = await readFile(file,'utf8');
  await writeFile(file,page.replace(/href="\.\.\/(?!assets\/|plugin-sdk\/|plugin-development\/)([^"]*)"/g,'href="https://officialgamershub.com/Natter/$1"'));
}
await writeFile(join(out,'README.txt'),'Natter 3.2.0 / Plugin API 1\nOpen plugin-development/index.html to read the handbook. The SDK, editable examples and compiled .natter packages are in plugin-sdk/. Find the documentation build inputs in plugin-development/revision/.\n');
