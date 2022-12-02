import { SET_TASK_INFO, TASK_LOADING } from "./action";


const initialState = {
    tasks: [],
    completedTasks: '',
    totalTasks: '',
    taskLoading: false
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_INFO:
            return {
                ...state,
                tasks: action.tasks,
                completedTasks: action.completedTasks,
                totalTasks: action.totalTasks
            };
        case TASK_LOADING:
            return {
                ...state,
                taskLoading:action.value
            }

        default:
            return state;
    }
};

export default dashboard
