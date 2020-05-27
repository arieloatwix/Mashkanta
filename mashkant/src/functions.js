export function PMT(ir, np, pv, fv, type) {
  /*
   * ir   - interest rate per month
   * np   - number of periods (months)
   * pv   - present value
   * fv   - future value
   * type - when the payments are due:
   *        0: end of the period, e.g. end of month (default)
   *        1: beginning of period
   */

  var pmt, pvif;
  np = np;
  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0) return -(pv + fv) / np;
  else ir *= 0.01 / 12;
  pvif = Math.pow(1 + ir, np);

  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  if (type === 1) pmt /= 1 + ir;

  return -pmt;
}

export function monthlyReturns(ir, np, pv, fv, type) {
  let pmt = null;
  let monthsArray = Array.from(Array(parseInt(np)).keys());

  for (let i in monthsArray) {
    if (pmt) {
      np = np - 1;
      pv = pv - pmt + ir * (0.01 / 12);
    }
    pmt = PMT(ir, np, pv, fv, type);
    monthsArray[i] = pmt;
    console.log(i, monthsArray[i]);
  }
  let sum = 0;
  for (var j = 0; j < monthsArray.length; j++) {
    sum += monthsArray[j];
  }
}
