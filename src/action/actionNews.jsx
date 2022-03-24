import axios from "axios";
//const baseURL= "http://172.26.97.20:8080/HNC-api/";
//const baseURL="http://172.20.52.169:8080/HNC-api/";

const baseURL = `${process.env.REACT_APP_HOST}`;
// const http = axios.create({
//   baseURL: "http://localhost:8080/HNC-api/", //lottomatica
//   //baseURL: "http://172.20.52.127:8080/HNC-api/", //antonio
//   //baseURL: "http://172.20.52.169:8080/HNC-api/", //peppe
//   timeout: 15000,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*"
//   }
// });

export function requestActiveNews(user) {
  return function(dispatch) {
    return axios
      .get(baseURL + "", {
     
        headers: { Authorization: "Bearer " + user.token },
        params: { id: user.id }
      })
      .then(response => {
        if (response.status == 200) {
          console.log("rispondo: " + response.data);
          dispatch(loadActiveNews(response.data));
        } else {
          console.log("credenziali sbagliate");
          dispatch(loadActiveNews([]));
        }
      })
      .catch(error => {
        dispatch(loadActiveNews([]));
      });
  };
}

function loadActiveNews(news) {
  return {
    type: "loadActive",
    payload: news
  };
}

export function requestInactive(user) {
  return function(dispatch) {
    return axios
      .get(baseURL + "", {
        headers: { Authorization: "Bearer " + user.token },
        params: { id: user.id }
      })
      .then(response => {
        if (response.status == 200) {
          dispatch(loadInactive(response.data));
        } else {
          console.log("errore mio!");
          dispatch(loadInactive([]));
        }
      })
      .catch(error => {
        console.log("An error occurred.", error);
        dispatch(loadInactive([]));
      });
  };
}

function loadInactive(news) {
  return {
    type: "loadInactive",
    payload: news
  };
}

export function filtering(payload) {
  return {
    type: "filtro",
    payload
  };
}

export function disableNews(hot, user, rimuovo) {
  return function(dispatch) {
    return axios
      .put(baseURL + "", hot, {
        headers: { Authorization: "Bearer " + user.token }
      })
      .then(response => {
        if (response.status == 200) {
          if (rimuovo) dispatch(disattiva(hot.hnId));
          return 1;
        } else {
          alert("Disattivazione non riuscita");
          return 0;
        }
      })
      .catch(error => {
        alert("Disattivazione non riuscita");
        console.log(error);
        return 0;
      });
  };
}
export function disattiva(idnews) {
  return {
    type: "disattiva",
    payload: idnews
  };
}
export function caricaTipologia(user) {
  return axios
    .get(baseURL + "", {
      headers: { Authorization: "Bearer " + user.token }
    })
    .then(response => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("errore mio!");
      }
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
}
export function caricaServizio(user) {
  return axios
    .get(baseURL + "", {
      headers: { Authorization: "Bearer " + user.token }
    })
    .then(response => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("errore mio!");
      }
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
}
export function caricaRami(user, servizio) {
  return axios
    .get(baseURL + "", {
      headers: { Authorization: "Bearer " + user.token },
      params: { serv_dnis: servizio, hn_id: 0 }
    })
    .then(response => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log("errore mio!!!");
      }
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
}

export function getRamiByNv(user, nv) {
  return axios
    .get(baseURL + "" + nv, {
      headers: { Authorization: "Bearer " + user.token }
    })
    .then(response => {
      if (response.status == 200) {
        return response.data;
      } else {
        console.log(response.status);
      }
    })
    .catch(error => {
      console.log("An error occurred.", error);
    });
}




