import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {WebLocalService} from './web-local.service';
import {Local} from '../models/Local';
import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  filteredByDistLocalsList = new Subject<Local[]>();
  private checkedLocalsIdList = new Subject<number[]>();
  private checkedLocalsIdListValues: number[] = [];
  private checkedLocalsListValues: Local[] = [];
  private filteredByDistLocalsListValues: Local[] = [];
  local: Local;
  localsList: Local[];

  constructor(private webLocalService: WebLocalService) {

  }


  getFilteredByDistLocalsList(): Observable<Local[]> {
    return this.filteredByDistLocalsList.asObservable();
  }

  updateFilteredByDistLocalsList(localsList: Local[]) {
    this.filteredByDistLocalsList.next(localsList);
    this.filteredByDistLocalsListValues = localsList;
  }


  getCheckedLocalsIdList(): Observable<number[]> {
    return this.checkedLocalsIdList.asObservable();
  }

  updateCheckedLocalsIdList(checkedlocalsList: number[]) {
    this.checkedLocalsIdList.next(checkedlocalsList);
    this.checkedLocalsIdListValues = checkedlocalsList;
  }

  getFilteredByDistLocalsListValues() {
    return this.filteredByDistLocalsListValues;
  }

  getCheckedLocalsIdListValues() {
    return this.checkedLocalsIdListValues;
  }




}
