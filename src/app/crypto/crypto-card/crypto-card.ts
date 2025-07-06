import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CryptoCardConfiguration {
  name: string;
  logo: string;
  value: string;
  variation: string;
}

@Component({
  selector: 'app-crypto-card',
  imports: [CommonModule],
  templateUrl: './crypto-card.html',
  styleUrl: './crypto-card.scss',
})
export class CryptoCard {
  @Input({ required: true }) cryptoConfig!: CryptoCardConfiguration;
}
