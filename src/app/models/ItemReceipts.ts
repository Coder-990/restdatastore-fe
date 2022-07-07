import {Article} from "./Article";
import {Receipt} from "./Receipt";

export interface ItemReceipts {
  id: number;
  stavkaPrimkePrimka: Receipt;
  stavkaPrimkeRobe: Article;
  kolicina: number;
  storno: boolean;
  datumStorno: Date;
}
