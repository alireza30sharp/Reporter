export interface ContractInterface {
  contractHeader: ContractHeader;
  details: Detail[];
  contractConcreteSupplementary: ContractConcreteSupplementary;
}

export interface ContractConcreteSupplementary {
  id: number;
  carryingCalculationType: string;
  carryingUnitAmount: number;
  calculateTheCarryingAmountTo: number;
  unitAmountOfCarryingDeficit: number;
  amountOfCarryingTip: number;
  pumpType: string;
  pumpCalculationType: string;
  pumpUnitAmount: number;
  unitAmountOfPumpDeficit: number;
  pumpDeficitAmountTo: number;
  pumpTipUnitAmount: number;
  resistanceCategory: string;
  theAmountOfCement: string;
  waterToCementRatio: string;
  minimumResistance: string;
  typeOfCement: string;
  projectAddress: string;
  headerId: number;
}

export interface Detail {
  id: number;
  headerId: number;
  productCode: number;
  productName: string;
  meghdar: string;
  unitAmount: number;
  totalAmount: number;
  discountPercent: number;
  discountAmount: number;
  valueAddedPercentage: number;
  valueAddedAmount: number;
  complicationsPercentage: number;
  complicationsAmount: number;
  netAmountRow: number;
}

export interface ContractHeader {
  id: number;
  shContract: number;
  trackingCode: string;
  contractDate: string;
  contractTime: string;
  companyName: string;
  customerCode: string;
  customerName: string;
  customerMobile: string;
  totalAmount: number;
  additionsAndDeduction: number;
  valueAddedAmount: number;
  tollAmount: number;
  netAmount: number;
  howToSettle: string;
  contractText1: string;
  contractText2: string;
  isAccepted: boolean;
  lastDateTimeAccept: string;
  isRejected: boolean;
  lastDateTimeReject: string;
  additionalInformation1: string;
  additionalInformation2: string;
  additionalInformation3: string;
  additionalInformation4: string;
  additionalInformation5: string;
}
