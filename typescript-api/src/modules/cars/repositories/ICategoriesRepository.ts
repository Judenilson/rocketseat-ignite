import { Category } from "../entities/Category";

//DTO - Data Transfer Object - Conceito de criar um objeto responsável para passar dados de um classe para outra.
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
