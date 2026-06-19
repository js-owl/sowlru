#!/usr/bin/env python3
"""Create WebP assets referenced from index3.html."""

from __future__ import annotations

import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
IMG = ROOT / "_img"
QUALITY = 82


def cover_webp(src: Path, dest: Path, w: int, h: int) -> tuple[int, int]:
    with Image.open(src) as im:
        im.load()
        out = ImageOps.fit(im.convert("RGB"), (w, h), method=Image.Resampling.LANCZOS)
        out.save(dest, format="WEBP", quality=QUALITY, method=6)
    return src.stat().st_size, dest.stat().st_size


def convert_webp(src: Path, dest: Path) -> tuple[int, int]:
    with Image.open(src) as im:
        im.load()
        if im.mode in ("P", "LA"):
            im = im.convert("RGBA")
        elif im.mode != "RGBA":
            im = im.convert("RGB")
        im.save(dest, format="WEBP", quality=QUALITY, method=6)
    return src.stat().st_size, dest.stat().st_size


def download_cover_webp(url: str, dest: Path, w: int, h: int) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    with Image.open(BytesIO(data)) as im:
        im.load()
        out = ImageOps.fit(im.convert("RGB"), (w, h), method=Image.Resampling.LANCZOS)
        out.save(dest, format="WEBP", quality=QUALITY, method=6)
    return dest.stat().st_size


def main() -> int:
    before, after = cover_webp(IMG / "meal.jpeg", IMG / "meal.webp", 960, 720)
    print(f"_img/meal.webp: {before / 1024:.1f} KB -> {after / 1024:.1f} KB")

    for src_name, dest_name in [
        ("staff/klimovskikh.jpg", "staff/klimovskikh.webp"),
        ("staff/ped1.jpg", "staff/ped1.webp"),
        ("logo_footer.png", "logo_footer.webp"),
    ]:
        before, after = convert_webp(IMG / src_name, IMG / dest_name)
        print(f"_img/{dest_name}: {before / 1024:.1f} KB -> {after / 1024:.1f} KB")

    external = [
        (
            "about-english.webp",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Marines_teach_English_to_Okinawa_students_through_song%2C_play_during_new_program_140919-M-PJ295-343.jpg/960px-Marines_teach_English_to_Okinawa_students_through_song%2C_play_during_new_program_140919-M-PJ295-343.jpg",
        ),
        (
            "about-safety.webp",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Camera_In_Daycare.png/960px-Camera_In_Daycare.png",
        ),
        (
            "about-health.webp",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Doctor_uses_a_stethoscope_to_examine_a_young_patient.JPEG/960px-Doctor_uses_a_stethoscope_to_examine_a_young_patient.JPEG",
        ),
    ]

    for filename, url in external:
        dest = IMG / filename
        size = download_cover_webp(url, dest, 960, 720)
        print(f"_img/{filename}: downloaded -> {size / 1024:.1f} KB")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
