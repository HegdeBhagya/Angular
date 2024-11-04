import { Injectable } from "@angular/core";
import { IBooking } from "./travel-list.model";

 
@Injectable({
    providedIn:'root'
})
 
export class BookingService{
    private travels:IBooking[]=[
    {
    placeID: 1,
    img: 'assets/vidhansoudha.jpg',
    name: 'VIDHANA SOUDHA',
    location: 'Bangalore',
    rating: 4.8,
    price: 10000,
    description: 'Garden City of India',
  },
  {
    placeID: 2,
    img: 'assets/Bangalore.jpg',
    name: 'BANGALORE PALACE',
    location: 'Bangalore',
    rating: 4.7,
    price: 10000,
    description: 'Garden City of India',
  },
  {
    placeID: 3,
    img: 'assets/Mysore.jpg',
    name: 'MYSORE PALACE',
    location: 'Mysore',
    rating: 4.9,
    price: 5000,
    description: 'City of Palaces',
  },
  {
    placeID: 4,
    img: 'assets/chamundihill.jpg',
    name: 'CHAMUNDI HILL',
    location: 'Mysore',
    rating: 4.8,
    price: 5000,
    description: 'City of Palaces'
  },
  {
    placeID: 5,
    img: 'assets/hampi.jpg',
    name: 'VITTALA TEMPLE',
    location: 'Hampi',
    rating: 4.6,
    price: 2000,
    description: 'Historical Ruins'
  },
  {
    placeID: 6,
    img: 'assets/lotusmahal.jpg',
    name: 'LOTUS MAHAL',
    location: 'Hampi',
    rating: 3.5,
    price: 1000,
    description: 'Historical Ruins'
  },
  {
    placeID: 7,
    img: 'assets/Coorg.jpg',
    name: 'ABBEY FALLS',
    location: 'Coorg',
    rating: 4.7,
    price: 5000,
    description: 'Scenic Hill Station'
  },
  {
    placeID: 8,
    img: 'assets/gokarna.jpg',
    name: 'OM BEACH',
    location: 'UttaraKannada',
    rating: 4.0,
    price: 4000,
    description: 'Scenic Hill Station'
  },
  {
    placeID: 9,
    img: 'assets/Unchalli.jpg',
    name: 'UNCHALLI',
    location: 'UttaraKannada',
    rating: 4.0,
    price: 25000,
    description: 'Beach Destination',
  },
]
  getBooking(){
    return this.travels;
}

getTravelbyId(id:number){
  const travel = this.travels.find(
    travel => travel.placeID ===id
  )
  return travel;
}

addTravel(newTravel: IBooking): void {
  this.travels.push(newTravel);
}


updateTravel(travel:IBooking)
{
    const movieidx = this.travels.findIndex(x=> x.placeID === travel.placeID);
    if(movieidx != null && movieidx != undefined)
    {
        this.travels[movieidx] = travel;
    }
}

deleteTravel(id: number): void {
  const index = this.travels.findIndex(travel => travel.placeID === id);
  if (index !== -1) {
    this.travels.splice(index, 1);
  }
}
}

