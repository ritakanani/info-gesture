import React, { createContext, useContext, useReducer } from "react";

const MapStateContext = createContext();
const MapDispatchContext = createContext();
export const MapProvider = ({ children }) => {
  let toronto = [-79.347015, 43.651070];
  let northyork = [-79.411079, 43.761539];
  let scarborough = [-79.233238, 43.777702];
  let etobicoke = [-79.513199, 43.620495];
  let mississauga = [-79.640579, 43.595310]; 
  
  const [state, dispatch] = useReducer(MapReducer, {
    markers: [toronto, northyork, scarborough, etobicoke, mississauga]
  });
  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
};

export const useStateMap = () => {
  const context = useContext(MapStateContext);

  if (context === undefined) {
    throw new Error("useStateMap must be used within a MapProvider");
  }
  return context;
};

export const useDispatchMap = () => {
  const context = useContext(MapDispatchContext);

  if (context === undefined) {
    throw new Error("useDispatchMap must be used within a MapProvider");
  }
  return context;
};

export const MapReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return {
        ...state,
        markers: [...state.markers, action.payload.marker]
      };
    case "REMOVE_MARKER":
      return {
        ...state,
        markers: [
          ...state.markers.filter(
            (x) =>
              x[0] !== action.payload.marker[0] &&
              x[1] !== action.payload.marker[1]
          )
        ]
      };
    default:
  }
  return state;
};