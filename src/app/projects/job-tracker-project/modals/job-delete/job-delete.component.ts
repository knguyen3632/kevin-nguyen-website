import { Component, EventEmitter, inject, Output } from '@angular/core';

import { JobTrackerService } from '../../job-tracker.service';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent {
  @Output() close = new EventEmitter<void>();
  jobTrackerService = inject(JobTrackerService);

  onDeleteJob() {
    let deleteJob = this.jobTrackerService.getJobToDelete();
    this.jobTrackerService.deleteJobFromTable(deleteJob);
    this.close.emit();
  }

  onCloseDeleteModal() {
    this.close.emit();
  }
}
