import { Response, Request } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

//Todo UseCase só terá UM único controler, mantendo o padrão do handler!
//Forçando q o UseCase tenha apenas uma responsabilidade
class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
