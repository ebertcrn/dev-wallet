import { Component } from '@angular/core';

import { Header } from './core/header/header';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Dashboard],
})
export class App {
  protected title = 'dev-wallet';
}
