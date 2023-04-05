import apiClient from '@/api';

export default {
  async createEvent(event) {
    try {
      const response = await apiClient.post('/event', event);
      return response.data;
    } catch (error) {
      console.error('Error creating the event:', error);
      throw error;
    }
  },

  async getEvent(eventId) {
    try {
      const response = await apiClient.get(`/event/${eventId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching the event:', error);
      throw error;
    }
  },

  async getAllEvents() {
    try {
      const response = await apiClient.get('/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  async deleteEvent(eventId) {
    try {
      const response = await apiClient.delete(`/event/${eventId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting the event:', error);
      throw error;
    }
  },

  async inviteParticipant(eventId, participants) {
    try {
      const response = await apiClient.post(`/event/${eventId}/invite`, participants);
      return response.data;
    } catch (error) {
      console.error('Error inviting participant:', error);
      throw error;
    }
  }
}