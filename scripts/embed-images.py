#!/usr/bin/env python3
"""Replace image src references with base64 data URLs in HTML files."""
import sys
import base64
import re
from pathlib import Path

def embed_images(html_path):
    html_dir = Path(html_path).parent
    html = Path(html_path).read_text()

    def replace_src(match):
        attr = match.group(1)  # 'src' or 'src'
        quote = match.group(2)
        img_path = match.group(3)

        if img_path.startswith('data:') or img_path.startswith('http'):
            return match.group(0)

        full_path = html_dir / img_path
        if not full_path.exists():
            print(f"Warning: {full_path} not found", file=sys.stderr)
            return match.group(0)

        ext = full_path.suffix.lower()
        mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'webp': 'image/webp', 'gif': 'image/gif'}.get(ext.lstrip('.'), 'image/png')

        b64 = base64.b64encode(full_path.read_bytes()).decode()
        print(f"Embedded: {img_path} ({len(b64)//1024}KB base64)")
        return f'{attr}={quote}data:{mime};base64,{b64}{quote}'

    html = re.sub(r'(src)(=["\'])([^"\']+)(["\'])', lambda m: replace_src(m) if m.group(3) else m.group(0), html)
    # Fix regex - need proper groups
    html_out = re.sub(r'src="([^"]+)"', lambda m: f'src="data:{get_mime(m.group(1))};base64,{encode_file(html_dir, m.group(1))}"' if not m.group(1).startswith(('data:', 'http')) and (html_dir / m.group(1)).exists() else m.group(0), html)

    Path(html_path).write_text(html_out)
    print(f"Done: {html_path}")

def get_mime(path):
    ext = Path(path).suffix.lower().lstrip('.')
    return {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'webp': 'image/webp'}.get(ext, 'image/png')

def encode_file(base_dir, rel_path):
    full = base_dir / rel_path
    b64 = base64.b64encode(full.read_bytes()).decode()
    print(f"  Embedded: {rel_path} ({len(b64)//1024}KB)")
    return b64

if __name__ == '__main__':
    embed_images(sys.argv[1])
