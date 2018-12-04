import axios from 'axios';

export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";

export const fetchUser = (result) => async dispatch => {
    console.log(result);
    const res = await axios.get("/api/getUserInfo");
    console.log('testing');
    console.log(res);
    dispatch({
      type: SET_IS_LOGGED_IN,
      payload: res.data
    });
  };