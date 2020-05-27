import { SUBMIT } from "./types";
import { monthlyReturns } from "../../functions";
export const submit = (info) => (dispatch) => {
  let pmt = monthlyReturns(info[0].interest, info[0].period, info[0].sum, 0, 0);
  console.log(pmt);
  dispatch({
    type: SUBMIT,
    payload: info,
  });
};
