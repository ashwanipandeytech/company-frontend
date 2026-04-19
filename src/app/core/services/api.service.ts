import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private readonly defaultHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  // --- Public Website Endpoints ---

  getActiveClients(): Observable<ApiResponse<Client[]>> {
    return this.http.get<ApiResponse<Client[]>>(`${this.baseUrl}/clients`, { headers: this.defaultHeaders });
  }

  getActiveProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(`${this.baseUrl}/projects`, { headers: this.defaultHeaders });
  }

  submitContactForm(payload: ContactPayload): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/contact`, payload, { headers: this.defaultHeaders });
  }

  submitProjectEnquiry(payload: ProjectEnquiryPayload): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/enquiries`, payload, { headers: this.defaultHeaders });
  }

  // --- Admin Endpoints ---

  private getAdminHeaders(): HttpHeaders {
    const token = localStorage.getItem('admin_token');
    return this.defaultHeaders.set('Authorization', `Bearer ${token}`);
  }

  adminLogin(payload: any): Observable<AdminLoginResponse> {
    return this.http.post<AdminLoginResponse>(`${this.baseUrl}/admin/login`, payload, { headers: this.defaultHeaders });
  }

  adminLogout(): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(`${this.baseUrl}/admin/logout`, {}, { headers: this.getAdminHeaders() });
  }

  // --- Admin Dashboard - Enquiries ---

  getAllEnquiries(): Observable<ApiResponse<Enquiry[]>> {
    return this.http.get<ApiResponse<Enquiry[]>>(`${this.baseUrl}/admin/enquiries`, { headers: this.getAdminHeaders() });
  }

  updateEnquiryStatus(id: number, status: string): Observable<MessageResponse> {
    return this.http.patch<MessageResponse>(`${this.baseUrl}/admin/enquiries/${id}/status`, { status }, { headers: this.getAdminHeaders() });
  }

  // --- Admin Dashboard - Clients CRUD ---

  getAdminClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/admin/clients`, { headers: this.getAdminHeaders() });
  }

  getAdminClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/admin/clients/${id}`, { headers: this.getAdminHeaders() });
  }

  createClient(formData: FormData): Observable<MessageResponse & { data: Client }> {
    return this.http.post<MessageResponse & { data: Client }>(`${this.baseUrl}/admin/clients`, formData, { headers: this.getAdminHeaders() });
  }

  updateClient(id: number, payload: Partial<Client>): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.baseUrl}/admin/clients/${id}`, payload, { headers: this.getAdminHeaders() });
  }

  deleteClient(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.baseUrl}/admin/clients/${id}`, { headers: this.getAdminHeaders() });
  }

  // --- Admin Dashboard - Projects CRUD ---

  getAdminProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/admin/projects`, { headers: this.getAdminHeaders() });
  }

  getAdminProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/admin/projects/${id}`, { headers: this.getAdminHeaders() });
  }

  createProject(formData: FormData): Observable<MessageResponse & { data: Project }> {
    return this.http.post<MessageResponse & { data: Project }>(`${this.baseUrl}/admin/projects`, formData, { headers: this.getAdminHeaders() });
  }

  updateProject(id: number, payload: Partial<Project>): Observable<MessageResponse> {
    return this.http.put<MessageResponse>(`${this.baseUrl}/admin/projects/${id}`, payload, { headers: this.getAdminHeaders() });
  }

  deleteProject(id: number): Observable<MessageResponse> {
    return this.http.delete<MessageResponse>(`${this.baseUrl}/admin/projects/${id}`, { headers: this.getAdminHeaders() });
  }
}
