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

  if (ir === 0) return -pv / np;
  else ir *= 0.01 / 12;
  pvif = Math.pow(1 + ir, np);
  console.log("pvif", pvif);
  pmt = (ir * pv * pvif) / (pvif - 1);
  console.log("pmt", pmt);
  return pmt;
}


export function monthlyReturns(ir, np, pv, fv, madad, type) {
  const inflation = data("inflation");
  let pmt = 0;
  let monthsArray = Array.from(Array(parseInt(np)).keys());
  let sum = 0;
  pv = parseInt(pv);

  switch (type) {
    case 0: //prime
      {
        const prime = data("prime");
        let gape = ir - prime[0].value;
        let primeCurrent = 0;
        for (let i in monthsArray) {
          if (i != 0) {
            pv = pv - (pmt - (primeCurrent * pv) / 1200);
          }
          primeCurrent = (i === 0 && i) || (prime[i].value + gape);
          console.log("pv in case", pv);
          pmt = PMT(primeCurrent, np - i, pv, fv);
          monthsArray[i] = pmt;
          sum += monthsArray[i];
        }
      }
      break;

    case 1: // Mishtana Tsmuda
      {
        let basicz = data("basicZ");
        let k;
        let gape = ir - basicz[0].value;
        for (let i in monthsArray) {
          madad = parseInt(data("inflation")[i].value);
          k = Math.floor(i / 60);
          ir = (basicz[k].value + gape);
          pmt = PMT(ir, np - i, pv, fv);
          pv = pv + (pv * madad) / 1200 - (pmt - (ir * pv) / 1200);
          monthsArray[i] = pmt;
          sum += monthsArray[i];
        }
      }
      break;

    case 2: // Mishtana Lo Tsmuda
      {
        let basicLoz = data("basicLoZ");
        let k;
        let gape = ir - basicLoz[0].value;
        for (let i in monthsArray) {
          k = Math.floor(i / 60);
          ir = (basicLoz[k].value + gape);
          pmt = PMT(ir, np - i, pv, fv);
          pv = pv - (pmt - (ir * pv) / 1200);
          monthsArray[i] = pmt;
          sum += monthsArray[i];
        }
      }
      break;

    case 3:// const Tsamud
      {
        for (let i in monthsArray) {
          pmt = PMT(ir, np - i, pv, fv);
          pv = pv + (pv * madad) / 1200 - (pmt - (ir * pv) / 1200);
          monthsArray[i] = pmt;
          sum += monthsArray[i];
        }
      }
      break;

    case 4:// const Lo Tsmuda
      {
        pmt = PMT(ir, np, pv, fv);
        sum = pmt * np;
      }
      break;
  }

  console.log("sum", sum);
}
