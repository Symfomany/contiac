# 📚 Documentation du Projet : Spring Boot + Angular

Ce document décrit l'architecture, les technologies et les bonnes pratiques appliquées dans le projet full-stack **Spring Boot (backend)** + **Angular (frontend)**.

---

## 🏗️ Architecture Globale

```
+------------------+       +------------------+
|   Frontend       |       |   Backend        |
|   Angular App    | <---> |   Spring Boot    |
|   (Port 4200)    |  HTTP |   (Port 8080)    |
+------------------+       +------------------+
       |                          |
       |                          +---> MySQL (via JPA)
       |                          |
       |                          +---> Kafka / Redpanda (via Spring Kafka)
       |                          |
       |                          +---> Flyway (migrations)
       |
       +---> Docker Compose orchestre l'ensemble
```

---

## 🖥️ Backend : Spring Boot

### 🔧 Stack Technique

| Technologie           | Rôle                                                        |
| --------------------- | ----------------------------------------------------------- |
| **Java 21**           | Langage principal (records, sealed types, pattern matching) |
| **Spring Boot 3.2.4** | Framework principal (auto-configuration, actuator, etc.)    |
| **Spring Web MVC**    | Contrôleurs REST                                            |
| **Spring Data JPA**   | Persistance ORM                                             |
| **Spring Kafka**      | Production/consommation de messages Kafka                   |
| **Spring Security**   | Sécurité (authentification, autorisation)                   |
| **Spring Validation** | Validation des DTOs (`@Valid`)                              |
| **Flyway**            | Migration de base de données                                |
| **Testcontainers**    | Tests d'intégration avec MySQL + Kafka                      |
| **Springdoc OpenAPI** | Documentation API (Swagger UI)                              |
| **Actuator**          | Surveillance et santé de l'application                      |

---

### 📂 Organisation des Packages (Layered Architecture)

```
src/main/java/com/madadipouya/springkafkatest/
├── controller/       → Endpoints REST
├── service/          → Logique métier
├── repository/       → Accès aux données (JPA)
├── model/            → Entités JPA
├── dto/              → Objets de transfert
├── config/           → Configuration Spring
├── kafka/            → Producteurs/consommateurs Kafka
├── security/         → Sécurité (si implémentée)
└── SpringKafkaTestApplication.java
```

---

### 🔐 Bonnes Pratiques Appliquées

- ✅ **IOC/DI** via `@Component`, `@Service`, `@Repository`
- ✅ **Sécurité** via `spring-boot-starter-security` (à configurer avec JWT/OAuth2)
- ✅ **Validation** des entrées avec `@Valid` sur les contrôleurs
- ✅ **OpenAPI** disponible sur `/swagger-ui.html`
- ✅ **Actuator** sur `/actuator` (à sécuriser en prod)
- ✅ **Flyway** pour versionner les schémas DB
- ✅ **Tests d’intégration** avec Testcontainers (Kafka + MySQL)
- ✅ **Java 21** : utilisation de `record`, `sealed`, etc.

---

### ⚠️ Points à surveiller

| Risque                            | Recommandation                                     |
| --------------------------------- | -------------------------------------------------- |
| **Entités exposées en REST**      | Utiliser des DTOs, pas les entités JPA directement |
| **Absence de `equals/hashCode`**  | À implémenter sur les entités                      |
| **Kafka Consumers non sécurisés** | Ajouter mécanismes de retry, DLQ                   |
| **Config OIDC incomplète**        | À configurer si auth externe (Keycloak, Auth0)     |
| **Pas de tests de sécurité**      | Ajouter tests Spring Security                      |

---

## 🖼️ Frontend : Angular

### 🔧 Stack Technique

| Technologie                     | Rôle                     |
| ------------------------------- | ------------------------ |
| **Angular**                     | Framework frontend (SPA) |
| **TypeScript**                  | Langage principal        |
| **RxJS**                        | Gestion asynchrone       |
| **Angular Material** (probable) | UI Components            |
| **Angular CLI**                 | Build, serve, test       |

---

### 📂 Structure (angular-user-app/)

```
angular-user-app/
├── src/
│   ├── app/
│   │   ├── components/    → Composants UI
│   │   ├── services/      → Appels HTTP vers Spring Boot
│   │   ├── models/        → Modèles TypeScript
│   │   ├── guards/        → Protection de routes
│   │   └── app.module.ts
│   ├── assets/            → Images, fichiers statiques
│   └── environments/      → Config par environnement
├── package.json           → Dépendances
└── angular.json           → Configuration build
```
