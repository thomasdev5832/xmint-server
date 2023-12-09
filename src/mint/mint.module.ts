import { Module } from '@nestjs/common';
import { MintService } from './mint.service';
import { MintController } from './mint.controller';

@Module({
  providers: [MintService],
  controllers: [MintController],
  exports: [MintService],
})
export class MintModule {}
