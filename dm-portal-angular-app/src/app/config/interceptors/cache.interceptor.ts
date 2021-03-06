import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { HttpCacheService } from "./http-cache.service";
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
	constructor(private cache: HttpCacheService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		if (!this.isRequestCachable(req)) {
			return next.handle(req);
		}
		const cachedResponse = this.cache.get(req);
		if (cachedResponse !== null) {
			return of(new HttpResponse<any>({ body: cachedResponse.body }));
			//return of(cachedResponse);
		}
		return next.handle(req).pipe(
			tap(event => {
				if (event instanceof HttpResponse) {
					this.cache.put(req, event);
				}
			})
		);
	}
	private isRequestCachable(req: HttpRequest<any>) {
		return (req.method === 'GET');
	}
}