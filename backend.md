# Documentation du Backend

Ce document décrit les routes API disponibles pour le frontend, ainsi que les informations nécessaires pour interagir avec le backend.

## Base URL

La base URL pour toutes les requêtes API est `http://localhost:3000`.

## Authentification

Les routes liées à l'authentification des utilisateurs sont les suivantes :

### Enregistrement d'un nouvel utilisateur

- **Endpoint**: `POST /register`
- **Description**: Permet d'enregistrer un nouvel utilisateur.
- **Request Body (JSON)**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword",
    "role": "user" // Optionnel: "admin" ou "editor". Par défaut "user".
  }
  ```
- **Responses**:
  - `201 Created`:
    ```json
    {
      "_id": { "$oid": "..." },
      "email": "user@example.com",
      "role": "user"
    }
    ```
  - `400 Bad Request`: Si l'email ou le mot de passe sont manquants.
  - `409 Conflict`: Si l'utilisateur existe déjà.

### Connexion de l'utilisateur

- **Endpoint**: `POST /login`
- **Description**: Permet à un utilisateur de se connecter.
- **Request Body (JSON)**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "_id": { "$oid": "..." },
      "email": "user@example.com",
      "role": "user"
    }
    ```
  - `400 Bad Request`: Si l'email ou le mot de passe sont manquants.
  - `401 Unauthorized`: Si les identifiants sont invalides.

## Gestion des Utilisateurs

Les routes suivantes permettent de gérer les utilisateurs (nécessite des droits d'administrateur ou de modificateur pour certaines actions).

### Mise à jour du mot de passe d'un utilisateur

- **Endpoint**: `PUT /users/:id/password`
- **Description**: Met à jour le mot de passe d'un utilisateur spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'utilisateur (format `$oid`).
- **Request Body (JSON)**:
  ```json
  {
    "newPassword": "newsecurepassword"
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "_id": { "$oid": "..." },
      "email": "user@example.com",
      "role": "user"
    }
    ```
  - `400 Bad Request`: Si `newPassword` est manquant.
  - `404 Not Found`: Si l'utilisateur n'est pas trouvé.

### Mise à jour du rôle d'un utilisateur

- **Endpoint**: `PUT /users/:id/role`
- **Description**: Met à jour le rôle d'un utilisateur spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'utilisateur (format `$oid`).
- **Request Body (JSON)**:
  ```json
  {
    "role": "admin" // Peut être "user", "admin" ou "editor"
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "_id": { "$oid": "..." },
      "email": "user@example.com",
      "role": "admin"
    }
    ```
  - `400 Bad Request`: Si `role` est manquant.
  - `404 Not Found`: Si l'utilisateur n'est pas trouvé.

### Suppression d'un utilisateur

- **Endpoint**: `DELETE /users/:id`
- **Description**: Supprime un utilisateur spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'utilisateur (format `$oid`).
- **Responses**:
  - `204 No Content`: Si l'utilisateur a été supprimé avec succès.
  - `404 Not Found`: Si l'utilisateur n'est pas trouvé.

### Récupérer un utilisateur par ID

- **Endpoint**: `GET /users/:id`
- **Description**: Récupère les informations d'un utilisateur spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'utilisateur (format `$oid`).
- **Responses**:
  - `200 OK`:
    ```json
    {
      "_id": { "$oid": "..." },
      "email": "user@example.com",
      "role": "user"
    }
    ```
  - `404 Not Found`: Si l'utilisateur n'est pas trouvé.

### Récupérer tous les utilisateurs

- **Endpoint**: `GET /users`
- **Description**: Récupère une liste de tous les utilisateurs enregistrés.
- **Responses**:
  - `200 OK`: Un tableau d'objets utilisateur.
    ```json
    [
      {
        "_id": { "$oid": "..." },
        "email": "user1@example.com",
        "role": "user"
      },
      {
        "_id": { "$oid": "..." },
        "email": "admin@example.com",
        "role": "admin"
      }
    ]
    ```

## Routes "News"

### Récupérer toutes les actualités

- **Endpoint**: `GET /news`
- **Description**: Récupère toutes les actualités.
- **Responses**:
  - `200 OK`: Tableau d'objets actualités.

### Récupérer une actualité par ID

- **Endpoint**: `GET /news/:id`
- **Description**: Récupère une actualité spécifique par son ID.
- **URL Parameters**:
  - `id`: L'ID de l'actualité.
- **Responses**:
  - `200 OK`: Objet actualité.
  - `404 Not Found`: Si l'actualité n'est pas trouvée.

### Créer une nouvelle actualité

- **Endpoint**: `POST /news`
- **Description**: Crée une nouvelle actualité.
- **Request Body (JSON)**:
  ```json
  {
    "title": "Titre de l'actualité",
    "content": "Contenu de l'actualité"
  }
  ```
- **Responses**:
  - `201 Created`: Objet actualité créée.
  - `400 Bad Request`: Si le titre ou le contenu sont manquants.

### Mettre à jour une actualité

- **Endpoint**: `PUT /news/:id`
- **Description**: Met à jour une actualité spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'actualité.
- **Request Body (JSON)**:
  ```json
  {
    "title": "Nouveau titre",
    "content": "Nouveau contenu"
  }
  ```
- **Responses**:
  - `200 OK`: Objet actualité mise à jour.
  - `400 Bad Request`: Si le titre ou le contenu sont manquants.
  - `404 Not Found`: Si l'actualité n'est pas trouvée.

### Supprimer une actualité

- **Endpoint**: `DELETE /news/:id`
- **Description**: Supprime une actualité spécifique.
- **URL Parameters**:
  - `id`: L'ID de l'actualité.
- **Responses**:
  - `204 No Content`: Si l'actualité a été supprimée avec succès.
  - `404 Not Found`: Si l'actualité n'est pas trouvée.

## Routes "Cables"

### Récupérer tous les câbles

- **Endpoint**: `GET /cables`
- **Description**: Récupère tous les câbles.
- **Responses**:
  - `200 OK`: Tableau d'objets câbles.

### Récupérer un câble par ID

- **Endpoint**: `GET /cables/:id`
- **Description**: Récupère un câble spécifique par son ID.
- **URL Parameters**:
  - `id`: L'ID du câble.
- **Responses**:
  - `200 OK`: Objet câble.
  - `404 Not Found`: Si le câble n'est pas trouvé.

### Créer un nouveau câble

- **Endpoint**: `POST /cables`
- **Description**: Crée un nouveau câble.
- **Request Body (JSON)**:
  ```json
  {
    "name": "Nom du câble",
    "length": 10,
    "type": "Type de câble"
  }
  ```
- **Responses**:
  - `201 Created`: Objet câble créé.
  - `400 Bad Request`: Si les données du câble sont manquantes.

### Mettre à jour un câble

- **Endpoint**: `PUT /cables/:id`
- **Description**: Met à jour un câble spécifique.
- **URL Parameters**:
  - `id`: L'ID du câble.
- **Request Body (JSON)**:
  ```json
  {
    "name": "Nouveau nom",
    "length": 12,
    "type": "Nouveau type"
  }
  ```
- **Responses**:
  - `200 OK`: Objet câble mis à jour.
  - `400 Bad Request`: Si les données du câble sont manquantes.
  - `404 Not Found`: Si le câble n'est pas trouvé.

### Supprimer un câble

- **Endpoint**: `DELETE /cables/:id`
- **Description**: Supprime un câble spécifique.
- **URL Parameters**:
  - `id`: L'ID du câble.
- **Responses**:
  - `204 No Content`: Si le câble a été supprimé avec succès.
  - `404 Not Found`: Si le câble n'est pas trouvé.