import { Request, Response } from 'express';
import { UserService } from './user.service';
import { Controller, Post, Body, Res } from '@nestjs/common';

@Controller('users')
export class UserController {
  private readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post()
  async createUser(@Body() requestBody: any, @Res() res: Response): Promise<void> {
    try {
      const { email } = requestBody;
      const user = await this.userService.createUser({ email });
      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
