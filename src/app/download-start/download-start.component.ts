import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { DownloadService } from '../shared/download.service';

@Component({
  selector: 'app-download-start',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './download-start.component.html',
  styleUrl: './download-start.component.scss'
})
export class DownloadStartComponent {
  #downloadService = inject(DownloadService);

  async onClick() {
    await this.#downloadService.waitForJobCompletion();
  }
}
