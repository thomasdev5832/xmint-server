import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MintModule } from '../mint/mint.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MintModule],
})
export class UserModule {}
