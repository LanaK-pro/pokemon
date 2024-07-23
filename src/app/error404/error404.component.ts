import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css',
})
export class Error404Component {}
