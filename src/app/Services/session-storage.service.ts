import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor( @Inject(SESSION_STORAGE) private storage: StorageService) { }

  add(key: string, value: any) {
    var result = JSON.parse(this.storage.get(key));
    if (result === null) {
      result = [];
      result.push(value);
    }
    else {
      result.push(value);
    }
    this.storage.set(key, JSON.stringify(result));
  }
  removeAll(key: string) {
    this.storage.remove(key)
  }

  Get(key: string): any {
    return this.storage.get(key);
  }


}
