import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

import {MessagesService} from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor(
    private messageLogger:MessagesService
  ) { 
  }
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<HttpEventType.Response>>{
    const authReq = req.clone();
    // this.messageLogger.add("in interceptor");
    return next.handle(authReq);
  }
}
