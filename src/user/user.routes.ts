import { Router } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const router = Router();
const userService = new UserService(); // Crie uma instância do UserService
const userController = new UserController(userService); // Passe a instância de UserService ao criar UserController

// Rota para criar um usuário
router.post('/create', (req, res) => userController.createUser(req, res));

export default router;
