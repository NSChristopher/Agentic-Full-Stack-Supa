# API Documentation

**Base URL**: `https://nicjjsyxvukiukkvugcq.supabase.co`

## Authentication

All endpoints require: `Authorization: Bearer <jwt_token>`

---

## Auth Endpoints

### POST `/auth/v1/signup`

**Description**: Register a new user  
**Body**:

```json
{
  "email": "string",
  "password": "string",
  "data": {
    "username": "string"
  }
}
```

**Response**: `200` - User created and authenticated

### POST `/auth/v1/token?grant_type=password`

**Description**: Sign in user  
**Body**:

```json
{
  "email": "string",
  "password": "string"
}
```

**Response**: `200` - JWT token and user data

### POST `/auth/v1/logout`

**Description**: Sign out current user  
**Headers**: `Authorization: Bearer <jwt_token>`  
**Response**: `204` - Success

### GET `/auth/v1/user`

**Description**: Get current user information  
**Headers**: `Authorization: Bearer <jwt_token>`  
**Response**: `200` - User data

---

## Posts Endpoints

**Base Path**: `/rest/v1/posts`  
**Required Headers**: `apikey: <anon_key>`, `Authorization: Bearer <jwt_token>`

### GET `/rest/v1/posts`

**Description**: Retrieve all posts  
**Query Parameters**:

- `select` - Columns to select (default: `*`)
- `order` - Sort order (e.g., `created_at.desc`)
- `limit` - Max results
- `offset` - Pagination offset

**Response**: `200` - Array of posts

### GET `/rest/v1/posts?id=eq.{id}`

**Description**: Retrieve specific post by ID  
**Query Parameters**:

- `id=eq.{id}` - Post ID filter
- `select` - Columns to select

**Response**: `200` - Single post object

### POST `/rest/v1/posts`

**Description**: Create new post  
**Body**:

```json
{
  "title": "string",
  "content": "string (optional)",
  "published": "boolean (optional, default: true)"
}
```

**Response**: `201` - Created post object

### PATCH `/rest/v1/posts?id=eq.{id}`

**Description**: Update existing post  
**Query Parameters**: `id=eq.{id}` - Post ID to update  
**Body**:

```json
{
  "title": "string (optional)",
  "content": "string (optional)",
  "published": "boolean (optional)"
}
```

**Response**: `200` - Updated post object

### DELETE `/rest/v1/posts?id=eq.{id}`

**Description**: Delete post  
**Query Parameters**: `id=eq.{id}` - Post ID to delete  
**Response**: `204` - Success

---

## Error Responses

**400 Bad Request**

```json
{
  "code": "PGRST102",
  "message": "Invalid query parameter"
}
```

**401 Unauthorized**

```json
{
  "message": "Invalid JWT token"
}
```

**403 Forbidden**

```json
{
  "code": "PGRST301",
  "message": "Insufficient permissions"
}
```

---

_Last Updated: July 1, 2025_
