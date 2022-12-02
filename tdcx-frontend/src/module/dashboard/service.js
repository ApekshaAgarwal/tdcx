import apiService from "../../components/API";

export const getTasksService = () => {
    return apiService.request({
        methodName: 'tasks',
        type: 'GET'
    });
};
export const updateTasksService = (id, data) => {
    return apiService.request({
        methodName: 'tasks/' + id,
        data: data,
        type: 'PUT'
    });
};
export const deleteTasksService = (id) => {
    return apiService.request({
        methodName: 'tasks/' + id,
        type: 'DELETE'
    });
};
export const addTasksService = (data) => {
    return apiService.request({
        methodName: 'tasks',
        data: data,
        type: 'POST'
    });
};