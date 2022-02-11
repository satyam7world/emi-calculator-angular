import EmiRawData from "./EmiRawData";

interface EmiResultResponse {
  emiPerMonth: string;
  totalMoneyToPay: string;
  totalInterestOverTimeAccurate: number;
  totalInterestOverTimeRounded: string;
  emiRawData: EmiRawData;
}

export default EmiResultResponse;
