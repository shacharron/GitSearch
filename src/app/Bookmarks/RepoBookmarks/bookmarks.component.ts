import { Component, OnInit } from '@angular/core';

import { MockRepos } from 'src/app/MockRepo';
import { SessionStorageService } from "src/app/Services/session-storage.service";


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  // styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
   public Repos: any []  ;
   constructor(private sessionStorageService:SessionStorageService) { }
  
  GetCookie (key: string )  {
    return this.sessionStorageService.Get(key);
 
  }

  ngOnInit() {
    console.log(JSON.parse(this.GetCookie("repo")));
    //console.log(JSON.parse(this.GetCookie("repo")));

    this.Repos = JSON.parse(this.GetCookie("repo")); ;
  }

}
