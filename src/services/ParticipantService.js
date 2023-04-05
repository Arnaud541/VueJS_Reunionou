import apiClient from '@/api';

export default {
  async getEventParticipants(eventId) {
    try {
      const response = await apiClient.get(`/event/${eventId}/participants`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error fetching event participants:', error);
      throw error;
    }
  },

  async updateParticipantStatus(eventId, userId, status) {
    try {
      const response = await apiClient.put(`/event/${eventId}/user/${userId}`, status);
      return response.data;
    } catch (error) {
      console.error('Error updating participant status:', error);
      throw error;
    }
  },
  
  async isUserInvited(eventId, userId) {
    try {
      const response = await apiClient.get(`/invited/${eventId}/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error checking if user is invited:', error);
      throw error;
    }
  }
};
