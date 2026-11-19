# Natter public release checklist

Get the current public release from [GitHub Releases](https://github.com/daneleo35/Natter/releases/latest). Build commands below run from the build checkout. Official packages include SHA-256 checksums. GitHub’s automatic source archives contain the public downloads repository.

## Windows client

- [x] **Build command** — On Windows x64 with Node.js 24 LTS, .NET 10 SDK, Windows SDK and Visual Studio C++ build tools, run `npm ci` and `npm run package:public:win`. The **Build public Natter packages** workflow builds the native hotkey helper and the desktop installer.
- [x] **Package and architecture** — NSIS EXE installer, Windows x64.
- [x] **GitHub asset** — `Natter-Setup-VERSION-win-x64.exe`, its SHA-256 file and the signed public update manifest.
- [ ] **Clean-machine test** — On a clean Windows 11 x64 VM with a mic and headphones, install as a standard user, launch from Start, complete audio setup and connect over HTTPS. Send a chat message, check voice both ways, try a screen share, save and edit a replay, then verify Settings and saved servers survive a restart. For release candidates with an enabled update feed, check the signed update from the previous public installer.

## Linux client

- [x] **Build command** — Run `npm ci` and `npm run package:public:linux` on Linux x64. The public packaging workflow builds and tests the package on Ubuntu.
- [x] **Package and architecture** — DEB for Ubuntu x64. Install with `sudo apt install ./Natter-VERSION-linux-x64.deb`.
- [x] **GitHub asset** — `Natter-VERSION-linux-x64.deb` and its SHA-256 file.
- [ ] **Physical desktop test** — On a clean Ubuntu x64 desktop, select a real mic and headset, verify voice both ways and test screen sharing under Wayland.

## Windows server

- [x] **Build command** — On Windows x64 with Node.js 24 LTS, run `npm ci` and `npm run package:public:server`. The public package includes the Windows mediasoup worker.
- [x] **Package and architecture** — ZIP archive, Windows x64. Running it requires Node.js 24.14 or later and PostgreSQL.
- [x] **GitHub asset** — `Natter-Server-VERSION-win-x64.zip` and its SHA-256 file.
- [ ] **Clean-machine test** — Use a fresh Windows x64 host with only the documented prerequisites. Extract the actual download, create the database and `.env`, run `start-server.cmd`, check `/health` and claim ownership. From another machine, connect over HTTPS and confirm text and live media across the firewall. Restart the process and verify that the owner, a channel, a message and a shared sound persist.

## Linux server

- [x] **Build command** — On Linux x64 with Node.js 24 LTS, run `ELECTRON_SKIP_BINARY_DOWNLOAD=1 npm ci` and `npm run package:public:server`. The Linux workflow includes an automated PostgreSQL-backed server smoke test.
- [x] **Package and architecture** — tar.gz archive, Linux x64. Running it requires Node.js 24.14 or later and PostgreSQL.
- [x] **GitHub asset** — `Natter-Server-VERSION-linux-x64.tar.gz` and its SHA-256 file.
- [ ] **Clean-machine test** — On a fresh Ubuntu 24.04 x64 host, use the published Linux guide to extract the real archive, set up PostgreSQL and HTTPS, claim ownership and connect two clients. Reboot and check systemd and journal output. Take a backup, restore it to a separate test instance, and check that accounts, messages and uploads survive an update.
- [x] Validate the [Docker Compose configuration](https://officialgamershub.com/Natter/host-docker/) and its released x64 server archive.
- [ ] On a clean Linux Docker host, start the stack, claim ownership over HTTPS and verify voice from a second client. Restart Docker and check persisted chat and uploads. Back up and update the stack using the Docker guide.

## Two-client voice test

Run this test once against the Windows server ZIP and again against the Linux server tar.gz. Use the published Windows installer and Ubuntu DEB.

- [ ] Windows server + Windows client + Linux client.
- [ ] Linux server + Windows client + Linux client.
- [ ] For each run, use an HTTPS server address and two accounts. Join the same channel. Speak from Windows and confirm Linux hears it, then speak from Linux and confirm Windows hears it. Verify each client shows voice encryption to the server. Mute and unmute each sender, switch channels and reconnect once. Confirm messages sent from each client appear on the other. Try from an external network. If the server advertises TURN support, repeat with direct media blocked on one client to verify relay fallback.
- [ ] Record the OS and package versions, microphone and transport details, and result for each direction. Keep logs and sample captures private.

## Website and guide checks

- [x] Capture the current Windows client with the Friday Crew demo server, a populated channel tree, users in voice and sample Quick chat.
- [x] Capture the Windows audio setup and Server browser with fictional data.
- [x] Capture a fictional speaker and waveform selection in **Edit voice clip**, and the queue and volume controls in **Music and Video**.
- [ ] Capture **Save to Soundboard** in the voice editor of an account with upload permission. Capture the saved sound and its **Play** button.
- [ ] Supplement the join guide with the Ubuntu DEB’s first-launch audio choices and a completed mic check on a physical desktop.
- [ ] Capture Windows and Linux server owner-claim dialogs and connected clients under the same demo server. Use a disposable owner code and crop it out entirely. On Linux also capture the service active after reboot, with hostnames and filesystem paths limited to the guide’s examples.
- [x] Capture a live screen share of the Orbital Run demo window in Friday Crew.
- [x] Capture the actual gameplay clip editor with a trimmed demo replay, named Ben and Riley voice tracks and **Save edited copy**.
- [ ] Capture **Music and Video → Now playing** with a redistributable sample track queued and playing, then show the same channel’s live share while playback continues.
- [ ] Have a first-time joiner and a first-time host follow the public guides using the release packages only. Cover the Windows installer and Ubuntu DEB. Capture the exact step and wording for any point where they need help.
- [ ] After each release or site change, click every live download on the public site. Check the filename, package type, architecture and SHA-256 against GitHub. Check that the release-notes links point to the current release.
- [x] Verify the website and Wiki guide links in both directions without signing in.

## Publishing the next release

- [ ] Choose the highest applicable semantic-version bump from the latest published version. Set the version in `package.json`, both version fields in `package-lock.json` and `desktop/release-notes.json`. Keep the installer, signed update manifest and deployed server image aligned. Follow `deploy/updates/README.md` in the build checkout for building and signing. Published versions and their assets are immutable.
- [ ] Run the public build workflow and keep the CI evidence. Publish the tested platform assets and checksums with notes that explain changes and setup. Confirm the release API lists each final asset with its public download URL. Keep the website’s release snapshot current so the same links are available when live GitHub requests fail.
