import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAleradyExists = this.categoriesRepository.findByName(name);

    if (categoryAleradyExists) {
      throw new Error("Category Already Exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
