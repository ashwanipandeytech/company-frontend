import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  Client, 
  Project, 
  ContactPayload, 
  ProjectEnquiryPayload, 
  ApiResponse, 
  MessageResponse, 
  AdminLoginResponse,
  Enquiry
} from '../models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  // --- Public Website Endpoints ---

  getActiveClients(): Observable<ApiResponse<Client[]>> {
    return this.http.get<ApiResponse<Client[]>>(`${this.baseUrl}/clients`);
  }

  getActiveProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(`${this.baseUrl}/projects`);
  }

  submitContactForm(payload: ContactPayload): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/contact`, payload);
  }

  submitProjectEnquiry(payload: ProjectEnquiryPayload): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/enquiries`, payload);
  }

  // --- Admin Endpoints ---

  adminLogin(payload: any): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.baseUrl}/admin/login`, payload);
  }

  adminLogout(): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/admin/logout`, {});
  }

  // --- Admin Dashboard - Enquiries ---

  getAllEnquiries(): Observable<ApiResponse<Enquiry[]>> {
    return this.http.get<ApiResponse<Enquiry[]>>(`${this.baseUrl}/admin/enquiries`);
  }

  updateEnquiryStatus(id: number, status: string): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.baseUrl}/admin/enquiries/${id}/status`, { status });
  }

  replyToEnquiry(id: number, message: string): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/admin/enquiries/${id}/reply`, { message });
  }

  // --- Admin Dashboard - Clients CRUD ---

  getAdminClients(): Observable<ApiResponse<Client[]>> {
    return this.http.get<ApiResponse<Client[]>>(`${this.baseUrl}/admin/clients`);
  }

  getAdminClientById(id: number): Observable<ApiResponse<Client>> {
    return this.http.get<ApiResponse<Client>>(`${this.baseUrl}/admin/clients/${id}`);
  }

  createClient(formData: FormData): Observable<MessageResponse & { data: Client }> {
    return this.http.post<MessageResponse & { data: Client }>(`${this.baseUrl}/admin/clients`, formData);
  }

  updateClient(id: number, formData: FormData): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.baseUrl}/admin/clients/${id}`, formData);
  }

  deleteClient(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.baseUrl}/admin/clients/${id}`);
  }

  // --- Admin Dashboard - Projects CRUD ---

  getAdminProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(`${this.baseUrl}/admin/projects`);
  }

  getAdminProjectById(id: number): Observable<ApiResponse<Project>> {
    return this.http.get<ApiResponse<Project>>(`${this.baseUrl}/admin/projects/${id}`);
  }

  createProject(formData: FormData): Observable<MessageResponse & { data: Project }> {
    return this.http.post<MessageResponse & { data: Project }>(`${this.baseUrl}/admin/projects`, formData);
  }

  updateProject(id: number, formData: FormData): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.baseUrl}/admin/projects/${id}`, formData);
  }

  deleteProject(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.baseUrl}/admin/projects/${id}`);
  }
}
