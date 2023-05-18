import {Train} from "../../../../trains/model/dto/train";
import {Route} from "../../../../routes/model/dto/route";


export class Flight {
  flightnumber: string;
  train: Train
  departure: string
  arrival: string
  route: Route
  cancel: boolean
  reasoncancellation: string
  timedelay: string
  delay: boolean
}

export class FlightFront {
  flightnumber: string
  trainnumber: number
  departure: string
  arrival: string
  routenumber: number
  cancel: boolean
  reasoncancellation: string
  timedelay: string
  delay: boolean
}
