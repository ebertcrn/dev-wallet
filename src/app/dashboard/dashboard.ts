import { Component } from '@angular/core';

import {
  CryptoCard,
  CryptoCardConfiguration,
} from '../crypto/crypto-card/crypto-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CryptoCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  cryptoConfig: CryptoCardConfiguration[] = [
    {
      logo: 'img/bitcoin.png',
      name: 'BitCoin',
      value: '4.250,00',
      variation: '2.3',
    },
    {
      logo: 'img/solana.png',
      name: 'Solana',
      value: '125.56',
      variation: '2.3',
    },
    {
      logo: 'img/cardano.png',
      name: 'Cardano',
      value: '1.35',
      variation: '2.3',
    },
    {
      logo: 'img/ethereum.png',
      name: 'Ethereum',
      value: '2.690,45',
      variation: '1.2',
    },
  ];
}
