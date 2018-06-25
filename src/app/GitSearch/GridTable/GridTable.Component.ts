import { Component, OnInit,Input,Output } from '@angular/core';
 
import { RepoService } from "src/app/Services/repo.service";

import { SessionStorageService } from "src/app/Services/session-storage.service";
@Component({
  selector: 'app-GridTable',
  templateUrl: './GridTable.component.html',
  // styleUrls: ['./GridTable.component.css']
})
export class GridTableComponent implements OnInit {
  @Input() Repos: any[];
  
  constructor(private repoService: RepoService ,private sessionStorageService:SessionStorageService ) { }
  AddToBookmarks (data) {
   
    this.sessionStorageService.add("repo",data);
  }

  ngOnInit() {
    this.sessionStorageService.removeAll("repo");
  }

}

