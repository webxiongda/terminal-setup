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
  # VHS 原始码率波动大；统一压到 CRF24，保证四段合计 < 2MB 且文字仍清晰
  ffmpeg -y -v error -i "site/assets/videos/$t.mp4" \
    -c:v libx264 -crf 24 -preset veryfast -pix_fmt yuv420p -an -movflags +faststart \
    "/tmp/pb-compress-$t.mp4"
  mv "/tmp/pb-compress-$t.mp4" "site/assets/videos/$t.mp4"
done

# git.tape 为展示 diff 会在画面外临时追加一行；兜底清理，避免录制中断后残留
if grep -q '^# git-diff-demo$' .gitignore; then
  grep -v '^# git-diff-demo$' .gitignore > /tmp/pb-gitignore-clean
  cp /tmp/pb-gitignore-clean .gitignore
  echo "==> 已清理 git.tape 的临时 diff 行"
fi

echo "==> 四段视频已生成："
ls -lh site/assets/videos/*.mp4
