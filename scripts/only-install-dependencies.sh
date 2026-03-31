#!/usr/bin/env bash
# This is used in a task in .vscode/tasks.json
# Start developing with:
# - Run Task -> Install Dependencies
# - Debug -> Extension
set -e


# Check if node version matches .nvmrc
if [ -f .nvmrc ]; then
    required_node_version=$(cat .nvmrc)
    current_node_version=$(node -v)
    
    # Remove 'v' prefix from versions for comparison
    required_version=${required_node_version#v}
    current_version=${current_node_version#v}

    if [ "$required_version" != "$current_version" ]; then
        echo "⚠️  Warning: Your Node.js version ($current_node_version) does not match the required version ($required_node_version)"
        echo "Please consider switching to the correct version using: nvm use"
        
        if [ -t 0 ]; then
            read -p "Press Enter to continue with installation anyway..."
        else
            echo "Continuing with installation anyway..."
        fi
        echo
    fi
fi
export NODE_OPTIONS=--max-old-space-size=12096

echo "Installing root-level dependencies..."
npm install
 
echo "Building packages (fetch, openai-adapters, config-yaml)..."
node ./scripts/build-packages.js

echo "Installing Core extension dependencies..."
pushd core
## This flag is set because we pull down Chromium at runtime
export PUPPETEER_SKIP_DOWNLOAD='true'
npm install
npm link
popd

pushd packages/openai-adapters
npm install
npm run build         # Si besoin
npm link
cd ../../core
npm install
npm link ../packages/openai-adapters   # Si openai-adapters n'est pas publié sur npm
npm link                 # Pour rendre core globalement linkable
popd

echo "Installing GUI extension dependencies..."
pushd gui
npm install
# npm link @continuedev/core
npm link @continuedev/core
NODE_OPTIONS="--max-old-space-size=4096" npm run build
popd

# VSCode Extension (will also package GUI)
echo "Installing VSCode extension dependencies..."
pushd extensions/vscode
# This does way too many things inline but is the common denominator between many of the scripts
npm install
npm link @continuedev/core
# npm run prepackage # not required since npm run package has prescript of prepackage
# npm run package
popd

echo "Installing binary dependencies..."
pushd binary
npm install
npm run build
popd

# echo "Installing docs dependencies..."
# pushd docs
# npm install
# popd



########################### Others

# pushd extensions/vscode
# echo "Clear dependencies Vscode"
# npm cache clean --force
# # rm -rf node_modules package-lock.json
# # npm install
# npm install @vscode/ripgrep --force
# npm install @lancedb/vectordb-win32-x64-msvc --force
# # npm rebuild sqlite3
# popd


# # VSCode Extension (will also package GUI)
# echo "Installing VSCode extension dependencies..."
# pushd extensions/vscode
# # # # Erreor SQLite 3
#  npm rebuild sqlite3

# rm -rf node_modules package-lock.json
# # # echo "Install  Vscode/vsce..."
# # # npm install -g @vscode/vsce

# # # # This does way too many things inline but is the common denominator between many of the scripts
# echo "Install dependencies..."
# npm install

# # echo "Go linking core..."
# npm link @continuedev/core

# # echo "Go packaging"

# # # npm run prepackage # not required since npm run package has prescript of prepackage
# # npm run package
# # echo "Build terminé package vsce"
# popd


# echo "Installing binary dependencies..."
# pushd binary
# rm -rf node_modules package-lock.json
# npm install
# npm run build
# popd

# echo "Installing docs dependencies..."
# pushd docs
# npm install
# popd
