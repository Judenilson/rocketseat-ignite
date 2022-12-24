import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Jud"
  });


  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Maria"
  });

  return response.send();
}
