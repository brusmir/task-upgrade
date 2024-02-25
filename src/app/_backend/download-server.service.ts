import { Injectable, signal } from '@angular/core';
import { Job } from '../shared/job.model';
import { JobStatus } from '../shared/job-status.model';

@Injectable({
  providedIn: 'root'
})
export class DownloadServerService {
  static jobId = 0;

  jobs = signal<Job[]>([]);

  createJob() {
      const randomNumber = Math.floor(Math.random() * 30) + 1;
      const id = DownloadServerService.jobId++;
      const item = new Job(id, JobStatus.PENDING);
      this.jobs.update(items => [...items, {jobId: item.jobId, status: item.status}]);

      setTimeout(() => {
        this.jobs.update(jobs => jobs.map(job => job.jobId === item.jobId ? {...job, status: JobStatus.DONE} : job))
      }, Number(`${randomNumber}000`));

      return id;
  }

  getJobStatus(id: number) {
    return this.jobs()[id].status;
  }
}
