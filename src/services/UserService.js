import apiClient from '@/api';

export default {
    async login(login) {
        try {
            const response = await apiClient.post('/login', login);
            console.log("la réponse est:", response.data);
            return response.data;
        } catch (error) {
            console.log('Error logging in;', error);
            throw error;
        }
    },

    async register(user) {
        try {
          const response = await apiClient.post('/register', user);
          return response.data;
        } catch (error) {
          console.error('Error creating a new user:', error);
          throw error;
        }
      },
};