import axios from 'axios';
import {
    GET_SCHEDULES,
    CREATE_SCHEDULE,
    UPDATE_SCHEDULE,
    DELETE_SCHEDULE
} from './types';

import { SCHEDULE_SERVER } from '../components/Config.js';

// GET ALL SCHEDULES
export function getSchedules(){
    const request = axios.get(`${SCHEDULE_SERVER}/getschedules`)
        .then(response => response.data);
    
    return {
        type: GET_SCHEDULES,
        payload: request
    }
}

// CREATE A NEW SCHEDULE
export function createSchedule(dataToSubmit){
    const request = axios.post(`${SCHEDULE_SERVER}/create`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: CREATE_SCHEDULE,
        payload: request
    }
}

// DELETE A SCHEDULE
export function deleteSchedule(dataToSubmit){
    const request = axios.delete(`${SCHEDULE_SERVER}/${dataToSubmit.userId}/${dataToSubmit.scheduleId}`, dataToSubmit)
                .then(response => response.data);

    return {
        type: DELETE_SCHEDULE,
        payload: request
    }
}

// UPDATESCHEDULE
export function updateSchedule(dataToSubmit){
    const request = axios.put(`${SCHEDULE_SERVER}/${dataToSubmit.id}`,dataToSubmit)
                .then(response => response.data);

    return {
        type: UPDATE_SCHEDULE,
        payload: request
    }
}

