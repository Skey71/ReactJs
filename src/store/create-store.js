// import { createStore, combineReducers } from "redux";

// import { ProfileReducer } from "./profile";

//   const reducer = (state = { showName: false }, action) => {
//     switch (action.type) {
//       case "showName":
//         return {
//           ...state,
//           showName: !state.showName
//         }
//         default:
//           return state
//     }
//   }

// export const store = createStore(
//     combineReducers({
//       showName: reducer,
//       profile: ProfileReducer
//     })
//   );

import { createStore, combineReducers } from "redux";
import { ProfileReducer } from "./profile/reduser";

const reducer = (state = { count: 0 }, action) => {
    let initialState = {
        showName: true,
        name: 'Default',
        count: 0
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 };
            case "DECREMENT":
                return { ...state, count: state.count - 1 };
            case "SHOWNAME":
                return {
                    ...state, showName: !state.showName
                }
            default:
                return state;
        }
    };

    export const store = createStore(
        combineReducers({
            counter: reducer,
            profile: ProfileReducer
      profile: reducer,
            // profile: ProfileReducer
        })
    );