import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OperationComponent } from './operation/operation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
FormsModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OperationComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
}
