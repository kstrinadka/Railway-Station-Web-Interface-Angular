import {Locomotive} from "../../../locomotives/model/dto/locomotive";

export class Train {
  trainnumber: number;
  typetrain: string;
  locomotive: Locomotive;
}

export class TrainFront {
  trainnumber: number;
  typetrain: string;
  locomotiveid: number;
}
