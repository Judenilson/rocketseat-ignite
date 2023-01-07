import { Category } from "../entities/Category";

//DTO - Data Transfer Object - Conceito de criar um objeto responsável para passar dados de um classe para outra.
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
