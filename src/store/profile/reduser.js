import { INCREMENT } from "./types";

export const ProfileReducer = (state = { name: "Test" }, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// let initialState = {
//   showName: true,
//   name: 'Default',
//   count: 0
// }

// const initialState = {
//     showName: false,
//     name: 'Default'
//   }

//   const profileReducer = (state = initialState, action) => {
// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "showName":
//         return {
//           ...state,
//           showName: !state.showName
//       case "SHOWNAME":
//       return {
//         ...state, showName: !state.showName
//         }
//         default:
//           return state
//       default:
//         return state;
//     }
//   }
//   };