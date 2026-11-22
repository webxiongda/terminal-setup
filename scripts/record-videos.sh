#!/usr/bin/env bash
# 录制 terminal-setup 的三个演示视频（VHS + ffmpeg）。
set -euo pipefail
cd "$(dirname "$0")/.."

missing=""
for c in vhs ttyd ffmpeg; do
  if ! command -v "$c" >/dev/null 2>&1; then
    missing="$missing $c"
  fi
done
[ -z "$missing" ] || { echo "缺少:$missing，请先运行: brew install vhs ttyd ffmpeg" >&2; exit 1; }

for t in install daily git; do
  echo "==> 录制 $t.tape -> site/assets/videos/$t.mp4"
  vhs "tapes/$t.tape"
done

echo "==> 三个视频已生成："
ls -lh site/assets/videos/*.mp4
