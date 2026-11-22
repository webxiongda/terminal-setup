#!/usr/bin/env bash
# 文案漂移检查：共享区块不允许手工改动；JSON 文案源变更后必须提交生成结果。
set -euo pipefail
cd "$(dirname "$0")/.."

TARGETS=(README.md README_CN.md site/app.js site/index.html)

fail() {
  echo "文案源已变更，请提交生成结果" >&2
  echo "  涉及文件：${TARGETS[*]}" >&2
  exit 1
}

# 1) 生成前：共享区块 / 生成产物若被手工改动，直接判失败。
git diff --exit-code -- "${TARGETS[@]}" >/dev/null 2>&1 || fail

# 2) 生成后：若 JSON 文案源改了但没跑生成器（或跑了没提交），这里会拦截。
node scripts/gen-content.mjs >/dev/null || fail
git diff --exit-code -- "${TARGETS[@]}" >/dev/null 2>&1 || fail

echo "文案漂移检查通过：${TARGETS[*]}"
