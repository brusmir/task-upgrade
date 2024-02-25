import { DownloadStartComponent } from './download-start/download-start.component';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DownloadListComponent } from './download-list/download-list.component';
import { DownloadSpinnerComponent } from './download-spinner/download-spinner.component';
import { DownloadService } from './shared/download.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DownloadListComponent, DownloadSpinnerComponent, DownloadStartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #downloadService = inject(DownloadService);
  showSpinner = this.#downloadService.showSpinner;
}
