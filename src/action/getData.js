import axios from "axios";
import jwt_decode from "jwt-decode";
import fetch from "cross-fetch";
import { history } from "../Utils/history";

const http = axios.create({
  //baseURL: `${process.env.REACT_APP_HOST}`,
  baseURL:"http://localhost:5000/api/",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

//messa
export function login() {
  return {
    type: "LOG_IN",
    payload: ""
  };
}


export function logout() {
  return {
    type: "LOG_sbfix"
  };
}

function requestToken(response) {
  

  return {
    type: "REQUEST_TOKEN",
    payload: response
  };
}

function rejectToken(errore) {
  return {
    type: "ERROR_TOKEN",
    errore
  };
}

function wrongCredenzial() {
  return {
    type: "WRONG"
  };
}

/*export function requestLog(user, psw) {
  return function(dispatch) {
    return http
      .post("public/users/login", {
        username: user,
        password: psw
      })
      .then(response => {
        if (response.status == 200) {
          console.log(response.data);
          dispatch(requestToken(response.data));
          history.push("/dashboard");
        }
      })
      .catch(error => {
        console.log("An error occurred.", error);
        if (error.status == 401) {
          dispatch(wrongCredenzial());
          history.push("/dashboard");
        } else {
          dispatch(rejectToken(error));
          history.push("/dashboard");
        }
      });
  };
}*/

export function requestLog(user, psw) {
  return function(dispatch) {
    return http
      .post("auth/login", {
        email: user,
        password: psw
      })
      .then(response => {
        if (response.status == 200) {
          let user = {
             logged: true, token: response.data, role: "ADMIN", status: 1 ,id:"1" 
          }
          console.log(response.data);
          dispatch(requestToken(user));
          history.push("admin/dashboard");
        }
      })
      .catch(error => {
        console.log("An error occurred.", error);
        if (error.status == 401) {
          dispatch(wrongCredenzial());
          history.push("/dashboard");
        } else {
          dispatch(rejectToken(error));
          history.push("/dashboard");
        }
      });
  };
}


export function reset() {
  return {
    type: "RESET"
  };
}



export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
}


