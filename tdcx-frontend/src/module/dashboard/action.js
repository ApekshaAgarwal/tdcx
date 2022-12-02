import { handleAuthHTTPError, handleHTTPError } from "../../common/Helper";
import { deleteTasksService, getTasksService, addTasksService, updateTasksService } from "./service";
export const SET_TASK_INFO = 'SET_TASK_INFO'
export const TASK_LOADING = 'TASK_LOADING'
export const getTask =
    (loading=true) =>
        (dispatch, getState) => {
            loading &&  dispatch({ type: TASK_LOADING, value: true })
            return getTasksService().then(
                (response) => {
                    if (response.success) {
                        dispatch({
                            type: SET_TASK_INFO, tasks: response?.data || [],
                            totalTasks: response?.totalTasks || 0,
                            completedTasks: response?.completedTasks || 0
                        })
                    } else {
                        dispatch({
                            type: SET_TASK_INFO, tasks: [],
                            totalTasks: 0,
                            completedTasks: 0
                        })
                    }
                    loading &&   dispatch({ type: TASK_LOADING, value: false })

                    handleAuthHTTPError(response)
                    return response
                },
                (error) => {
                    loading &&    dispatch({ type: TASK_LOADING, value: false })

                    handleAuthHTTPError(error);
                }
            );
        };
export const addTask =
    (name, ownProps) =>
        (dispatch, getState) => {
            return addTasksService({ name, status: 1 }).then(
                (response) => {
                    if (response.success) {
                        dispatch(getTask(false))
                    }

                    handleHTTPError(response)
                    return response
                },
                (error) => {
                    dispatch({ type: TASK_LOADING, value: false })

                    handleAuthHTTPError(error);
                }
            );
        };
export const updateTask =
    (data, ownProps) =>
        (dispatch, getState) => {
            return updateTasksService(data._id, { name: data.name, completed: data.completed }).then(
                (response) => {
                    if (response.success) {
                        dispatch(getTask(false))
                    }

                    handleHTTPError(response)
                    return response
                },
                (error) => {
                    dispatch({ type: TASK_LOADING, value: false })

                    handleAuthHTTPError(error);
                }
            );
        };
export const deleteTask =
    (data, ownProps) =>
        (dispatch, getState) => {
            console.log(data)
            return deleteTasksService(data?._id).then(
                (response) => {
                    if (response.success) {
                        dispatch(getTask(false))
                    }

                    handleHTTPError(response)
                    return response
                },
                (error) => {
                    dispatch({ type: TASK_LOADING, value: false })

                    handleAuthHTTPError(error);
                }
            );
        };