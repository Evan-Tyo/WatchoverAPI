import express, { Request, Response, NextFunction } from "express";
import { HeroController } from "../controllers/hero.controller";

const heroController = new HeroController();
const router = express.Router();

router.get('/all', heroController.getAllHeroes)
router.get('/:hero', heroController.getHero)

export { router as heroRouter };
