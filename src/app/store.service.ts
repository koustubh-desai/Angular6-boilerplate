import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = "https://somelink.com";
  private params = new HttpParams().set('authToken','3b502b3f-b1ff-4128-bd99-626e74836d9c');
  constructor(
    private messageService:MessagesService,
    private http:HttpClient
  ) { 
  }

  getData():Observable<any>{
    return this.http.get(this.apiUrl,{params:this.params}).pipe(
      tap(movies=>{console.log('In store.service.ts ',movies)}),
      catchError(this.handleError('getData', []))
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('StoreService: ' + message);
  }
}
