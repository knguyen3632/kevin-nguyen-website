import { Component, EventEmitter, inject, Output } from '@angular/core';

import { Job } from '../../job.model';
import { JobTrackerService } from '../../job-tracker.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  @Output() close = new EventEmitter<void>();
  private editJob?: Job;
  jobTrackerService = inject(JobTrackerService);
  enteredId: number = -1;
  enteredTitle: string = '';
  enteredCompany: string = '';
  enteredDescription: string = '';
  enteredLocation: string = '';
  enteredDate: string = '';
  enteredNotes: string = '';
  enteredUrl: string = '';

  constructor() {
    this.editJob = this.jobTrackerService.getJobToEdit();

    if (this.editJob?.id !== undefined) {
      this.enteredId = this.editJob.id;
      this.enteredTitle = this.editJob.title;
      this.enteredCompany = this.editJob.company;
      this.enteredDescription = this.editJob.description;
      this.enteredLocation = this.editJob.location;
      this.enteredDate = this.editJob.date;
      this.enteredNotes = this.editJob.notes;
      this.enteredUrl = this.editJob.url;
    }
  }

  onSaveJob() {
    if (this.editJob?.id !== undefined) {
      this.jobTrackerService.editJobOnTable(
        this.editJob,
        this.enteredTitle,
        this.enteredCompany,
        this.enteredDescription,
        this.enteredLocation,
        this.enteredDate,
        this.enteredNotes,
        this.enteredUrl
      );
    } else {
      this.jobTrackerService.addJobToTable(
        this.enteredTitle,
        this.enteredCompany,
        this.enteredDescription,
        this.enteredLocation,
        this.enteredDate,
        this.enteredNotes,
        this.enteredUrl
      );
    }
    this.close.emit();
  }

  onCloseModal() {
    this.close.emit();
  }
}
