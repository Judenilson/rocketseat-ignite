import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateroutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateroutes.post("/sessions", authenticateUserController.handle);

export { authenticateroutes };
