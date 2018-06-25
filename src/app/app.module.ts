import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RepoService } from "src/app/Services/repo.service";
import { GridTableComponent } from './GitSearch/GridTable/GridTable.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { InputBoxComponent } from './GitSearch/InputBox/InputBox.component';
import { SearchGitComponent } from './GitSearch/search-git/search-git.component';
import { BookmarksResultComponent } from './bookmarks/bookmarks-result/bookmarks-result.component';
 
import { BookmarksComponent } from 'src/app/Bookmarks/RepoBookmarks/bookmarks.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    GridTableComponent,
    InputBoxComponent,
    SearchGitComponent,
    BookmarksComponent,
    BookmarksResultComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    StorageServiceModule,
    
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
