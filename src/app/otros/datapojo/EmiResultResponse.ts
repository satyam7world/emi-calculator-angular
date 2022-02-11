import EmiRawData from "./EmiRawData";

interface EmiResultResponse {
  emiPerMonth: string;
  totalMoneyToPay: string;
  totalInterestOverTime: number;
  emiRawData: EmiRawData;
}

export default EmiResultResponse;
