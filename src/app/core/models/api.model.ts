export interface Client {
  id: number;
  name: string;
  website_url: string;
  website?: string; // Fallback
  logo_url?: string;
  logo?: string; // Fallback for raw path
  is_active?: boolean;
}

export interface Project {
  id: number;
  title: string;
  slug?: string;
  description: string;
  thumbnail_url?: string;
  thumbnail?: string; // Fallback for raw path
  status: 'ongoing' | 'completed' | 'archived';
  client_id?: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProjectEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  project_type_id: number;
  budget_estimation: string;
  estimated_timeline: string;
  requirements: string;
}

export interface ApiResponse<T> {
  data: T;
}

export interface MessageResponse {
  message: string;
}

export interface AdminLoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

export interface Enquiry {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  company_name: string;
  project_type_id?: number;
  budget_estimation?: string;
  estimated_timeline?: string;
  requirements?: string;
  status: 'new' | 'pending' | 'contacted' | 'resolved' | 'cancelled';
  created_at: string;
  updated_at?: string;
  project_type?: {
    id: number;
    name: string;
  };
}
