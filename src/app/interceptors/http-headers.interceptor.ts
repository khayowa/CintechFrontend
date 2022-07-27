import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'Host': 'https://cintech-springboot-back-end.azurewebsites.net',
                'Content-Type': 'application/json'
            }
        });

        return next.handle(req);
    }
}