import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class user {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<UserModel[]> {
    this.loading.set(true);
    this.error.set(null);

    return this.http.get<UserModel[]>(this.apiUrl).pipe(
      tap(() => this.loading.set(false)),
      catchError(this.handleError.bind(this)),
      finalize(() => this.loading.set(false))
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.error.set(errorMessage);
    return throwError(() => new Error(errorMessage));
  }



}
