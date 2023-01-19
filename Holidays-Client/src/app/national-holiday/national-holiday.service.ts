import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NationalHoliday } from './models/national-holiday';

@Injectable({
  providedIn: "root"
})
export class NationalHolidayService {

  baseUrl = "https://localhost:44346/api/NationalHoliday/";

  constructor(private httpClient: HttpClient) { }

  getAllNationalHolidays(): Observable<NationalHoliday[]>  {
    return this.httpClient.get<NationalHoliday[]>(this.baseUrl + "GetAllNationalHoliday")
    .pipe(
      catchError(this.handleError)
    );
  }

  getNationalHoliday(id: number): Observable<NationalHoliday>  {
    return this.httpClient.get<NationalHoliday>(this.baseUrl + "GetNationalHoliday/" + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateNationalHoliday(nationalHoliday: NationalHoliday){
    return this.httpClient.post(this.baseUrl + "UpdateNationalHoliday", nationalHoliday)
      .pipe(
        catchError(this.handleError)
      );
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
