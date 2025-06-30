// Action creators are define
//this will allow to use asios to make http requests
import axios from "axios";

import {
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS,
    TOGGLE_VEG_ONLY,
} from "../Constants/restaurantConstant";

//async: asynchronous refers to the execution of task or operator that do not occur sequentially / in a strictly order manner/we can do multitask
//dipatch: send
export const getRestaurants = (keyword=" ") => async(dispatch) => {
    try{
        dispatch({type:ALL_RESTAURANTS_REQUEST});
        let link = `/api/v1/eats/stores?keyword=${keyword}`;
        const { data } = await axios.get(link); //this allows to extract speciific properties from an object and assign the variable with the same name as a propety
         //data: contains info about the restaurants
        const { restaurants, count } = data;

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: { restaurants, count },  //payload contains the actual datai.e. retrieve from the server after success

        });

    }catch(error){
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const sortByRatings = () => {
    return{
        type: SORT_BY_RATINGS,
    };
};

export const sortByReviews = () => {
    return{
        type: SORT_BY_REVIEWS,
    };
};

export const toggleVegOnly = () => (dispatch) => { //it is diff from ratings and reviews becoz it is returning a function instead of an action directly. so it is called as hunk of redux, it is handling a asynchronous action
    dispatch({
        type: TOGGLE_VEG_ONLY
    });
};




export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS,
        
    });
};