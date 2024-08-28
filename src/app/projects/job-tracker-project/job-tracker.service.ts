import { Injectable } from '@angular/core';

import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobTrackerService {
  private jobs: Job[] = [];
  private jobId: number = 0;
  private jobToEdit?: Job = <Job>{};
  private jobToDelete!: Job;

  constructor() {
    const jobs = localStorage.getItem('jobs');

    if (jobs) {
      this.jobs = JSON.parse(jobs);

      if (this.jobs.length > 0) {
        this.jobId = this.jobs[this.jobs.length - 1].id + 1;
      }
    }
  }

  getJobs() {
    return this.jobs;
  }

  addJobToTable(title: string, company: string, description: string, location: string, date: string, notes: string, url: string) {
    let newJob = new Job(
      this.jobId,
      title,
      company,
      description,
      location,
      date,
      notes,
      url
    );

    this.jobs.push(newJob);
    this.jobId++;

    this.updateLocalStorage();
  }

  editJobOnTable(editJob: Job, title: string, company: string, description: string, location: string, date: string, notes: string, url: string) {
    let index = this.jobs.indexOf(editJob);
    this.jobs[index].title = title;
    this.jobs[index].company = company;
    this.jobs[index].description = description;
    this.jobs[index].location = location;
    this.jobs[index].date = date;
    this.jobs[index].notes = notes;
    this.jobs[index].url = url;

    this.updateLocalStorage();
  }

  deleteJobFromTable(removeJob: Job) {
    let index = this.jobs.indexOf(removeJob);

    this.jobs.splice(index, 1);

    this.updateLocalStorage();
  }

  setJobToEdit(editJob: Job) {
    this.jobToEdit = editJob;
  }

  getJobToEdit() {
    return this.jobToEdit;
  }

  setJobToDelete(deleteJob: Job) {
    this.jobToDelete = deleteJob;
  }

  getJobToDelete() {
    return this.jobToDelete;
  }

  private updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
  }
}
