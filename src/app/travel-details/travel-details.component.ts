import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../travels/travel.service';


import { map } from 'rxjs';
import { IBooking } from '../travels/travel-list.model';
// import { TravelistService } from '../travels/travel-list.serviceobs';

@Component({
  selector: 'app-travel-details',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './travel-details.component.html',
  styleUrl: './travel-details.component.css'
})
export class TravelDetailsComponent implements OnInit{
  id: number | undefined;
  travel:IBooking | undefined;

  constructor(
    private router: Router, private route: ActivatedRoute,
    // private bookService:BookingService) {}
    private bookService:BookingService){} 
  ngOnInit(): void {
   
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('placeID')!;

      this.travel=this.bookService.getTravelbyId(this.id)

    })
  }
 
  onBack(): void {
    this.router.navigate(['/travel-list']);
}

onEdit():void{
  this.router.navigate([`/travel-details/${this.id}/edit`]);
}

onDelete(): void {
  if (this.id !== undefined) {
    this.bookService.deleteTravel(this.id);
    alert("Travel destination deleted successfully");
    this.router.navigate(['/travel-list']);
  } else {
    alert("No travel destination selected to delete.");
  }
}
}



//OBSERVABLE
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IBooking } from '../travels/travel-list.model';
// import { TravelistService } from '../travels/travel-list.serviceobs';

// @Component({
//   selector: 'app-travel-details',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './travel-details.component.html',
//   styleUrls: ['./travel-details.component.css']
// })
// export class TravelDetailsComponent implements OnInit {
//   id: number | undefined;
//   travel: IBooking | undefined;

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private bookService: TravelistService
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       this.id = +params.get('placeID')!;
//       if (this.id) {
//         // Fetch the travel details asynchronously
//         this.bookService.getTravelById(this.id).subscribe({
//           next: (data) => {
//             this.travel = data;
//           },
//           error: (err) => console.error("Error fetching travel details:", err)
//         });
//       }
//     });
//   }

//   onBack(): void {
//     this.router.navigate(['/travel-list']);
//   }

//   onEdit(): void {
//     this.router.navigate([`/travel-details/${this.id}/edit`]);
//   }

//   onDelete(): void {
//     if (this.id !== undefined) {
//       this.bookService.deleteTravel(this.id);
//       alert("Travel destination deleted successfully");
//       this.router.navigate(['/travel-list']);
//     } else {
//       alert("No travel destination selected to delete.");
//     }
//   }
// }
