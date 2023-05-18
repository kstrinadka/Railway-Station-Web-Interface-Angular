import {Station} from "../../../routes/model/dto/route";
import {Brigade} from "../../../workerControllerComponents/model/dto/worker/worker";

export class Locomotive {
  locomotiveid: number;
  station: Station;
  birthday: number;
  locomotivebrigade: Brigade;
  repairmenbrigade: Brigade;
  numberofroutes: number;
  seatsnumber: number;
}

export class LocomotiveFront {
  locomotiveid: number;
  stationid: number;
  birthday: number;
  locomotivebrigadeid: number;
  repairmenbrigadeid: number;
  numberofroutes: number;
  seatsnumber: number;
}
