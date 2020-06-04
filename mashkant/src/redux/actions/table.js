import { SUBMIT } from "./types";
import { monthlyReturns } from "../../functions";
export const submit = (info) => (dispatch) => {
  console.log(info);
  let pmt = monthlyReturns(
    info[0].interest,
    info[0].period,
    info[0].sum,
    0,
    info[0].madad,
    info[0].route
  );
  console.log(pmt);
  dispatch({
    type: SUBMIT,
    payload: info,
  });
};
