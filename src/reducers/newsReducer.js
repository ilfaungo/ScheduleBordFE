const initialState = { news: [], active: [], inactive: [], filtrate: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "loadActive":
      return { ...state, active: action.payload };
    case "loadInactive":
      return { ...state, inactive: action.payload };
    case "filtro":
      return { ...state, filtrate: action.payload };
    case "disattiva":
        let index=0;
        let newActive=state.active;
        let newInactive = state.inactive;
      for(let i=0; i<state.active.length;i++){
        if(state.active[i].hnId==action.payload){
          index = i;
          i=state.active.length;
        }
      }
      let news=newActive.splice(index,1);
      newInactive.push(news);      
      return { ...state, active:newActive , inactive:newInactive };
    case "newAttiva":
      return {...state, active:action.payload};
    case "newDisattiva":
      return {...state, inactive:action.payload};
    case "modify":
        index=0;
        newInactive = state.inactive;
      for(let i=0; i<state.inactive.length;i++){
        if(state.inactive[i].hnId==action.payload.hnId){
          index = i;
          break;
        }
      }
      newInactive.splice(index,1);
      newInactive.push(action.payload);
      return { ...state, inactive:newInactive};

    case "removeNews":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case "RESET":
      return state;

     case "aggiornapermodifica" :
        index=0;
        newActive = state.active;
      for(let i=0; i<state.active.length;i++){
        if(state.active[i].hnId==action.payload.hnId){
          index = i;
          break;
        }
      }
      newActive.splice(index,1);
      newActive.push(action.payload);
      return { ...state, active:newActive};
    case "elimina":
      index=0;      
      newInactive = state.inactive
      for(let i=0; i<state.inactive.length;i++){
        if(state.inactive[i].hnId==action.payload){
          index = i;
          break;
        }
      }
      newInactive.splice(index,1);      
      return { ...state, inactive:newInactive};
   
    
    default:
      return state;
  }
};
