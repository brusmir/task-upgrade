import { Component, Inject, signal } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-download-notification',
  standalone: true,
  imports: [],
  templateUrl: './download-notification.component.html',
  styleUrl: './download-notification.component.scss'
})
export class DownloadNotificationComponent {
  message = signal<string>('');

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any ) { }

  ngOnInit(): void {
    this.message.set(this.data);
  }
}
