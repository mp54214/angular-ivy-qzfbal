import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  // styles: ['@import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"']
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  apiLoaded: any

constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }
}
