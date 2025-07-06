import { Component, inject, OnInit } from '@angular/core';

import {
  CryptoCard,
  CryptoCardConfiguration,
} from '../crypto/crypto-card/crypto-card';
import { CommonModule } from '@angular/common';
import { CryptoData, DashboardService } from './dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  imports: [CryptoCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  cryptoConfig: CryptoCardConfiguration[] = [];

  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.dashboardService.getCryptoData().subscribe({
      next: (res: CryptoData[]) => {
        console.log(res);
        this.initializeCryptoConfig(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  private initializeCryptoConfig(data: CryptoData[]): void {
    this.cryptoConfig = data;
  }
}
