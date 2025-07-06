import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CryptoData } from '../../dashboard/dashboard.service';
import { DecimalPercentagePipe } from '../../shared/pipes/decimal-percentage.pipe';

export interface CryptoCardConfiguration extends CryptoData {}

@Component({
  selector: 'app-crypto-card',
  imports: [CommonModule, DecimalPercentagePipe],
  templateUrl: './crypto-card.html',
  styleUrl: './crypto-card.scss',
})
export class CryptoCard {
  @Input({ required: true }) cryptoConfig!: CryptoCardConfiguration;
}
