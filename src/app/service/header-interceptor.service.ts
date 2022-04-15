import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem('token');
    if(jwt !== null){
      const token = 'Bearer ' + jwt;
      const tokenReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
       return next.handle(tokenReq);
    }
    return next.handle(req);
  }
}

@NgModule({
  providers: [{
     provide: HTTP_INTERCEPTORS,
     useClass: HeaderInterceptorService,
     multi: true,
  }]
})

export class Interceptor {}
