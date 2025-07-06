import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CryptoData {
  name: string;
  price_change_percentage_24h: number;
  image: string;
  symbol: string;
  current_price: number;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

  private readonly httpClient = inject(HttpClient);

  getCryptoData(): Observable<CryptoData[]> {
    const params = {
      vs_currency: 'usd',
      ids: 'bitcoin, ethereum, solana, cardano, the-open-network',
    };
    const apiUrl = `${this.apiUrl}?vs_currency=${params.vs_currency}&ids=${params.ids}&price_change_percentage=24h&sparkline=true`;
    return this.httpClient.get<CryptoData[]>(apiUrl);
  }
}
