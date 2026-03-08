import { ConfigYaml } from "@continuedev/config-yaml";

export const defaultConfig: ConfigYaml = {
  name: "Local Config",
  version: "1.0.0",
  schema: "v1",
  models: [
    {
      name: "Devstral",
      provider: "vllm",
      model: "mistralai/Devstral-Small-2505",
      apiKey: "K:i5UHbzkL#Ofv7r",
      apiBase: "https://iag.gcp.cloudricity.org/devstralsmall/v1",
      defaultCompletionOptions: {
        temperature: 0.3,
        contextLength: 100000,
        maxTokens: 8000,
        topK: 40,
        topP: 0.9,
        stop: ["// End", "# End", "<|im_end|>"],
      },
      roles: ["chat", "embed", "summarize"],
      autocompleteOptions: {
        debounceDelay: 150,
        template:
          "<fim_prefix>{{{prefix}}}<fim_suffix>{{{suffix}}}<fim_middle>",
      },
      chatOptions: {
        baseSystemMessage: `
          Tu es Genedis, un assistant de code expert spécialisé en C++17 et ultérieur.
          Tu maîtrises la conception logicielle moderne, gestion mémoire RAII, smart pointers,
          programmation multi-thread, templates, design patterns C++, robustesse et optimisation.
          Ton rôle est d'aider à produire du code conforme aux C++ Core Guidelines.
        `,
      },
      requestOptions: {
        verifySsl: false,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        timeout: 600000,
      },
    },
    {
      name: "Devstral Edit",
      provider: "vllm",
      model: "mistralai/Devstral-Small-2505",
      apiKey: "K:i5UHbzkL#Ofv7r",
      apiBase: "https://iag.gcp.cloudricity.org/devstralsmall/v1",
      roles: ["edit", "apply"],
      promptTemplates: {
        edit: `
  <|im_start|>system
  Tu es un assistant de développement expert en C++ 17 et ultérieur. Tu dois éditer le code suivant de manière précise.
  Respecte les conventions modernes C++, l'indentation, les espaces, et les bonnes pratiques STL/RAII.
  Retourne UNIQUEMENT le code modifié, sans explications ni blocs markdown.<|im_end|>
  <|im_start|>user
  Code C++ à éditer:
  \`\`\`
  {{{codeToEdit}}}
  \`\`\`
  Instructions d'édition: "{{{userInput}}}"<|im_end|>
  <|im_start|>assistant
        `,
      },
      chatOptions: {
        baseSystemMessage: `
  Tu es un assistant de développement expert spécialisé dans l'édition de code C++.
  Quand tu édites, respecte :
  - Les conventions modernes de nommage, d'organisation du code et de gestion mémoire
  - L'utilisation optimale des containers standards et des smart pointers
  - Les idiomes C++ modernes (constexpr, move semantics, lambdas, ranges, ...)
  - Gère les exceptions et la robustesse du code
  - Sois précis avec la gestion mémoire (RAII) et les patterns C++
  - Réponds en français à toute question C++/CMake/performance
  - Ne rends que le code modifié sans explication
        `,
      },
      defaultCompletionOptions: {
        temperature: 0.3,
        maxTokens: 8096,
        contextLength: 100000,
        topK: 40,
        topP: 0.9,
        stop: ["// End", "# End", "<|im_end|>"],
      },
      requestOptions: {
        verifySsl: false,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        timeout: 600000,
      },
    },
    {
      name: "Magistral",
      provider: "vllm",
      model: "mistralai/Magistral-Small-2506",
      apiKey: "K:i5UHbzkL#Ofv7r",
      apiBase: "https://iag.gcp.cloudricity.org/magistral/v1",
      defaultCompletionOptions: {
        reasoning: true,
        temperature: 0.7,
        contextLength: 40000,
        maxTokens: 30960,
        topK: 40,
        topP: 0.95,
        stop: ["// End", "# End", "</think>", "} // namespace"],
      },
      autocompleteOptions: {
        debounceDelay: 200,
      },
      chatOptions: {
        baseSystemMessage: `
  Tu es Genedis, un assistant de code expert spécialisé en C++17 et ultérieur.
  Tu dois suivre ce processus pour toute réponse complexe :
  <think>Annote ici le problème C++ étape par étape.
  Considère :
  - Les patterns de conception C++ appropriés (RAII, Command, Factory, Strategy, Observer, ...)
  - Les bonnes pratiques de gestion mémoire et de performance native C++
  - La conception multi-thread moderne (std::thread, std::future, ...)
  - L'utilisation optimale de la STL et des fonctionnalités des derniers standards
  Ensuite, fournis une réponse structurée en français qui traite le problème avec exemples, explications avancées et focus sur l'évolutivité, la sûreté et la performance.
  Tu es toujours précis, pédagogique et technique dans tes suggestions C++.
        `,
      },
      requestOptions: {
        verifySsl: false,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        timeout: 45000,
      },
      roles: ["chat"],
    },
    {
      name: "DeepSeek-Coder-V2-Lite-Base",
      provider: "vllm",
      model: "deepseek-ai/DeepSeek-Coder-V2-Lite-Base",
      apiKey: "K:i5UHbzkL#Ofv7r",
      apiBase: "https://iag.gcp.cloudricity.org/deepseeklites/v1",
      defaultCompletionOptions: {
        temperature: 0.3,
        maxTokens: 500,
        contextLength: 3276,
        topP: 0.9,
        stop: ["}"],
      },
      requestOptions: {
        verifySsl: false,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
        timeout: 15000,
      },
      autocompleteOptions: {
        maxPromptTokens: 1500,
        prefixPercentage: 0.8,
        template:
          "<fim_prefix>{{{prefix}}}<fim_suffix>{{{suffix}}}<fim_middle>",
      },
      roles: ["autocomplete"],
    },
    {
      name: "Together",
      provider: "together",
      model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
      apiKey:
        "676fbdd6930fdabaa585045e7a63ce65951a2cfed5d1e671c8dbe218a08e647e",
      roles: ["chat", "edit", "apply", "autocomplete"],
      chatOptions: {
        baseSystemMessage: `
  Tu es Genedis, un assistant de code expert français spécialisé en C++17 et ultérieur.
  Tu ne réponds qu'en français. 
  Tu aides les développeurs à : coder, corriger et optimiser tout projet C++ moderne, expliquer les designs patterns, la gestion mémoire, la programmation générique, la robustesse logicielle et l'intégration continue.
  Tu adaptes toujours tes réponses pour un public de développeurs avancés.
        `,
      },
      promptTemplates: {
        edit: `
  # Contexte
  Tu es Genedis, assistant expert C++ francophone, tu ne t'exprimes qu'en français.
  L'utilisateur te fournit du code source et une instruction précise concernant une modification à réaliser.
  
  # Consignes pour ta réponse
  - Ne réponds qu'à propos du code fourni.
  - Applique précisément l'instruction.
  - Ne dupliques pas le code existant.
  - Respecte le format et l'indentation.
  - Donne uniquement le code résultant (modifié). N'ajoute ni contexte, ni explication, ni salutation, ni préambule.
  - Si tu ajoutes des commentaires dans le code modifié, ils doivent expliquer brièvement la modification (en français).
  
  # Entrées utilisateur :
  ## Code source :
  {{input}}
  
  ## Instruction :
  {{instruction}}
  
  # Code modifié :
        `,
      },
    },
    // ... Ajoute les autres models ici selon besoin
  ],
  rules: [
    "En mode Edit de code, préserve l'indentation exacte et maintiens les conventions C++ modernes (snake_case/camelCase selon contexte, m_ ou pas pour membres d'instance)",
    "Tu es un assistant de code expert pour développeurs C++ expérimentés, capable d'expliquer les idiomes du standard moderne, la gestion mémoire, la programmation multi-thread, les design patterns, et tout ce qui touche à la robustesse des applications natives.",
    "Pour toute génération, correction ou optimisation de code C++, explique les patterns utilisés et les implications de performance.",
    "Pour les questions d'optimisation ou sécurité C++, propose toujours des stratégies concrètes avec références aux bonnes pratiques et aux standards C++.",
    "Respecter systématiquement les bonnes pratiques des C++ Core Guidelines https://raw.githubusercontent.com/isocpp/CppCoreGuidelines/refs/heads/master/CppCoreGuidelines.md pour la conception, l'édition et la génération de tout code C++ : sécurité, simplicité, efficacité, usage des idiomes modernes et conformité au standard ISO C++",
  ],
  prompts: [
    {
      name: "Documentation C++ avancée",
      description:
        "Génère une documentation technique C++ complète en français.",
      prompt: `
        Rédige une documentation structurée et avancée en français pour le code C++ ci-dessous.
        Inclue des exemples d'utilisation, une explication détaillée des patterns utilisés, et des recommandations pour développeurs experts.
      `,
    },
    {
      name: "Correction bug C++ complexe",
      description: "Corrige un bug complexe et explique la solution.",
      prompt: `
        Voici un code C++ présentant un bug subtil :

        {code}

        Identifie le problème (gestion mémoire, exceptions, threading, ...)  
        Corrige-le et explique la solution en français pour un développeur confirmé.
      `,
    },
    {
      name: "Optimisation C++ experte",
      description:
        "Optimise le code C++ pour la performance et la maintenabilité.",
      prompt: `
        Optimise le code C++ suivant pour améliorer ses performances, sa gestion mémoire ou sa maintenabilité.
        Explique les changements selon les bonnes pratiques C++17 et ultérieures.
      `,
    },
    {
      name: "Refactoring design pattern C++",
      description: "Améliore la structure avec un design pattern adapté.",
      prompt: `
        Analyse ce code C++ et propose une refactorisation vers un design pattern C++ robuste.  
        Explique la séparation des responsabilités et les patterns utilisés.
      `,
    },
    {
      name: "Tests GoogleTest avancés",
      description: "Génère des tests unitaires GoogleTest robustes.",
      prompt: `
        Crée des tests unitaires GoogleTest pour le code C++ suivant, en couvrant les cas normaux, limites et d'erreur.
        Explique la stratégie de test et l'intégration avec l'intégration continue.
      `,
    },
  ],
  // Ajoute éventuels docs, etc. si nécessaire
};
