#!/bin/bash

set -e

echo "Suppression des node_modules et package-lock.json..."

rm -rf node_modules/
rm -rf core/node_modules/
rm -f  core/package-lock.json
rm -rf binary/tmp/
rm -rf binary/build/
rm -rf binary/bin/
rm -rf binary/out/
rm -rf binary/node_modules/
rm -f  binary/package-lock.json
rm -rf gui/node_modules/
rm -rf gui/package-lock.json
rm -rf gui/coverage/
rm -rf gui/dist/
rm -rf extensions/vscode/package-lock.json
rm -rf extensions/vscode/tmp/
rm -rf extensions/vscode/build/
rm -rf extensions/vscode/bin/
rm -rf extensions/vscode/out/
rm -rf extensions/vscode/node_modules/
rm -rf extensions/intellij/package-lock.json
rm -rf extensions/intellij/.intellijPlatform
rm -rf extensions/intellij/.gradle/
rm -rf extensions/intellij/build
rm -rf extensions/cli/package-lock.json
rm -rf extensions/cli/node_modules/
rm -rf docs/

echo "Nettoyage terminé."
