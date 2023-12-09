import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class MintService {
  private apiUrl: string = process.env.API_URL;
  private apiKey: string = process.env.API_KEY;

  async mintTokens(accountId: string): Promise<any> {
   
    const mintUrl = `${this.apiUrl}/mints`;
    const mintOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        itemTypeId: '3c90c3cc-0d44-4b50-8888-8dd25736052a',
        amount: 1,
      }),
    };

    const response = await fetch(mintUrl, mintOptions);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Erro ao mintar tokens');
    }
  }
}
