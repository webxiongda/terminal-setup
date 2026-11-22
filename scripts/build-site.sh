#!/usr/bin/env bash
# 把 site/ 静态站（含视频）发布到 gh-pages 分支。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# 前置检查
[ "$(git branch --show-current)" = "main" ] || { echo "请在 main 分支运行" >&2; exit 1; }
[ -z "$(git status --porcelain)" ] || { echo "工作区不干净，请先提交改动" >&2; exit 1; }
for f in site/index.html site/styles.css site/app.js \
         site/assets/videos/install.mp4 site/assets/videos/daily.mp4 site/assets/videos/git.mp4; do
  [ -f "$f" ] || { echo "缺少 $f，请先运行 scripts/record-videos.sh" >&2; exit 1; }
done

TMP="$(mktemp -d)"
cp -R site/. "$TMP/"
echo "==> 已复制 site/ 到临时目录"

# 切到 gh-pages（不存在则建孤儿分支）
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git checkout gh-pages
else
  git checkout --orphan gh-pages
  git rm -rf . >/dev/null 2>&1 || true
fi

# 清空旧产物，填入新内容
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$TMP"/. .
rm -rf "$TMP"

# gh-pages 分支已无 .gitignore（find 清空时删除），git add -A 足够纳入视频
git add -A

if git diff --cached --quiet; then
  echo "==> 无变化，跳过 commit"
else
  git commit -m "docs: 发布官网 $(date +%Y-%m-%d %H:%M)" -q
fi
git push origin gh-pages

# 回到 main
git checkout main
echo "==> 发布完成：https://webxiongda.github.io/terminal-setup/"
