import apiClient from '@/api';

export default {
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
