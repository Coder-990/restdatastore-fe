import {Company} from "./Company";

export interface Receipt {
  id: number;
  datum: Date;
  primkaFirme: Company;
}
