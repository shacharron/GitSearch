import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchGitComponent } from 'src/app/GitSearch/search-git/search-git.component';
import { BookmarksComponent } from 'src/app/Bookmarks/RepoBookmarks/bookmarks.component';

const routes: Routes = [
  { path: 'BookMarks', component: BookmarksComponent },
  { path: 'Main', component: SearchGitComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
