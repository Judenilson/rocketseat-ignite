import { Category } from "../model/Category";

//DTO - Data Transfer Object - Conceito de criar um objeto responsável para passar dados de um classe para outra.
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
