const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  count?: number;
  data?: T;
  user?: any;
  token?: string;
  errors?: Array<{ field: string; message: string }>;
}

async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }


  try {
    const res = await fetch(url, {
      ...options,
      headers,
      credentials: 'include', // sends and receives HttpOnly cookies
    });

    const data = await res.json().catch(() => ({
      success: false,
      message: `Server returned status ${res.status}`,
    }));

    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }

    return data;
  } catch (error: any) {
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
}

export const api = {
  // Public
  getProjects: (params?: { status?: string; category?: string; featured?: boolean }) => {
    const query = new URLSearchParams();
    if (params?.status) query.set('status', params.status);
    if (params?.category) query.set('category', params.category);
    if (params?.featured !== undefined) query.set('featured', String(params.featured));
    const qs = query.toString() ? `?${query.toString()}` : '';
    return apiRequest(`/projects${qs}`, { method: 'GET' });
  },

  getProjectById: (id: string) => apiRequest(`/projects/${id}`, { method: 'GET' }),

  getDivisions: () => apiRequest('/divisions', { method: 'GET' }),

  getDivisionBySlug: (slug: string) => apiRequest(`/divisions/${slug}`, { method: 'GET' }),

  getEquipment: (params?: { category?: string; status?: string }) => {
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.status) query.set('status', params.status);
    const qs = query.toString() ? `?${query.toString()}` : '';
    return apiRequest(`/equipment${qs}`, { method: 'GET' });
  },

  submitLead: (leadData: {
    fullName: string;
    email: string;
    phone: string;
    organization?: string;
    divisionInterest?: string;
    projectScope?: string;
    budget?: string;
    message: string;
  }) => apiRequest('/leads', { method: 'POST', body: JSON.stringify(leadData) }),

  // Auth
  login: async (credentials: { email: string; password: string }) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  logout: async () => {
    return apiRequest('/auth/logout', { method: 'POST' });
  },

  getMe: () => apiRequest('/auth/me', { method: 'GET' }),

  // Admin Project CRUD
  createProject: (projectData: any) =>
    apiRequest('/projects', { method: 'POST', body: JSON.stringify(projectData) }),

  updateProject: (id: string, projectData: any) =>
    apiRequest(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(projectData) }),

  deleteProject: (id: string) =>
    apiRequest(`/projects/${id}`, { method: 'DELETE' }),

  // Admin Equipment CRUD
  createEquipment: (equipmentData: any) =>
    apiRequest('/equipment', { method: 'POST', body: JSON.stringify(equipmentData) }),

  updateEquipment: (id: string, equipmentData: any) =>
    apiRequest(`/equipment/${id}`, { method: 'PUT', body: JSON.stringify(equipmentData) }),

  deleteEquipment: (id: string) =>
    apiRequest(`/equipment/${id}`, { method: 'DELETE' }),

  // Admin Leads Inbox
  getLeads: (status?: string) => {
    const qs = status ? `?status=${status}` : '';
    return apiRequest(`/leads${qs}`, { method: 'GET' });
  },

  updateLeadStatus: (id: string, data: { status?: string; notes?: string }) =>
    apiRequest(`/leads/${id}`, { method: 'PUT', body: JSON.stringify(data) }),

  deleteLead: (id: string) =>
    apiRequest(`/leads/${id}`, { method: 'DELETE' }),

  // Admin Audit Logs
  getAuditLogs: (limit = 100) =>
    apiRequest(`/audit-logs?limit=${limit}`, { method: 'GET' }),
};
