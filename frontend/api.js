import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const toggleTask = async (id) => {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.data;
};