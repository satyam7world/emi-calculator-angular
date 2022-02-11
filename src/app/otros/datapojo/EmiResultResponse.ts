import EmiRawData from "./EmiRawData";

interface EmiResultResponse {
  emiPerMonth: string;
  totalMoneyToPay: string;
  totalInterestOverTime: string;
  emiRawData: EmiRawData;
}

export default EmiResultResponse;
