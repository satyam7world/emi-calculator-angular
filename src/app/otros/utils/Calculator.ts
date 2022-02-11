import EmiRawData from "../datapojo/EmiRawData";
import EmiResultResponse from "../datapojo/EmiResultResponse";
import {environment} from "../../../environments/environment";

class Calculator {
  /**
   * @param data the raw Data
   * roundingType was not working with default value it was empty so
   * removed it.
   * @ param roundingType again here as arg coz it needs a default value
   * when null or empty , and it is already set there before
   * */
  calculateEmi(data: EmiRawData,/* roundingTypeX: string*/): EmiResultResponse {
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


    let totalMoneyToPayFinal = "Error-8.I";

    let roundingType = localStorage.getItem('numberRoundingSelectSetting') || environment.settingsRoundingOptionNgModelDefault

    // console.log("new  ", roundingType)

    let emiPerMonthFinal;
    let totalInterestOverTimeFinal;

    switch (roundingType) {
      case 'two-digit':
        totalMoneyToPayFinal = Number(totalMoneyToPay).toFixed(2);
        emiPerMonthFinal = Number(calculationMergeThirdPart).toFixed(2);
        totalInterestOverTimeFinal = Number(totalInterestOverTime).toFixed(2);
        break;
      case 'no-rounding':
        totalMoneyToPayFinal = totalMoneyToPay.toString()
        emiPerMonthFinal = calculationMergeThirdPart.toString()
        totalInterestOverTimeFinal = totalInterestOverTime.toString()
        break;
      case 'ceil':
        totalMoneyToPayFinal = Math.ceil(totalMoneyToPay).toString()
        emiPerMonthFinal = Math.ceil(calculationMergeThirdPart).toString()
        totalInterestOverTimeFinal = Math.ceil(totalInterestOverTime).toString()
        break;
      case 'floor':
        totalMoneyToPayFinal = Math.floor(totalMoneyToPay).toString()
        emiPerMonthFinal = Math.floor(calculationMergeThirdPart).toString()
        totalInterestOverTimeFinal = Math.floor(totalInterestOverTime).toString()
        break;
      case 'one-digit':
        totalMoneyToPayFinal = Number(totalMoneyToPay).toFixed(1);
        emiPerMonthFinal = Number(calculationMergeThirdPart).toFixed(1);
        totalInterestOverTimeFinal = Number(totalInterestOverTime).toFixed(1);
        break;
      case 'three-digit':
        totalMoneyToPayFinal = Number(totalMoneyToPay).toFixed(3);
        emiPerMonthFinal = Number(calculationMergeThirdPart).toFixed(3);
        totalInterestOverTimeFinal = Number(totalInterestOverTime).toFixed(3);
        break;
      default:
        totalMoneyToPayFinal = "Error-8.Q";
        emiPerMonthFinal = "Error-8.O";
        totalInterestOverTimeFinal = "Error-8.L";
        break;
    }



    return {
      emiPerMonth: emiPerMonthFinal, emiRawData: data,
      totalMoneyToPay: totalMoneyToPayFinal, totalInterestOverTime
    }
  }
}

export default Calculator
