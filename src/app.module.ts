import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MintModule } from './mint/mint.module';

@Module({
  imports: [UserModule, MintModule],
})
export class AppModule {}