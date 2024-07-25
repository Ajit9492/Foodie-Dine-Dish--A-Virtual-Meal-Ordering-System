// // reducers/formDataReducer.js

// import { SET_FORM_DATA } from '../actions/types';

// const initialState = {
//   formData: {}
// };

// const formDataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_FORM_DATA:
//       return {
//         ...state,
//         formData: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default formDataReducer;




// reducers/formDataReducer.js
// import { SET_FORM_DATA } from '../actions/types';
import { ADD_FORM_DATA, DELETE_FORM_DATA } from '../actions/types';

const initialState = {
  formData: []
};

const formDataReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case SET_FORM_DATA:
  //     return {
  //       ...state,
  //       formData: action.payload
  //     };
  //   default:
  //     return state;

  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formData: [...state.formData, action.payload]
      };
    case DELETE_FORM_DATA:
      return {
        ...state,
        formData: state.formData.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default formDataReducer;
