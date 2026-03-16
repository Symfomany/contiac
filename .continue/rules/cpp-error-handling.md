---
name: C++ Error Handling
id: local/cpp-error-handling
version: 1.0.0
schema: v1
globs:
  - "src/**/*.cpp"
  - "src/**/*.cc"
  - "src/**/*.cxx"
  - "include/**/*.hpp"
  - "include/**/*.h"
  - "tests/**/*.cpp"
priority: 55
---

# Objectif

Ces règles définissent comment **gérer les erreurs** dans ce projet C++17.  
L’agent doit les suivre pour toute nouvelle logique, et proposer de les appliquer progressivement au code existant.

# Principes généraux

- Aucune erreur ne doit être silencieusement ignorée.
- Préférer des mécanismes explicites et cohérents à travers tout le code.
- Fournir des messages d’erreur utiles pour le diagnostic (contexte, valeurs importantes).

# Exceptions et codes de retour

- Utiliser les exceptions pour les erreurs non récupérables ou rares (ex. erreurs système, corruption de données).
- Utiliser des codes de retour ou des types dédiés (par ex. `Result`, `expected`, `Status`) pour les erreurs fréquentes ou contrôlées.
- Ne pas mélanger plusieurs styles dans la même API publique : choisir un style par module / couche.

# RAII et ressources

- Gérer les ressources (fichiers, sockets, mutex, etc.) via RAII (wrappers ou types dédiés).
- Éviter les `lock` / `unlock` manuels : préférer les locks fondés sur RAII (`std::lock_guard`, `std::unique_lock`).

# Validation des entrées

- Valider les paramètres publics (APIs, interfaces) en début de fonction.
- Si une précondition peut être violée par l’appelant, retourner une erreur explicite plutôt qu’un comportement indéfini.
- Utiliser des assertions uniquement pour les invariants internes qui ne doivent jamais être violés dans un build correct.

# Logging

- Logger les erreurs significatives avec :
  - le contexte (module, fonction),
  - les valeurs clé (identifiants, tailles, etc.),
  - l’impact potentiel (dégradation, perte de données, etc.).
- Éviter le spam de logs dans les boucles serrées ou les chemins hot.

# Directives pour l’agent

- Lorsqu’une partie du code ignore un résultat (par ex. valeur de retour d’une fonction), proposer un handling cohérent avec ces règles.
- Lors de la création d’une nouvelle API, choisir explicitement le style de gestion d’erreur (exceptions vs result type) en respectant ce qui est déjà utilisé dans le module.
- Dans les réponses, expliquer en 2–3 phrases pourquoi la gestion d’erreur proposée est appropriée.
