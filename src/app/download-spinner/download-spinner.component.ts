import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-download-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './download-spinner.component.html',
  styleUrl: './download-spinner.component.scss'
})
export class DownloadSpinnerComponent {

}
