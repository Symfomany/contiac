
export NODE_OPTIONS=--max-old-space-size=16384

# 1. GUI (React)
cd gui
npm run test:coverage

# 2. Extensions VSCode  
cd ../extensions/vscode
npm run vitest

# 3. Core (si configuré)
cd ../../core
npm run vitest

# 4. Relancer SonarQube
cd ..
npx sonar-scanner
