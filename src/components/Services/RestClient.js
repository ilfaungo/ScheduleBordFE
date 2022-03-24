import axios from "axios";
import commonService from "./Commons.js";
const commons = new commonService();

const http = axios.create({
    baseURL: `${process.env.REACT_APP_HOST}/`,
    timeout: 15000,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })

  export default class RestClient {

    getTImeLine() {
        return http
          .get(``)
          .then(this.handleResponse)
          .then(function(response) {
            return response;
          })
          .catch(this.handleError);
      }

      handleResponse(response) {
        return commons._handleResponse(response);
      }
    
      handleError(error) {
        return commons._handleError(error);
      }

  }
  
