import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUseAvatarUseCase } from "./UpdateUserAvatarUseCase";



class UpdateUserAvatarController{

  async handle(request: Request, response: Response){
    const { id } = request.user;

    //receber arquivo
    const avatar_file = null;

    const updateUserAvatarUseCase = container.resolve(UpdateUseAvatarUseCase);

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }

}

export { UpdateUserAvatarController};