import {
    GET_SCHEDULES,
    CREATE_SCHEDULE,
    UPDATE_SCHEDULE,
    DELETE_SCHEDULE
} from '../_actions/types';


export default function(state={},action){
    switch(action.type){
        case GET_SCHEDULES:
            return {...state, getSchedulesSuccess: action.payload }
        case CREATE_SCHEDULE:
            return {...state, createSuccess: action.payload }
        case UPDATE_SCHEDULE:
            return { ...state, updateSuccess: action.payload }
        case DELETE_SCHEDULE:
            return {...state, deleteSuccess: action.payload }
        default:
            return state;
    }
}