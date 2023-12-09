import { Controller, Post, Body, Res } from '@nestjs/common';
import { MintService } from './mint.service';
import { Response } from 'express';

@Controller('mint')
export class MintController {
  constructor(private readonly mintService: MintService) {}

  @Post('mint-token')
  async mintToken(@Body() requestBody: any, @Res() res: Response): Promise<void> {
    try {
      const { accountId } = requestBody;
      const mintResult = await this.mintService.mintTokens(accountId);
      res.status(201).json({ mintResult });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
