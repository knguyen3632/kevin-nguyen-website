import { Component, inject } from '@angular/core';

import { JobTrackerService } from './job-tracker.service';
import { Job } from './job.model';

@Component({
  selector: 'app-job-tracker-project',
  templateUrl: './job-tracker-project.component.html',
  styleUrls: ['./job-tracker-project.component.css']
})
export class JobTrackerProjectComponent {
  isAddingJob = false;
  isRemovingJob = false;
  jobTrackerService = inject(JobTrackerService);

  get jobs() {
    return this.jobTrackerService.getJobs();
  }

  addJobToTable() {
    this.onStartAddJob();
    let newJob: Job = <Job>{};
    this.jobTrackerService.setJobToEdit(newJob);
  }

  editJobOnTable(editJob: Job) {
    this.onStartAddJob();
    this.jobTrackerService.setJobToEdit(editJob);
  }

  deleteJobFromTable(deleteJob: Job) {
    this.onStartRemoveJob();
    this.jobTrackerService.setJobToDelete(deleteJob);
  }

  onStartAddJob() {
    this.isAddingJob = true;
  }

  onCloseAddJob() {
    this.isAddingJob = false;
  }

  onStartRemoveJob() {
    this.isRemovingJob = true;
  }

  onCloseRemoveJob() {
    this.isRemovingJob = false;
  }
}
