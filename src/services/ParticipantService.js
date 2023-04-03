import apiClient from '@/api';

export default {
  async getEventParticipants(eventId) {
    try {
      const response = await apiClient.get(`/event/${eventId}/participants`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event participants:', error);
      throw error;
    }
  },

  async updateParticipantStatus(participantId, status) {
    try {
      const response = await apiClient.put(`/participant/${participantId}/status`, status);
      return response.data;
    } catch (error) {
      console.error('Error updating participant status:', error);
      throw error;
    }
  },

  async addComment(eventId, comment) {
    try {
      const response = await apiClient.post(`/event/${eventId}/comment`, comment);
      return response.data;
    } catch (error) {
      console.error('Error adding comment:', error);
      throw error;
    }
  },

  async getCommentsByEventId(eventId) {
    try {
      const response = await apiClient.get(`/event/${eventId}/comments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comments by event id:', error);
      throw error;
    }
  },
};
