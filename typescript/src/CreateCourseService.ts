interface Course {
  name: string;
  duration?: number; //A interrrogação define o atributo como opcional
  educator: string;
}

class CreateCourseService {
  execute({ duration = 8, name, educator }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
