import { SUBMIT } from "./types";

export const submit = info => dispatch => {
  console.log("action");
  dispatch({
    type: SUBMIT,
    payload: info
  });
};
