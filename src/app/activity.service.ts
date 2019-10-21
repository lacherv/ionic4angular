import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private httpClient: HttpClient) {}

  getActivity(activityID: string) {
    // tslint:disable-next-line: no-use-before-declare
    return this.httpClient.get(API + '/id/' + activityID);
  }

  getAllActivities() {
    // tslint:disable-next-line: no-use-before-declare
    return this.httpClient.get(API);
  }
}

// Declare a constant for a API.
const API = 'https://orangevalleycaa.org/api/videos';
