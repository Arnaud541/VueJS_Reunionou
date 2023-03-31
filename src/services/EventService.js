import apiClient from '@/api';

export default {
    async getAllEvents() {
        try {
          const response = await apiClient.get('/events');
          return response;
        } catch (error) {
          console.error('Error fetching events:', error);
          throw error;
        }
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
