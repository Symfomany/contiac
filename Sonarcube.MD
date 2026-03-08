# Points clés de cette configuration

- Structure multi-modules : Le projet Continue est organisé en plusieurs modules (core, extensions, gui) qui nécessitent une configuration modulaire.
- Langages supportés : Configuration pour TypeScript (81%), JavaScript (9.1%), Kotlin (4.7%), et Python (2.8%) selon les statistiques du repository.

- Exclusions spécifiques : Exclusion des dossiers spécifiques à Continue comme binary/, vendor/, tree-sitter/, et textmate-syntaxes/ qui contiennent du code tiers.

- Extensions IDE : Support pour les deux extensions (VSCode et IntelliJ) avec leurs configurations respectives.

# Pour utiliser cette configuration :

Place ce fichier à la racine du projet Continue

Génère les rapports de couverture avec npm run test -- --coverage

Lance SonarQube localement sur le port 9000

Exécute l'analyse avec sonar-scanner ou via le wrapper npm

Cette configuration prend en compte la complexité du projet Continue qui combine du TypeScript pour le core, du React pour l'interface, du Kotlin pour IntelliJ, et du Python pour certains outils.

Ton projet Continue (146k LOC) devrait donc prendre ≤ 5-8 minutes en théorie.

Pourquoi ça peut prendre plus de temps ?
Facteurs qui ralentissent :
Multi-langages : TypeScript (81%) + Kotlin (4.7%) + Python (2.8%)

Projet complexe : Extensions VSCode/IntelliJ, GUI React, Core AI

Nombre de règles activées : Plus de règles = plus de temps

Hardware : RAM, CPU, IO disk

## Réseau : Communication avec SonarQube local

Changements principaux :

1. Focus sur les 4 modules TypeScript :
   ✅ core : Logique principale TypeScript avec ESLint

✅ binary/src : Module TypeScript binaire

✅ gui/src : Interface React/TypeScript

✅ extensions/vscode/src : Extension VSCode TypeScript/Node

2. Exclusions des autres langages :
   ❌ extensions/intellij/\*\* (Kotlin)

❌ extensions/cli/\*\* (si pas TypeScript)

❌ packages/\*\* (si pas nécessaire)

❌ **/\*.py, **/\*.kt (Python/Kotlin)

3. Configuration ESLint pour /core :

---

Parfait ! Je vois exactement ce que tu veux analyser. D'après tes captures d'écran, tu veux te concentrer sur les 4 modules TypeScript/React principaux du projet Continue. Voici ta configuration SonarQube optimisée :

## Prompt:

Je sais ce que je v eux dans ce projet ! Avec Sonarcube, En fait avec Sonarcube, j'aimerais juste analyser en Typescript qu'il y a dans /core (avec eslintsrc.json, puis le Typescript /binary qu'il y a dans, puis l'interface dans /gui en React, puis l'extensions Vscode en Typescript Node:. regarde les aperçu écrans, analyse et modifie mon sonar properties: # Configuration SonarQube pour le projet Continue (AI Code Assistant)

---

Oui, cette configuration SonarQube est conçue pour n'analyser que le code TypeScript/React (et éventuellement JavaScript), en excluant strictement tout autre langage ou module.
Elle est optimisée pour la qualité et la couverture sur tes quatre modules principaux TypeScript dans core, binary/src, gui/src, extensions/vscode/src.

### Analyse:

# Les sources incluent uniquement les dossiers principaux de code TypeScript :

sonar.sources=core,binary/src,gui/src,extensions/vscode/src

# Les dossiers de tests sont explicitement TypeScript (et JS) :

sonar.tests=core/test,gui/src/util,extensions/vscode/e2e

# Fichiers reconnus : .ts, .tsx, .js, .jsx:

sonar.typescript.file.suffixes=.ts,.tsx
sonar.javascript.file.suffixes=.js,.jsx

# Inclusion stricte:

sonar.inclusions=**/\*.ts,**/_.tsx,\*\*/_.js,\*_/_.jsx

# Inclusion/conf pour les tests:

sonar.test.inclusions=**/\*.test.ts,**/_.test.js,\*\*/_.spec.ts,**/\*.spec.js,**/\*.vitest.ts

# Exclusion complète des autres langages :

**/\*.py,**/_.kt,\*\*/_.kts

Ce qui garantit que le scan SonarQube se concentre exclusivement sur le JS/TS/React.

# Analyse publiée immédiatement (sonar.analysis.mode=publish), intégration git et quality gate obligatoire:

## Analyse et conseils

- Cette configuration est idéale si toute ton app est TypeScript (React inclus) et que tu veux exclure tout le reste pour la mesure qualité/couverture.

- Vérifie que tes chemins de build et coverage sont synchronisés avec tes modules pour que Sonar récupère bien les fichiers lcov après les tests.

- Pour les mono-repos, maintenir une configuration propre pour chaque tsconfig permet d'éviter le problème du "no tsconfig matching" rapporté dans la doc SonarQube.

# Astuce : si tu ajoutes un autre langage ou toolchain, adapte ou resserre sonar.sources et les exclusions.

# Opensources Solutions

Principaux outils open-source

- Semgrep : Analyse statique puissante, orientée sécurité et flexibilité des règles personnalisées.

- ESLint : Linter JS/TS ultra-populaire, spécialisation sur les bonnes pratiques, supports React/TypeScript et extensions pour sécurité.

- Codacy (community) : Plateforme de qualimétrie et sécurité, intégration avec CI/CD et tableaux de bord, version gratuite adaptée aux petits projets.

## Premier Scan

Points critiques identifiés

1. Couverture de tests à 0 %
   Aucun test n'est détecté sur les 27 000 lignes cibles, ce qui empêche toute mesure réelle de qualité logicielle et fragilise la maintenabilité.

2. Fiabilité faible (292 issues)
   Beaucoup de problèmes non résolus qui peuvent être des bugs, des scénarios mal gérés ou du code non robuste.

3. Maintenabilité (2 118 issues)
   Bien qu'elle soit notée "A", le nombre d’issues trahit une dette technique importante qu’il faudrait prioriser en backlog.

4. Sécurité (2 issues + 68 hotspots)
   Quelques failles identifiées : les security hotspots demandent une analyse humaine pour validation ou correction, car ce sont des points d’attention qui pourraient être des vulnérabilités.

5. Duplication (2,5 %)
   Un taux de duplication modéré, mais sur une grande base de code (120k lignes), cela représente plusieurs milliers de lignes à factoriser.

Le problème vient du fait que Vitest ne génère pas les fichiers lcov.info dans core/coverage, gui/coverage, extensions/vscode/coverage, binary/coverage malgré l’exécution du coverage dans chaque module. SonarQube ne reçoit donc aucun rapport de couverture à analyser : cela explique le score de 0 %.
