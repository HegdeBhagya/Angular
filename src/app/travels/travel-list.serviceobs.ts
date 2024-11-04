// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { catchError, map } from "rxjs/operators";
// import { IBooking } from "./travel-list.model";

// @Injectable({
//   providedIn: 'root'
// })
// export class TravelistService {
//   private apiUrl = 'api/travels.json'; 
//   private travels: IBooking[] = []; 

//   constructor(private http: HttpClient) {}

  
//   getBooking(): Observable<IBooking[]> {
//     return this.http.get<IBooking[]>(this.apiUrl).pipe(
//       catchError(error => {
//         console.error('Error fetching bookings', error);
//         return of([]); 
//       })
//     );
//   }


//   getTravelById(id: number): Observable<IBooking | undefined> {
//     return this.getBooking().pipe(
//       map(travels => travels.find(travel => travel.placeID === id))
//     );
//   }


//   addTravel(newTravel: IBooking): void {
//     this.travels.push(newTravel); 
//   }

//   updateTravel(travel: IBooking): void {
//     const index = this.travels.findIndex(x => x.placeID === travel.placeID);
//     if (index !== -1) {
//       this.travels[index] = travel;
//     }
//   }


//   deleteTravel(id: number): void {
//     const index = this.travels.findIndex(travel => travel.placeID === id);
//     if (index !== -1) {
//       this.travels.splice(index, 1);
//     }
//   }
// }


// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { catchError, map } from "rxjs/operators";
// import { IBooking } from "./travel-list.model";

// @Injectable({
//   providedIn: 'root'
// })
// export class TravelistService {
//   private apiUrl = 'api/travels.json'; 

//   constructor(private http: HttpClient) {}

//   // GET all bookings
//   getBooking(): Observable<IBooking[]> {
//     return this.http.get<IBooking[]>(this.apiUrl).pipe(
//       catchError(error => {
//         console.error('Error fetching bookings', error);
//         return of([]); 
//       })
//     );
//   }

//   // GET a single travel item by ID
//   getTravelById(id: number): Observable<IBooking | undefined> {
//     return this.getBooking().pipe(
//       map(travels => travels.find(travel => travel.placeID === id))
//     );
//   }

//   // POST a new travel item
//   addTravel(newTravel: IBooking): Observable<IBooking> {
//     return this.http.post<IBooking>(this.apiUrl, newTravel, this.httpOptions).pipe(
//       catchError(error => {
//         console.error('Error adding travel', error);
//         return of(newTravel);
//       })
//     );
//   }

//   // PUT (update) an existing travel item
//   updateTravel(travel: IBooking): Observable<IBooking> {
//     const url = `${this.apiUrl}/${travel.placeID}`;
//     return this.http.put<IBooking>(url, travel, this.httpOptions).pipe(
//       catchError(error => {
//         console.error('Error updating travel', error);
//         return of(travel);
//       })
//     );
//   }

//   // DELETE a travel item by ID
//   deleteTravel(id: number): Observable<void> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<void>(url, this.httpOptions).pipe(
//       catchError(error => {
//         console.error('Error deleting travel', error);
//         return of(undefined);
//       })
//     );
//   }

//   // Define HTTP options for requests
//   private httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
// }

