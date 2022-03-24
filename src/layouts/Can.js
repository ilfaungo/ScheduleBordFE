import rules from "../rbac-rules";
import jwt_decode from "jwt-decode";

const isValidToken = (token) => {
  let result = false;
  if(token != ""){
    let decodedToken = jwt_decode(token.access_token);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
  
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
    } else {
      console.log("Valid token");   
      result = true;
    }
  }
  return result;
  
  }

const check = (rules, role, action, data) => {
  if(isValidToken(role.token))
    return true;
  return false;
};



const Can = props =>
  check(rules, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();

Can.defaultProps = {
  yes: () => null,
  no: () => null
};



export default Can;