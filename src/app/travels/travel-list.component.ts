//service

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IBooking } from './travel-list.model';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
import { BookingService } from './travel.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,TravelRatingComponent,RouterModule]
})
export class TravelListComponent implements OnInit {
  filteredDestinations: IBooking[] = [];
  searchTerm: string = '';
  //  sub!:Subscription;
  newTravel: IBooking = {
    placeID: 0,
    img: '',
    name: '',
    location: '',
    rating: 0,
    price: 0,
    description: ''
  };
 
 
  private subscription:Subscription=new Subscription();

  constructor(private bookingService: BookingService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.filteredDestinations = this.bookingService.getBooking();
  }

  filterDestinations() {
    this.filteredDestinations = this.bookingService.getBooking().filter(travel =>
      travel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onRatingClicked(message: string): void {
  alert(message);
}

  onAddTravel() {
    this.newTravel.placeID = this.filteredDestinations.length + 1; 
    this.bookingService.addTravel(this.newTravel);
    this.newTravel = { placeID: 0, img: '', name: '', location: '', rating: 0, price: 0, description: '' }; 
    this.filterDestinations(); 
  }
}



//Observable


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IBooking } from './travel-list.model';
// import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
// import { Subscription } from 'rxjs';
// import { TravelistService } from './travel-list.serviceobs';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-travel-list',
//   templateUrl: './travel-list.component.html',
//   styleUrls: ['./travel-list.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule, TravelRatingComponent,RouterModule]
// })
// export class TravelListComponent implements OnInit {
//   filteredDestinations: IBooking[] = [];
//   searchTerm: string = '';
//   subscription: Subscription = new Subscription();
//   newTravel: IBooking = {
//     placeID: 0,
//     img: '',
//     name: '',
//     location: '',
//     rating: 0,
//     price: 0,
//     description: ''
//   };

//   constructor(private bookingService: TravelistService) {}

//   ngOnInit(): void {
//     this.subscription.add(
//       this.bookingService.getBooking().subscribe({
//         next: (data) => {
//           this.filteredDestinations = data;
//         },
//         error: (err) => {
//           console.error("Error fetching bookings:", err);
//         },
//         complete: () => {
//           console.log("Data fetching complete.");
//         }
//       })
//     );
//   }

//   filterDestinations() {
//     const searchLower = this.searchTerm.toLowerCase();
//     this.filteredDestinations = this.filteredDestinations.filter(travel =>
//       travel.name.toLowerCase().includes(searchLower)
//     );
//   }

//   onRatingClicked(message: string): void {
//     alert(message);
//   }

//   onAddTravel() {
//     this.newTravel.placeID = this.filteredDestinations.length + 1;
//     this.bookingService.addTravel(this.newTravel);
//     this.newTravel = { placeID: 0, img: '', name: '', location: '', rating: 0, price: 0, description: '' };
//     this.filterDestinations();
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//   }
// }



