// actions/formDataActions.js

// import { SET_FORM_DATA } from './types';

// export const setFormData = (formData) => ({
//   type: SET_FORM_DATA,
//   payload: formData
// });

// actions/formDataActions.js

import { ADD_FORM_DATA, DELETE_FORM_DATA } from './types';

export const addFormData = (formData) => ({
  type: ADD_FORM_DATA,
  payload: formData
});

export const deleteFormData = (index) => ({
  type: DELETE_FORM_DATA,
  payload: index
});

