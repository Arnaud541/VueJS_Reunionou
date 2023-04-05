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

  async loginUser(user) {
    try {
      const response = await apiClient.post('/login', user);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return response.data;
    } catch (error) {
      console.error('Error logging in the user:', error);
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

  async getUserLiveEvents(userId) {
    try {
      const response = await apiClient.get(`/user/${userId}/live-events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user events:', error);
      throw error;
    }
  },

  async getUserPastEvents(userId) {
    try {
      const response = await apiClient.get(`/user/${userId}/past-events`);
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
