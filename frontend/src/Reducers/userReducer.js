
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS,LOAD_USER_FAIL,
    UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_RESET,UPDATE_PASSWORD_SUCCESS,UPDATE_PASSWORD_FAIL,
    REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,
    UPDATE_PROFILE_REQUEST,UPDATE_PROFILE_RESET,UPDATE_PROFILE_SUCCESS,UPDATE_PROFILE_FAIL,
    NEW_PASSWORD_REQUEST,NEW_PASSWORD_SUCCESS,NEW_PASSWORD_FAIL,
    LOGOUT_SUCCESS,LOGOUT_FAIL, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_REQUEST, CLEAR_ERRORS
} from "../Constants/userConstant";

export const authReducer = (state= {
    user:{}, 
    loading: false,
    isAuthenticated: false,
    data: {},
}, action ) => {
    switch(action.type){   //shorta hand property
        case LOGIN_REQUEST:
            case REGISTER_USER_REQUEST:
                case LOAD_USER_REQUEST: 
                    return {
                        loading: true,
                        isAuthenticated: false,
                    };
                    case LOGIN_SUCCESS:
                        case REGISTER_USER_SUCCESS:
                            case LOAD_USER_SUCCESS:
                                return {
                                    ...state,
                                    loading: true,
                                    isAuthenticated:true,
                                    user: action.payload
                                }

                            case LOGOUT_SUCCESS:
                                return{
                                    ...state,
                                    loading: false,
                                    isAuthenticated: false,
                                    user: null
                                }
                            
                            case LOAD_USER_FAIL:
                                return{
                                    loading: false,
                                    isAuthenticated: false,
                                    user: null,
                                    error: action.payload
                    
                                }

                            case LOGOUT_FAIL:
                                return{
                                    ...state,
                                    error: action.payload
                                }

                            case LOGIN_FAIL:
                            case REGISTER_USER_FAIL:
                                return{
                                    ...state,
                                    loading: false,
                                    isAuthenticated: false,
                                    user: null,
                                    error: action.payload
                                }

                            case CLEAR_ERRORS:
                                return{
                                    ...state,
                                    error: null,
                                };
                            
                            default: 
                                return state;
                            }

};

//reducer fo managing user-related state

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_SUCCESS:
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
            default: 
               return state;
    }
};

//reducer for managing forgot password related state

export const forgotPasswordReducer = (state={}, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };
        case FORGOT_PASSWORD_SUCCESS:
            return{
                ...state,
                loading: false,
                message: action.payload
            };
        case NEW_PASSWORD_SUCCESS:
             return{
                    ...state,
                    success: action.payload
                };
        case FORGOT_PASSWORD_FAIL:
            return{
                 ...state,
                 loading: false,
                error: action.payload
                    };

        case CLEAR_ERRORS:
             return{
                  ...state,
                 error: null,
                        };

        default:
            return state;
                    }
};
