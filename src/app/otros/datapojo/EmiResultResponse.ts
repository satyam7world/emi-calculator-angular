import EmiRawData from "./EmiRawData";

interface EmiResultResponse {
  emiPerMonth: number;
  totalMoneyToPay: number;
  totalInterestOverTime: number;
  emiRawData: EmiRawData;
}

export default EmiResultResponse;
