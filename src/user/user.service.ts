import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class UserService {
  
  private apiUrl: string = process.env.API_URL;
  private apiKey: string = process.env.API_KEY;

  async createUser(data: { email: string }): Promise<any> {
    
    const createUserUrl = `${this.apiUrl}/account/users`;
    const createUserOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ email: data.email }),
    };

    const response = await fetch(createUserUrl, createUserOptions);
    const result = await response.json();

    if (response.ok) {
      return result.account;
    } else {
      throw new Error(result.message || 'Erro ao criar usuário');
    }
  }
}