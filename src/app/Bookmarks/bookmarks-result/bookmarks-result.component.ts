import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmarks-result',
  templateUrl: './bookmarks-result.component.html',
  // styleUrls: ['./bookmarks-result.component.css']
})
export class BookmarksResultComponent implements OnInit {
   @Input() Repos: any []  ;
  
  constructor() { }

  ngOnInit() {
   
  }

}
