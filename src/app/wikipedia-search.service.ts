import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/delay'

@Injectable()
export class WikipediaSearchService {
  constructor(private jsonp: Jsonp) {}
  
  search (term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling

    let obs = this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => response.json()[1]);

    if (term.length === 2) {
      obs = obs.delay(1000);
    }

    return obs;
  }
}