import { SUBMIT } from "../actions/types";
const intialState = [];

export default function(state = intialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SUBMIT:
      return payload;

    default:
      return state;
  }
}
