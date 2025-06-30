import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from "../Actions/restaurantAction";
import "./css/count.css";

const CountRestaurant = () => {

    const dispatch = useDispatch(); //dispatch is nothing but a function that we use to send action to the redux store

    const {count, pureVegRestaurantsCount, showVegOnly, loading, error }= 
    useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [dispatch, showVegOnly]);  //it specifies that when the component or value only change,it should be dispatch the getrestaurant action , this action fetches the restaurant data from the API 

  return (
    <div>

        {loading ? (
            <p> Loading restaurant count...</p>
        ) : error ? (

        <p> Error: {error} </p>
    ) : (
        <p className = "NumOfRestro">
            {showVegOnly ? pureVegRestaurantsCount : count}
            <span className='Restro'>
                {showVegOnly
                ? pureVegRestaurantsCount === 1
                   ? " restaurant"
                   : " restaurants"
                : count === 1
                ? " restaurant"
                : " restaurants"}
            </span>
            <hr />
        </p>
    )}
    </div>
      
    
  );
};

export default CountRestaurant;
