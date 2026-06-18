#!/usr/bin/env python3
"""Optimize raster images for web delivery."""

from __future__ import annotations

import sys
from io import BytesIO
from pathlib import Path
from typing import BinaryIO, Union

from PIL import Image, ImageOps

PathOrIO = Union[Path, BinaryIO]

ROOT = Path(__file__).resolve().parents[1]
DIRS = [ROOT / "_img", ROOT / "pdf" / "img"]
EXTRA_FILES = [ROOT / "favicon128.png"]

JPEG_QUALITY = 82
WEBP_QUALITY = 82
PNG_COMPRESS_LEVEL = 9

MAX_WIDTH = {
    "gallery": 1600,
    "hero": 1278,
    "staff": 400,
    "doc": 595,
    "default": 1920,
}


def category(rel: Path) -> str:
    parts = rel.parts
    name = rel.stem.lower()
    if "staff" in parts:
        return "staff"
    if name.startswith("gallery"):
        return "gallery"
    if name.startswith("p4_") or name.startswith("p1"):
        return "hero"
    if rel.parent.name == "img" and rel.parent.parent.name == "pdf":
        return "doc"
    return "default"


def cover_crop(image: Image.Image, target_w: int, target_h: int) -> Image.Image:
    return ImageOps.fit(image.convert("RGB"), (target_w, target_h), method=Image.Resampling.LANCZOS)


def resize_if_larger(image: Image.Image, max_width: int) -> Image.Image:
    if image.width <= max_width:
        return image
    ratio = max_width / image.width
    new_size = (max_width, max(1, round(image.height * ratio)))
    return image.resize(new_size, Image.Resampling.LANCZOS)


def save_jpeg(image: Image.Image, dest: PathOrIO) -> None:
    rgb = image.convert("RGB")
    rgb.save(
        dest,
        format="JPEG",
        quality=JPEG_QUALITY,
        optimize=True,
        progressive=True,
    )


def save_png(image: Image.Image, dest: PathOrIO) -> None:
    if image.mode not in ("RGB", "RGBA", "P", "L", "LA"):
        image = image.convert("RGBA")
    image.save(dest, format="PNG", optimize=True, compress_level=PNG_COMPRESS_LEVEL)


def save_webp(image: Image.Image, dest: PathOrIO) -> None:
    if image.mode in ("P", "LA"):
        image = image.convert("RGBA")
    image.save(
        dest,
        format="WEBP",
        quality=WEBP_QUALITY,
        method=6,
    )


def encode_image(image: Image.Image, ext: str) -> bytes | None:
    buffer = BytesIO()
    if ext in (".jpg", ".jpeg"):
        save_jpeg(image, buffer)
    elif ext == ".png":
        save_png(image, buffer)
    elif ext == ".webp":
        save_webp(image, buffer)
    else:
        return None
    return buffer.getvalue()


def optimize_file(path: Path) -> tuple[int, int]:
    rel = path.relative_to(ROOT)
    ext = path.suffix.lower()
    original_size = path.stat().st_size

    with Image.open(path) as image:
        image.load()
        cat = category(rel)
        processed = image.copy()

        if cat == "staff":
            processed = cover_crop(processed, 300, 400)
        else:
            processed = resize_if_larger(processed, MAX_WIDTH[cat])

        encoded = encode_image(processed, ext)
        if encoded is None:
            return original_size, original_size

        new_size = len(encoded)
        if new_size < original_size:
            path.write_bytes(encoded)
            return original_size, new_size

        return original_size, original_size


def main() -> int:
    total_before = 0
    total_after = 0
    changed = 0

    for base in DIRS:
        if not base.exists():
            continue
        for path in sorted(base.rglob("*")):
            if not path.is_file():
                continue
            if path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
                continue
            if path.name.endswith(".opt"):
                continue

            before, after = optimize_file(path)
            total_before += before
            total_after += after
            rel = path.relative_to(ROOT)
            if after < before:
                changed += 1
                saved = before - after
                print(
                    f"{rel}: {before / 1024:.1f} KB -> {after / 1024:.1f} KB "
                    f"(-{saved / 1024:.1f} KB)"
                )
            else:
                print(f"{rel}: {before / 1024:.1f} KB (unchanged)")

    for path in EXTRA_FILES:
        if not path.is_file():
            continue
        before, after = optimize_file(path)
        total_before += before
        total_after += after
        rel = path.relative_to(ROOT)
        if after < before:
            changed += 1
            saved = before - after
            print(
                f"{rel}: {before / 1024:.1f} KB -> {after / 1024:.1f} KB "
                f"(-{saved / 1024:.1f} KB)"
            )
        else:
            print(f"{rel}: {before / 1024:.1f} KB (unchanged)")

    print()
    print(
        f"Done: {changed} files optimized, "
        f"{total_before / 1024 / 1024:.2f} MB -> {total_after / 1024 / 1024:.2f} MB"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
