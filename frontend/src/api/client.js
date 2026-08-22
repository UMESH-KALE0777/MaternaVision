/**
 * API Client for MaternaVision Backend Integration
 * Handles all HTTP requests to the backend server
 * 
 * Configuration:
 * - API_BASE_URL: Backend server URL (from .env)
 * - Timeout: 30 seconds (configurable)
 * - Auth: JWT token in headers
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 30000;

// ====== ERROR HANDLING ======
class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

// ====== HELPER FUNCTIONS ======

/**
 * Get JWT token from localStorage
 */
const getAuthToken = () => {
  const token = localStorage.getItem('maternavision_token');
  return token;
};

/**
 * Set JWT token in localStorage
 */
const setAuthToken = (token) => {
  localStorage.setItem('maternavision_token', token);
};

/**
 * Remove JWT token from localStorage
 */
const clearAuthToken = () => {
  localStorage.removeItem('maternavision_token');
};

/**
 * Fetch with timeout
 */
const fetchWithTimeout = (url, options = {}, timeout = API_TIMEOUT) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('API request timeout')), timeout)
    ),
  ]);
};

/**
 * Common headers for all requests
 */
const getHeaders = (isFormData = false) => {
  const headers = {};
  
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }
  
  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};

/**
 * Handle API response
 */
const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new APIError(
      data.message || `API Error: ${response.status}`,
      response.status,
      data
    );
  }
  
  return data;
};

// ====== AUTHENTICATION APIs ======

/**
 * Login with email and password
 * POST /auth/login
 */
export const login = async (email, password) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ email, password }),
      }
    );
    
    const data = await handleResponse(response);
    
    if (data.token) {
      setAuthToken(data.token);
    }
    
    return data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

/**
 * Register new user
 * POST /auth/register
 */
export const register = async (userData) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/auth/register`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(userData),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

/**
 * Logout user
 * POST /auth/logout
 */
export const logout = async () => {
  try {
    clearAuthToken();
    // Optionally notify backend
    await fetchWithTimeout(
      `${API_BASE_URL}/auth/logout`,
      {
        method: 'POST',
        headers: getHeaders(),
      }
    );
  } catch (error) {
    console.error('Logout failed:', error);
    clearAuthToken();
  }
};

// ====== ANALYSIS APIs ======

/**
 * Upload and analyze ultrasound image
 * POST /analyze
 * 
 * @param {File} file - Ultrasound image file
 * @param {Object} options - Additional options (optional)
 * @returns {Object} Analysis results with measurements
 */
export const analyzeImage = async (file, options = {}) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    // Add any additional options to form data
    Object.keys(options).forEach(key => {
      formData.append(key, options[key]);
    });
    
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/analyze`,
      {
        method: 'POST',
        headers: getHeaders(true), // Don't set Content-Type for FormData
        body: formData,
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Image analysis failed:', error);
    throw error;
  }
};

/**
 * Get all analyses for current user
 * GET /analyses
 * 
 * @param {Object} filters - Filter options (page, limit, status, etc.)
 * @returns {Array} List of analysis records
 */
export const getAnalyses = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const url = `${API_BASE_URL}/analyses?${queryParams}`;
    
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: getHeaders(),
    });
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to fetch analyses:', error);
    throw error;
  }
};

/**
 * Get single analysis by ID
 * GET /analyses/{id}
 * 
 * @param {String} analysisId - Analysis record ID
 * @returns {Object} Analysis details
 */
export const getAnalysisById = async (analysisId) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/analyses/${analysisId}`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error(`Failed to fetch analysis ${analysisId}:`, error);
    throw error;
  }
};

/**
 * Delete analysis by ID
 * DELETE /analyses/{id}
 * 
 * @param {String} analysisId - Analysis record ID
 * @returns {Object} Success message
 */
export const deleteAnalysis = async (analysisId) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/analyses/${analysisId}`,
      {
        method: 'DELETE',
        headers: getHeaders(),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error(`Failed to delete analysis ${analysisId}:`, error);
    throw error;
  }
};

// ====== REPORT APIs ======

/**
 * Generate clinical report
 * POST /reports/generate
 * 
 * @param {String} caseId - Analysis ID to generate report for
 * @param {Object} options - Report options
 * @returns {Object} Generated report
 */
export const generateReport = async (caseId, options = {}) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/reports/generate`,
      {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
          analysis_id: caseId,
          ...options,
        }),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to generate report:', error);
    throw error;
  }
};

/**
 * Get all reports
 * GET /reports
 * 
 * @param {Object} filters - Filter options
 * @returns {Array} List of reports
 */
export const getReports = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const url = `${API_BASE_URL}/reports?${queryParams}`;
    
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: getHeaders(),
    });
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to fetch reports:', error);
    throw error;
  }
};

/**
 * Get report by ID
 * GET /reports/{id}
 * 
 * @param {String} reportId - Report ID
 * @returns {Object} Report details
 */
export const getReportById = async (reportId) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/reports/${reportId}`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error(`Failed to fetch report ${reportId}:`, error);
    throw error;
  }
};

/**
 * Download report as PDF
 * GET /reports/{id}/download
 * 
 * @param {String} reportId - Report ID
 * @returns {Blob} PDF file blob
 */
export const downloadReportPDF = async (reportId) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/reports/${reportId}/download`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    
    if (!response.ok) {
      throw new APIError('Failed to download report', response.status);
    }
    
    return await response.blob();
  } catch (error) {
    console.error('Failed to download report:', error);
    throw error;
  }
};

// ====== USER PROFILE APIs ======

/**
 * Get current user profile
 * GET /users/me
 * 
 * @returns {Object} User profile data
 */
export const getUserProfile = async () => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/users/me`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
};

/**
 * Update user profile
 * PUT /users/me
 * 
 * @param {Object} userData - User data to update
 * @returns {Object} Updated user profile
 */
export const updateUserProfile = async (userData) => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/users/me`,
      {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(userData),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Failed to update user profile:', error);
    throw error;
  }
};

// ====== HEALTH CHECK ======

/**
 * Check backend server health
 * GET /health
 * 
 * @returns {Object} Server status
 */
export const checkHealth = async () => {
  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/health`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    
    return await handleResponse(response);
  } catch (error) {
    console.error('Backend health check failed:', error);
    throw error;
  }
};

// ====== EXPORT AUTH TOKEN FUNCTIONS ======

export const auth = {
  getToken: getAuthToken,
  setToken: setAuthToken,
  clearToken: clearAuthToken,
  isAuthenticated: () => !!getAuthToken(),
};