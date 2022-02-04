import EmiRawData from "../datapojo/EmiRawData";
import EmiResultResponse from "../datapojo/EmiResultResponse";

class Calculator {
  calculateEmi(data: EmiRawData): EmiResultResponse {
    let p = data.principal
    // let t = data.tenureInMonth
    let r = data.interestPerMonth

    let n = data.tenureInMonth

    // console.log(data, n)

    let firstPart = (p * r)
    // console.log("firstPart :", firstPart)
    let secondUpPart = ((1 + r) ** n)
    // console.log("secondPart", secondUpPart)
    let thirdDownPart = (((1 + r) ** n) - 1)
    // console.log("thirdDownPart", thirdDownPart)

    let calculationMergeThirdPart = firstPart * (secondUpPart / thirdDownPart)


    let totalMoneyToPay = calculationMergeThirdPart * n

    const totalInterestOverTime = totalMoneyToPay - p;


    return {
      emiPerMonth: calculationMergeThirdPart, emiRawData: data,
      totalMoneyToPay, totalInterestOverTime
    }
  }
}

export default Calculator
