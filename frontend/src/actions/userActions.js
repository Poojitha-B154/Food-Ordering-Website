import axios from "axios";
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS,LOAD_USER_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_RESET,UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAIL,
    REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,
    UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_RESET,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,
    NEW_PASSWORD_REQUEST,NEW_PASSWORD_SUCCESS,NEW_PASSWORD_FAIL,
    LOGOUT_SUCCESS,LOGOUT_FAIL, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_REQUEST, CLEAR_ERRORS
} from "../Constants/userConstant";

//Action login
export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({type:LOGIN_REQUEST});
        const config ={
            headers: {
               "Content-Type": "application/json"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.post("/api/v1/users/login", {email,password}, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload:data.user,
      });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "Login-Failed",
        });
    }

};

//Register user action

export const register = (userData) => async(dispatch) => {
    try{
        dispatch({type:REGISTER_USER_REQUEST});
        const config ={
            headers: {
               "Content-Type": "multipart/json"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.post("/api/v1/users/signup", userData, config);
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload:data.user
      });
      return data.data.user;
    } catch (error) {  //javascript function, error occured during execution 
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

//Load user action
export const loadUser = () => async(dispatch) => {
    try{
        dispatch({
            type:LOAD_USER_REQUEST
        });

       //make a post reg to the login API endpoint
      const {data} =await axios.get("/api/v1/users/me")
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload:data.user,
      });
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message,
        });
    }

};

//update profile action

export const updateProfile = (userData) => async(dispatch) => {
    try{
        dispatch({type:UPDATE_PROFILE_REQUEST});
        const config ={
            headers: {
               "Content-Type": "multipart/form-data"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.put("/api/v1/users/me/update", userData, config);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload:data.success,
      })
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }

};

//update password action

export const updatePassword = (passwords) => async(dispatch) => {
    try{
        dispatch({type:UPDATE_PASSWORD_REQUEST});
        const config ={
            headers: {
               "Content-Type": "application/json"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.put("/api/v1/users/password/update", {passwords}, config);
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload:data.success,
      })
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }

};

//forgot password action

export const forgotPassword = (email) => async(dispatch) => {
    try{
        dispatch({type:FORGOT_PASSWORD_REQUEST});
        const config ={
            headers: {
               "Content-Type": "application/json"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.post("/api/v1/users/forgetPassword", {email}, config);
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload:data.success,
      })
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }

};

//reset password action

export const resetPassword = (token, passwords) => async(dispatch) => {
    try{
        dispatch({type:NEW_PASSWORD_REQUEST});
        const config ={
            headers: {
               "Content-Type": "application/json"
                     }
       }

       //make a post reg to the login API endpoint
      const {data} =await axios.patch(`/api/v1/users/resetPassword/${token}`,passwords,  config);
      dispatch({
        type: NEW_PASSWORD_SUCCESS,
        payload:data.success,
      })
    } catch (error) {
        dispatch({
            type: NEW_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }

};

//logout action

export const logout = () => async(dispatch) => {
    try{
          //make a post reg to the login API endpoint
      const {data} =await axios.get("/api/v1/users/logout");
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
    }

};

//Clear errors action
export const clearErrors = () => async(dispatch) => {
        dispatch({
            type:CLEAR_ERRORS});
       
};

