import{
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
    TOGGLE_VEG_ONLY,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS
} from "../Constants/restaurantConstant.js";

const initialState = {
    restaurants: [],
};

export const restaurantReducer = (state = initialState, action) => {
    switch(action.type)
    {  //it means the request is been made to fetch the restaurant data 
        case ALL_RESTAURANTS_REQUEST:
            return{   //spread operator 
                ...state, //spread operator , it create a new object with all the properties of current state
                loading:true, // it says the loading property of the state to true, it indiates that a request is in progress and UI need to show loading spinner and handle the loading state in some way
                error: null //error property , when the request is initiated any previous error messages should be cleared since it new request is starting and we don't have an error yet         }
            };
        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false, // it indicates that a request is completed
                count: action.payload.count,
                restaurants: action.payload,
            };

        case ALL_RESTAURANTS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };

        case TOGGLE_VEG_ONLY:
            return {
                ...state,  //keping all the exciciting state property that unchanged
                showVegOnly : !state.showVegOnly,
                pureVegRestaurantsCount: calculatePureVegCount(
                    state.restaurants.restaurants,
                    !state.showVegOnly
                ),
            };

        case SORT_BY_RATINGS:
            return{ 
                ...state,  //keeping all the exciciting state property that unchanged
                restaurants: { //it will updates the list of restaurants by sorting in ascending order
                    ...state.restaurants,
                    restaurants: [...state.restaurants.restaurants].sort(
                        (a, b) => b.ratings - a.ratings  //a represents one element and b represents another element, this one is compare with frst element
                        ),                               //after subtracting if it is positive then the 2nd is high priority
                    },                                     //if it is negative then the 1st is high priority
                };

        case SORT_BY_REVIEWS:
            return{ 
                ...state,  //keeping all the exciciting state property that unchanged
                restaurants: { //it will updates the list of restaurants by sorting in ascending order
                    ...state.restaurants,
                    restaurants: [...state.restaurants.restaurants].sort(
                        (a, b) => b.numOfReviews - a.numOfReviews  //a represents one element and b represents another element, this one is compare with frst element
                        ),
                    },
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

const calculatePureVegCount = (restaurants, showVegOnly) => {
    if(!showVegOnly){
        return restaurants.length;
    }else{
        return restaurants.filter((restaurant) => restaurant.isVeg).length;
    }
}