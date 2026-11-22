#!/usr/bin/env bash
# 录制 terminal-setup 的四段演示视频（VHS + ffmpeg）：install / daily / git / hero。
set -euo pipefail
cd "$(dirname "$0")/.."

missing=""
for c in vhs ttyd ffmpeg; do
  if ! command -v "$c" >/dev/null 2>&1; then
    missing="$missing $c"
  fi
done
[ -z "$missing" ] || { echo "缺少:$missing，请先运行: brew install vhs ttyd ffmpeg" >&2; exit 1; }

# tape 里 Require 的工具在录制前先检查，缺则早失败，避免产出半截黑屏视频
missing=""
for c in zsh starship eza bat fzf zoxide fastfetch btop lazygit delta git sed; do
  if ! command -v "$c" >/dev/null 2>&1; then
    missing="$missing $c"
  fi
done
[ -z "$missing" ] || { echo "缺少录制所需 CLI:$missing，请先 brew install 对应工具" >&2; exit 1; }

mkdir -p site/assets/videos
for t in install daily git hero; do
  echo "==> 录制 tapes/$t.tape -> site/assets/videos/$t.mp4"
  vhs "tapes/$t.tape"
done

echo "==> 四段视频已生成："
ls -lh site/assets/videos/*.mp4
