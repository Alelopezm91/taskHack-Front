import createHttp from "./BaseService";

const http = createHttp(true);

export const createTask = (data) => http.post("/task/new", data);

export const getTask = (id) => http.get(`/task/${id}`);

export const getAllTasks = () => http.get("/tasks");

export const updateTask = (id, data) => http.patch(`/task/${id}`, data);

export const deleteTask = (id) => http.delete(`/task/${id}`);
