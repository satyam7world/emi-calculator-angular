import EmiRawData from "../datapojo/EmiRawData";
import emiRawData from "../datapojo/EmiRawData";

class Calculator {
  calculateEmi(data: EmiRawData): string {
    let p = data.principal
    let t = data.tenure
    let r = data.interest
    let n = t * 12 // tenure in months

    console.log(data, n)

    let firstPart = (p * r)
    console.log("firstPart :", firstPart)
    let secondUpPart = ((1 + r) ** n)
    console.log("secondPart", secondUpPart)
    let thirdDownPart = (((1 + r) ** n) - 1)
    console.log("thirdDownPart", thirdDownPart)

    let calculationMergeThirdPart = firstPart * (secondUpPart / thirdDownPart)

    return calculationMergeThirdPart.toString()
  }
}

export default Calculator
