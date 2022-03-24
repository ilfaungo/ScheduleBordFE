export default class Commons{

   
   
   
    _handleResponse(response) {
   
       const data = response.data;
       //add logic if desiderata
       if (response.status === 200) {        
           return data;
       }
   
       return data;
   }
   
    _handleError(error) {
       console.log(error);
       if(typeof error.response !== "undefined"){
           if (error.response.status === 401 ) {
           this._logout();
       }
   }
       return Promise.reject(error.response);
   }
   




}
