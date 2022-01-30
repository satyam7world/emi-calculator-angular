import EmiRawData from "../datapojo/EmiRawData";

class Calculator {
  calculateEmi(data: EmiRawData): string {
    let p = data.principal
    let t = data.tenure
    let r = data.interest
    let n = t * 12 // tenure in months

    let firstPart = (p * r)
    let secondUpPart = ((1 + r) ** n)
    let thirdDownPart = (((1 + r) ** n) - 1)

    let calculationMergeThirdPart = firstPart * (secondUpPart / thirdDownPart)

    return calculationMergeThirdPart.toString()
  }
}

export default Calculator
