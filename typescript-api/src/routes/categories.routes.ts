import { request, response, Router } from "express";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAleradyExists = categoriesRepository.findByName(name);

  if(categoryAleradyExists){
    return response.status(400).json({error: "Category Already Exists!"})
  }

  categoriesRepository.create({name,description});

  return response.status(201).send();
});

categoriesRoutes.get("/",(request,response)=>{
    const all = categoriesRepository.list();

    return response.json(all);
})

export { categoriesRoutes };
