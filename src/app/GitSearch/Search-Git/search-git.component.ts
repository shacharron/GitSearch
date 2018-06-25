import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/Services/repo.service';

@Component({
  selector: 'app-search-git',
  templateUrl: './Search-Git.component.html',
  // styleUrls: ['./Search-Git.component.css']
})
export class SearchGitComponent implements OnInit {
  Repos: any[];
  private GitUrl :string = 'https://api.github.com/search/repositories?q=';  // URL to web api

  constructor(private repoService: RepoService) { }

  GetSearchData(data) {
    this.getRepos(data);
  }

  private getRepos(searchterm): void {
    this.repoService.HttpGet(this.GitUrl , searchterm)
   .subscribe(repos => this.Repos = repos);
  } 

ngOnInit() {
  
  }

}
