import express, { Request, Response, NextFunction } from "express";
import { HeroController } from "../controllers/hero.controller";

const heroController = new HeroController();
const router = express.Router();

router.get('/all', heroController.getAllHeroes)
router.get('/:hero', heroController.getHero)

export { router as heroRouter };


/*
/ Hero Router will be used so that each hero
/ can have their own route, without the need
/ for query parameters. This will use whatever
/ call is set up for the backend, and pass in
/ that hero name. At least that's the plan
/ at this time.
*/
 
// export let getHero = (heroName: string) => {
//     const router = express.Router();

//     router.get('/', (req, res) => {
//         let hero = heroName;
//         res.send(`Hero Name: ${hero}`)
//     })

//     return router;
// }
