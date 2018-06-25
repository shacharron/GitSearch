import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RepoService } from 'src/app/Services/repo.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './InputBox.component.html',
  
})
export class InputBoxComponent implements OnInit {
  Items$: Observable<any>;
  private searchTerms = new Subject<string>();
  @Output() SearchClick = new EventEmitter();
  constructor(private repoService: RepoService) { }

  ClickMe(term) {
    this.SearchClick.emit(term);
  }

  ngOnInit(): void {
    this.Items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
     // switchMap((term: string) => this.ClickMe(term)),
    );
  }

}
