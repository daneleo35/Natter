"""Create the SDK ZIP with stable timestamps, ordering and compression."""
import gzip
import io
import sys
import tarfile
import zipfile
from pathlib import Path

def source_archive(data):
    out = io.BytesIO()
    with tarfile.open(fileobj=io.BytesIO(data), mode='r:gz') as old:
        with gzip.GzipFile(fileobj=out, mode='wb', mtime=0, filename='') as compressed:
            with tarfile.open(fileobj=compressed, mode='w', format=tarfile.USTAR_FORMAT) as new:
                for entry in sorted(old, key=lambda item: item.name):
                    if not (entry.isfile() or entry.isdir()):
                        raise ValueError(entry.name)
                    clean = tarfile.TarInfo(entry.name)
                    clean.type = entry.type
                    clean.mode = 0o755 if entry.isdir() else 0o644
                    clean.size = entry.size
                    new.addfile(clean, old.extractfile(entry) if entry.isfile() else None)
    return out.getvalue()

root, target = map(Path, sys.argv[1:])
with zipfile.ZipFile(target, 'w') as bundle:
    for path in sorted(root.rglob('*'), key=lambda p:p.relative_to(root).as_posix()):
        if path.is_dir():
            info = zipfile.ZipInfo(path.relative_to(root).as_posix()+'/', date_time=(1980,1,1,0,0,0))
            info.create_system = 3
            info.external_attr = (0o40755 << 16) | 0x10
            bundle.writestr(info, b'')
            continue
        data = path.read_bytes()
        if path.name.endswith('.tar.gz'):
            data = source_archive(data)
        info = zipfile.ZipInfo(path.relative_to(root).as_posix(), date_time=(1980,1,1,0,0,0))
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        bundle.writestr(info, data, compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
