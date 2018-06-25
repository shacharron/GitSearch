import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MockRepos } from "src/app/MockRepo";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Http, Response } from '@angular/http'; 
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  
public Repos:any=[];
   
  HttpGet (url :string, serach: string) : Observable <any[]>{
     return this.http.get<any>(url+serach )
    .pipe(map(response => response.items)
    );
  }

   HttpPut () : Observable <any>{
    throw new Error("Not implemted")
  }
   HttpPost () : Observable <any>{
    throw new Error("Not implemted")
  }
   HttpDelete () : Observable <any>{
      throw new Error("Not implemted")
  }
   constructor(private http: HttpClient,)  { 
      }

  }

