import EmiRawData from "../../datapojo/EmiRawData";

export function createEmiRawData(principalAmount: number,
                                 annualInterest: number, tenureInMonth?: number,
                                 tenureInYear?: number): EmiRawData {
  if ((typeof tenureInMonth === "undefined") && (typeof tenureInYear === "undefined")) {
    // Don't need both to be undefined
    throw Error("error tenureInMonthAndYear undefined2")
  }
  if ((typeof tenureInMonth !== "undefined") && (typeof tenureInYear !== "undefined")) {
    // neither both defined . only one is needed , this is will be visible from first run
    throw Error("error tenureInMonthAndYear undefined3")
  }

  let tenureInMonthX = 0;
  let tenureInYearX = 0;
  if (typeof tenureInMonth === "undefined") { // Process tenureInYear as tenureInMonth is undefined
    tenureInMonthX = tenureInYear! * 12
    tenureInYearX = tenureInYear!
  } else if (typeof tenureInYear === "undefined") { // Process tenureInMonth
    tenureInMonthX = tenureInMonth
    tenureInYearX = tenureInMonth! / 12
  } else {
    throw Error("error tenureInMonthAndYear undefined1")
  }

  const emiRawData: EmiRawData = {
    principal: principalAmount,
    tenureInMonth: tenureInMonthX,
    tenureInYear: tenureInYearX,
    interestAnnually: annualInterest,
    interestPerMonth: (annualInterest / 1200)
  }

  console.log(emiRawData)

  return emiRawData

}
