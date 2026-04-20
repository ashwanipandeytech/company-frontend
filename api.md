# Company Platform API Documentation

## Overview
* **Base URL (Staging):** `https://backendhandler.demohandler.in/v1`
* **Default Headers:** * `Accept: application/json`
    * `Content-Type: application/json` *(Unless using multipart/form-data for file uploads)*
* **Authentication:** All endpoints prefixed with `/admin` are fully secured and require a Sanctum Bearer Token.

---

## 1. Public Website Endpoints
*These endpoints are open and do not require authentication. They are designed for the public-facing frontend website.*

### Get Active Clients
Retrieve a list of all active clients for the portfolio/partners section.
* **Method:** `GET`
* **Endpoint:** `/clients`
* **Payload:** None
* **Success Response (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Alpha Corp",
      "website_url": "[https://alpha.com](https://alpha.com)",
      "logo_url": "[https://demohandler.in/storage/clients/alpha.png](https://demohandler.in/storage/clients/alpha.png)"
    }
  ]
}

Get Active Projects

Retrieve a list of completed or ongoing projects for the portfolio.

    Method: GET

    Endpoint: /projects

    Payload: None

    Success Response (200 OK):

JSON

{
  "data": [
    {
      "id": 1,
      "title": "E-Commerce Redesign",
      "slug": "e-commerce-redesign",
      "description": "A full frontend overhaul for a retail brand.",
      "thumbnail_url": "[https://demohandler.in/storage/projects/thumb.jpg](https://demohandler.in/storage/projects/thumb.jpg)",
      "status": "completed"
    }
  ]
}

Submit Contact Form

Process general inquiries from the "Contact Us" page.

    Method: POST

    Endpoint: /contact

    Payload:

JSON

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "Hello, I want to know more about your services."
}

    Success Response (201 Created):

JSON

{
  "message": "Thank you for reaching out. We will get back to you shortly."
}

Submit Project Enquiry

Process detailed project requests from potential clients.

    Method: POST

    Endpoint: /enquiries

    Payload:

JSON

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "company_name": "Tech Corp",
  "project_type_id": 1,
  "budget_estimation": "$10k - $20k",
  "estimated_timeline": "3 months",
  "requirements": "We need a full SaaS application built from scratch."
}

    Success Response (201 Created):

JSON

{
  "message": "Your project enquiry has been successfully submitted."
}



## 2. Admin Endpoints
2. Admin Authentication

Routes for accessing the secure administrative backend.
Admin Login

Authenticates an admin user and returns a Sanctum access token.

    Method: POST

    Endpoint: /admin/login

    Payload:

JSON

{
  "email": "superadmin@demohandler.in",
  "password": "your_secure_password"
}

    Success Response (200 OK):

JSON

{
  "message": "Login successful",
  "token": "1|LaravelSanctumTokenStringHere",
  "user": {
    "id": 1,
    "name": "System Superadmin",
    "email": "superadmin@demohandler.in",
    "role": "superadmin"
  }
}

Admin Logout

Revokes the current user's access token.

    Method: POST

    Endpoint: /admin/logout

    Headers: Authorization: Bearer {token}

    Payload: None

    Success Response (200 OK):

JSON

{
  "message": "Successfully logged out."
}

3. Admin Dashboard - Enquiries
List All Enquiries

Retrieve all submitted project inquiries.

    Method: GET

    Endpoint: /admin/enquiries

    Headers: Authorization: Bearer {token}

    Success Response (200 OK):

JSON

{
  "data": [
    {
      "id": 1,
      "name": "Jane Smith",
      "company_name": "Tech Corp",
      "status": "pending",
      "created_at": "2026-04-16T10:00:00.000000Z"
    }
  ]
}

Update Enquiry Status

Update the lifecycle status of a specific lead.

    Method: PATCH

    Endpoint: /admin/enquiries/{id}/status

    Headers: Authorization: Bearer {token}

    Payload:

JSON

{
  "status": "contacted"
}

    Success Response (200 OK):

JSON

{
  "message": "Enquiry status updated successfully."
}

4. Admin Dashboard - Clients CRUD
List All Clients

    Method: GET

    Endpoint: /admin/clients

    Headers: Authorization: Bearer {token}

    Success Response (200 OK): Returns array of all client objects.

View Specific Client

    Method: GET

    Endpoint: /admin/clients/{id}

    Headers: Authorization: Bearer {token}

    Success Response (200 OK): Returns single client object.

Create a New Client

    Method: POST

    Endpoint: /admin/clients

    Headers: Authorization: Bearer {token} | Content-Type: multipart/form-data

    Payload (Form-Data):

        name: "Beta Corp" (text)

        website_url: "https://www.google.com/search?q=https://beta.com" (text)

        is_active: "1" (text)

        logo: [File Object] (file)

    Success Response (201 Created):

JSON

{
  "message": "Client created successfully.",
  "data": { "id": 2, "name": "Beta Corp" }
}

Update Client Details

    Method: POST

    Endpoint: /admin/clients/{id}

    Headers: Authorization: Bearer {token} | Content-Type: multipart/form-data

    Payload (Form-Data): (Only send fields you want to update)

JSON

{
  "name": "Beta Corporation Updated",
  "website_url": "[https://new-beta.com](https://new-beta.com)",
  "is_active": true
}

    Success Response (200 OK):

JSON

{
  "message": "Client updated successfully."
}

Delete Client

    Method: DELETE

    Endpoint: /admin/clients/{id}

    Headers: Authorization: Bearer {token}

    Success Response (200 OK):

JSON

{
  "message": "Client deleted successfully."
}

5. Admin Dashboard - Projects CRUD
List All Projects

    Method: GET

    Endpoint: /admin/projects

    Headers: Authorization: Bearer {token}

    Success Response (200 OK): Returns array of all project objects.

View Specific Project

    Method: GET

    Endpoint: /admin/projects/{id}

    Headers: Authorization: Bearer {token}

    Success Response (200 OK): Returns single project object.

Create a New Project

    Method: POST

    Endpoint: /admin/projects

    Headers: Authorization: Bearer {token} | Content-Type: multipart/form-data

    Payload (Form-Data):

        client_id: "1" (text, optional)

        title: "Mobile App Development" (text)

        description: "Full stack mobile application build." (text)

        status: "ongoing" (text: ongoing, completed, archived)

        thumbnail: [File Object] (file)

    Success Response (201 Created):

JSON

{
  "message": "Project created successfully.",
  "data": { "id": 3, "title": "Mobile App Development" }
}

Update Project Details

    Method: POST

    Endpoint: /admin/projects/{id}

    Headers: Authorization: Bearer {token} | Content-Type: multipart/form-data

    Payload (Form-Data): (Only send fields you want to update)

JSON

{
  "title": "Mobile App Development v2",
  "status": "completed",
  "description": "Updated project description."
}

    Success Response (200 OK):

JSON

{
  "message": "Project updated successfully."
}

Delete Project

    Method: DELETE

    Endpoint: /admin/projects/{id}

    Headers: Authorization: Bearer {token}

    Success Response (200 OK):

JSON

{
  "message": "Project deleted successfully."
}