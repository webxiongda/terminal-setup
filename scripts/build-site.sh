#!/usr/bin/env bash
# 把 site/ 静态站（含视频）发布到 gh-pages 分支。
# 用临时 git worktree 操作 gh-pages，绝不切当前分支、绝不碰 main 工作区。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

fail() { echo "ERROR: $*" >&2; exit 1; }

# 前置检查
[ "$(git branch --show-current)" = "main" ] || fail "请在 main 分支运行"
[ -z "$(git status --porcelain)" ] || fail "工作区不干净，请先提交改动"
for f in site/index.html site/styles.css site/app.js \
         site/assets/videos/install.mp4 site/assets/videos/daily.mp4 site/assets/videos/git.mp4; do
  [ -f "$f" ] || fail "缺少 $f，请先运行 scripts/record-videos.sh"
done

WORKTREE="$(mktemp -d)"
cleanup() { git worktree remove --force "$WORKTREE" >/dev/null 2>&1 || true; rm -rf "$WORKTREE"; }
trap cleanup EXIT

# 在临时 worktree 检出 gh-pages（不存在则由 main 建孤儿分支）
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git worktree add -q "$WORKTREE" gh-pages
else
  git worktree add -q --orphan "$WORKTREE" gh-pages
fi

# 清空 gh-pages worktree 内容，铺入最新站点（视频在 worktree 里不被 main 的 .gitignore 约束）
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R site/. "$WORKTREE"/

cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "==> 站点内容无变化，跳过 commit"
else
  git commit -q -m "docs: 发布官网 $(date +%Y-%m-%d %H:%M)"
fi
git push -q origin gh-pages

echo "==> 发布完成：https://webxiongda.github.io/terminal-setup/"
