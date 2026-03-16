---
name: C++ Style
id: local/cpp-style
version: 1.0.0
schema: v1
globs:
  - "src/**/*.cpp"
  - "src/**/*.cc"
  - "src/**/*.cxx"
  - "include/**/*.hpp"
  - "include/**/*.h"
  - "tests/**/*.cpp"
priority: 50
---

# Objectif

Ces règles définissent le **style C++17** à respecter dans ce dépôt.  
L’agent doit systématiquement les appliquer lors de la lecture, de la génération ou de la modification de code.

# Règles générales

- Toujours cibler **C++17**, ne pas utiliser de fonctionnalités C++20+.
- Préférer un code clair et lisible à l’optimisation prématurée.
- Limiter la taille des fonctions et extraire des helpers quand une fonction devient trop longue ou trop complexe.

# Nommage

- Noms de types (classes, structs, enums, aliases) en `PascalCase`.
- Noms de fonctions et variables en `camelCase`.
- Constantes globales ou `constexpr` en `kPascalCase` (ex. `kDefaultTimeoutMs`).
- Noms de namespaces en `lowercase` ou `lower_snake_case`.

# Gestion de mémoire

- Interdit d’utiliser `new` / `delete` directement dans le code applicatif.
- Utiliser `std::unique_ptr` et `std::shared_ptr` (ou `std::weak_ptr`) selon les besoins de propriété.
- Utiliser `std::make_unique` / `std::make_shared` pour créer des smart pointers.
- Préférer `std::vector` / `std::array` / `std::string` aux tableaux C bruts.

# Const, références et vues

- Ajouter `const` dès que possible (paramètres, méthodes, variables locales).
- Utiliser `const&` pour éviter des copies coûteuses.
- Utiliser `std::string_view` pour les paramètres en lecture seule quand applicable.

# Structuration du code

- Préférer les `enum class` aux enums non scoppés.
- Préférer les `using` modern C++ aux `typedef`.
- Utiliser des `namespace` plutôt que des préfixes de nom.
- Regrouper les fonctions utilitaires dans des namespaces dédiés.

# Erreurs et logging

- Ne jamais silencieusement ignorer une erreur de retour.
- Utiliser les mécanismes d’erreur standard du projet (exceptions, `expected`, codes de retour, logging…) définis dans les autres rules.
- Ajouter des messages d’erreur explicites pour faciliter le debug.

# Formatage

- Respecter le formatage existant dans le fichier si possible.
- Garder des lignes raisonnablement courtes (environ 100–120 caractères).
- Utiliser des commentaires clairs, concis, uniquement quand ils apportent une information non évidente.

# Directives pour l’agent

- Lors de la génération de code, expliquer brièvement les choix quand ils ne sont pas évidents.
- Ne pas réécrire tout un fichier uniquement pour des changements cosmétiques.
- Quand tu dois dévier de ces règles (contrainte legacy, API externe…), explicite la raison dans ta réponse.
