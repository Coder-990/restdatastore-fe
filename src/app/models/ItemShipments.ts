import {Shipment} from "./Shipment";
import {Article} from "./Article";

export interface ItemShipments {
  id: number;
  stavkaIzdatniceIzdatnica: Shipment;
  stavkaIzdatniceRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
