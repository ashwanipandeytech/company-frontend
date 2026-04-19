# Implemented API Endpoints

This document lists all the API endpoints currently implemented in the `ApiService` (`src/app/core/services/api.service.ts`).

**Base URL:** `https://backendhandler.demohandler.in/api/v1`

## 1. Public Website Endpoints
These endpoints are accessible without authentication.

| Feature | Method | Endpoint | Service Method |
| :--- | :--- | :--- | :--- |
| **Get Active Clients** | `GET` | `/clients` | `getActiveClients()` |
| **Get Active Projects** | `GET` | `/projects` | `getActiveProjects()` |
| **Submit Contact Form** | `POST` | `/contact` | `submitContactForm(payload)` |
| **Submit Project Enquiry** | `POST` | `/enquiries` | `submitProjectEnquiry(payload)` |

---

## 2. Admin Authentication
Requires administrative access.

| Feature | Method | Endpoint | Service Method |
| :--- | :--- | :--- | :--- |
| **Admin Login** | `POST` | `/admin/login` | `adminLogin(payload)` |
| **Admin Logout** | `POST` | `/admin/logout` | `adminLogout()` |

---

## 3. Admin Dashboard - Enquiries
Requires `Authorization: Bearer {token}`.

| Feature | Method | Endpoint | Service Method |
| :--- | :--- | :--- | :--- |
| **List All Enquiries** | `GET` | `/admin/enquiries` | `getAllEnquiries()` |
| **Update Enquiry Status** | `PATCH` | `/admin/enquiries/{id}/status` | `updateEnquiryStatus(id, status)` |

---

## 4. Admin Dashboard - Clients CRUD
Requires `Authorization: Bearer {token}`.

| Feature | Method | Endpoint | Service Method |
| :--- | :--- | :--- | :--- |
| **List All Clients** | `GET` | `/admin/clients` | `getAdminClients()` |
| **View Specific Client** | `GET` | `/admin/clients/{id}` | `getAdminClientById(id)` |
| **Create New Client** | `POST` | `/admin/clients` | `createClient(formData)` |
| **Update Client** | `PUT` | `/admin/clients/{id}` | `updateClient(id, payload)` |
| **Delete Client** | `DELETE` | `/admin/clients/{id}` | `deleteClient(id)` |

---

## 5. Admin Dashboard - Projects CRUD
Requires `Authorization: Bearer {token}`.

| Feature | Method | Endpoint | Service Method |
| :--- | :--- | :--- | :--- |
| **List All Projects** | `GET` | `/admin/projects` | `getAdminProjects()` |
| **View Specific Project** | `GET` | `/admin/projects/{id}` | `getAdminProjectById(id)` |
| **Create New Project** | `POST` | `/admin/projects` | `createProject(formData)` |
| **Update Project** | `PUT` | `/admin/projects/{id}` | `updateProject(id, payload)` |
| **Delete Project** | `DELETE` | `/admin/projects/{id}` | `deleteProject(id)` |

---

## Notes on Implementation
- **Environment Managed:** The Base URL is managed via `src/environments/environment.ts`.
- **Interceptors:** Admin requests automatically include the `admin_token` from `localStorage`.
- **Form Data:** Create methods for Clients and Projects use `FormData` to support file/logo uploads.
