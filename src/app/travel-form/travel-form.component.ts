// import { Component } from '@angular/core';
// import { IBooking } from '../travels/travel-list.model';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BookingService } from '../travels/travel.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-travel-form',
//   standalone: true,
//   imports: [FormsModule,CommonModule],
//   templateUrl: './travel-form.component.html',
//   styleUrl: './travel-form.component.css'
// })
// export class TravelFormComponent {

//   id:number|undefined;
// travel:IBooking |undefined;

// //Dependency Injection  
//   constructor(
//     private router:Router,private route:ActivatedRoute,
//     private movService:BookingService){
    
//   }
//   ngOnInit(): void {
//    this.route.paramMap.subscribe((map) =>{
//     this.id = +map.get('id')!;

    
//    this.travel = this.movService.getTravelbyId(this.id)
//    })
//   }

//   // onSave(){
//   //   this.movService.updateTravel(this.travel);
//   //   alert("Movie updated successfully");
//   //   this.router.navigate(['/travel']);
//   // }

//   onSave() {
//     if (this.travel) {
//       this.movService.updateTravel(this.travel);
//       alert("Travel destination updated successfully");
//       this.router.navigate(['/travel']);
//     } else {
//       alert("No travel destination selected to update.");
//     }
//   }
  


// }





import { Component } from '@angular/core';
import { IBooking } from '../travels/travel-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../travels/travel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent {
  id: number | undefined;
  travel: IBooking = {
    placeID: 0,
    img: '',
    name: '',
    location: '',
    rating: 0,
    price: 0,
    description: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movService: BookingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      const travelDetails = this.movService.getTravelbyId(this.id);
      if (travelDetails) {
        this.travel = travelDetails;
      }
    });
  }

  onSave() {
    if (this.travel) {
      this.movService.updateTravel(this.travel);
      alert("Travel destination updated successfully");
      this.router.navigate(['/travel-list']);
    } else {
      alert("No travel destination selected to update.");
    }
  }
}


//serviceobs

// import { Component, OnInit } from '@angular/core';
// import { IBooking } from '../travels/travel-list.model';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TravelistService } from '../travels/travel-list.serviceobs';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-travel-form',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './travel-form.component.html',
//   styleUrls: ['./travel-form.component.css']
// })
// export class TravelFormComponent implements OnInit {
//   id: number | undefined;
//   travel: IBooking = {
//     placeID: 0,
//     img: '',
//     name: '',
//     location: '',
//     rating: 0,
//     price: 0,
//     description: ''
//   };

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private movService: TravelistService
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       this.id = +params.get('id')!;
//       if (this.id) {
//         this.movService.getTravelById(this.id).subscribe({
//           next: (travelDetails) => {
//             if (travelDetails) {
//               this.travel = travelDetails;
//             }
//           },
//           error: (err) => console.error("Error fetching travel details:", err)
//         });
//       }
//     });
//   }

//   onSave() {
//     if (this.travel) {
//       this.movService.updateTravel(this.travel);
//       alert("Travel destination updated successfully");
//       this.router.navigate(['/travel-list']);
//     } else {
//       alert("No travel destination selected to update.");
//     }
//   }
// }
