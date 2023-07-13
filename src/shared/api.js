import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://64ae98dfc85640541d4d59ec.mockapi.io/users/',
});

export const getAllUser = async (page, limit = 3) => {
  try {
    const { data } = await userInstance.get('/', {
      params: {
        page,
        limit,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUserFollowers = async (id, data) => {
  try {
    const { data: result } = await userInstance.put(`/${id}`, data);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
