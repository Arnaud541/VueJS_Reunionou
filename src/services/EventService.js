import apiClient from '@/api';

export default {
  getAllEvents() {
    return apiClient.get('/events');
  },

  async createEvent(event) {
    try {
      const response = await apiClient.post('/event', event);
      return response.data;
    } catch (error) {
      console.error('Error creating the event:', error);
      throw error;
    }
  },
};
