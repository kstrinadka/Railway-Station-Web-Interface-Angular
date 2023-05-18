import {Passenger} from "../../../passengers/model/dto/passenger";
import {Flight} from "../../../flightControllerComponents/model/dto/flight/flight";

export class Ticket {
  ticketid: number;
  passenger: Passenger;
  flight: Flight;
  cost: number;
  timepurchase: string;
  packing: boolean;
  returnticket:boolean;
  returndate: string;
}

export class TicketFront {
  ticketid: number;
  passengerpassport: number;
  flightnumber: number;
  cost: number;
  timepurchase: string;
  packing: boolean;
  returnticket:boolean;
  returndate: string;
}
