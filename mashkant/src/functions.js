import { data } from "./Data/data";
export function PMT(ir, np, pv, fv) {
  console.log("np", np);
  console.log("ir", ir);
  console.log("pv", pv);
  console.log("fv", fv);
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

  fv || (fv = 0);
  let type = 0;

  if (ir === 0) return -(pv + fv) / np;
  else ir *= 0.01 / 12;
  pvif = Math.pow(1 + ir, np);

  pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

  return -pmt;
}

/* export function monthlyReturns(ir, np, pv, fv, type) {
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
} */
export function monthlyReturns(ir, np, pv, fv, madad, type) {
  const inflation = data("inflation");

  switch (type) {
    case 0: //prime
      {
        const prime = data("prime");
        let pmt = 0;
        let monthsArray = Array.from(Array(parseInt(np)).keys());

        for (let i in monthsArray) {
          let primeCurrent = (i === 0 && i) || prime[i].value;
          console.log("pc", primeCurrent);
          if (i != 0) {
            pv = pv - (pmt - (primeCurrent * pv) / 1200);
          }
          pmt = PMT(prime[i].value, np - i, pv, fv);
          monthsArray[i] = pmt;
        }
        let sum = 0;
        for (var j = 0; j < monthsArray.length; j++) {
          if (monthsArray) sum += monthsArray[j];
        }
        console.log(sum);
      }
      break;
    case 1: // Mishtana Tsmuda
      {
        let pmt;
        let monthsArray = Array.from(Array(parseInt(np)).keys());
        let sum = 0;
        let basicz = data("basicZ");
        let k;
        for (let i in monthsArray) {
          k = Math.round(i / 60);
          ir = basicz[k].value;
          monthsArray[k] = pmt;
          madad = parseInt(data("inflation")[i].value);
          pv = parseInt(pv);
          pv += (pv * madad) / 100;
          sum += monthsArray[i];
          pmt = PMT(ir, np, pv, fv);
        }

        console.log(sum);
      }
      break;
    case 2: // Mishtana Lo Tsmuda
      {
        let pmt;
        let monthsArray = Array.from(Array(parseInt(np)).keys());
        let basicz = parseInt(data("basicZ"));
        for (let i in monthsArray) {
          ir = basicz[i / 60];
          pmt = PMT(ir, np, pv, fv, madad, type);
          monthsArray[i] = pmt;
        }
        let sum = 0;
        for (var j = 0; j < monthsArray.length; j++) {
          sum += monthsArray[j];
        }
        console.log(sum);
      }
      break;
    case 3:
      {
        let pmt;
        let monthsArray = Array.from(Array(parseInt(np)).keys());

        for (let i in monthsArray) {
          pmt = PMT(ir, np, pv, fv, madad, type);
          monthsArray[i] = pmt;
        }
        let sum = 0;
        for (var j = 0; j < monthsArray.length; j++) {
          sum += monthsArray[j];
        }
        console.log(sum);
      }
      break;
    case 4:
      {
        let pmt;
        let monthsArray = Array.from(Array(parseInt(np)).keys());

        for (let i in monthsArray) {
          pmt = PMT(ir, np, pv, fv, madad, type);
          monthsArray[i] = pmt;
        }
        let sum = 0;
        for (var j = 0; j < monthsArray.length; j++) {
          sum += monthsArray[j];
        }
        console.log(sum);
      }
      break;
  }
}
