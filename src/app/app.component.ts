import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service'

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WikipediaSearchService]
})
export class AppComponent {
  title = 'app works!';

  items : Array<String>
  constructor(private service:WikipediaSearchService) {}

  search(term:string) {
	this.service.search(term).subscribe(results => this.items = results);
  }
}