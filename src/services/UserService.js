import apiClient from '@/api';

export default {
  async registerUser(user) {
    try {
      const response = await apiClient.post('/register', user);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  async loginUser(credentials) {
    try {
      const response = await apiClient.post('/login', credentials);
      return response.data;
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  },

  async getUser(userId) {
    try {
      const response = await apiClient.get(`/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  },

  async getUserEvents(userId) {
    try {
      const response = await apiClient.get(`/user/${userId}/events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user events:', error);
      throw error;
    }
  },

  async getCreatedEventsByUserId(userId) {
    try {
      const response = await apiClient.get(`/user/${userId}/events/created`);
      return response.data;
    } catch (error) {
      console.error('Error fetching created events by user id:', error);
      throw error;
    }
  },
};
