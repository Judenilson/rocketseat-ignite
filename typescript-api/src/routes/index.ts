import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouters } from "./users.routes";
import { authenticateroutes } from "./authenticate.routes";


const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouters);
router.use(authenticateroutes);

export { router };
