import { ITeam } from "../Team/type";
import { IUserData } from "../UserList";

export interface IServiceItem {
  data: IService
  handleSelect: (data: IService) => void;
  serviceSelected: IService[]
}

export interface IService {
  id: string
  name: string
  image: string
  price: number
  price_text: string
  todos: string[]
  description: string
  category: string
  created_at: string
  updated_at: string
}

export interface IServicesList {
  booking: IGuestBooking;
  onDoneCallback: (list: string[]) => void;
}

export interface INameModal {
  onDoneCallback: (a: string) => void
  booking: IGuestBooking;
}

export interface IGuestBooking {
  guest: IUserData | null,
  barber: ITeam | null
  services: string[],
  bookingTime: string
  phone: string
}


export interface IBookingEntrance {
  phone?: string;
  name?: string;
  step?: string;
  services?: string;
}