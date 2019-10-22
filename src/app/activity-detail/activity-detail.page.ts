import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss']
})
export class ActivityDetailPage implements OnInit {
  activityDetail: Observable<Activity>;

  constructor(
    activityService: ActivityService,
    activatedRoute: ActivatedRoute
  ) {
    const activityID = activatedRoute.snapshot.params.activityID;
    this.activityDetail = activityService.getActivity(activityID);
  }

  ngOnInit() {}
}
