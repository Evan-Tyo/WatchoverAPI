import express, { Request, Response, NextFunction } from "express";
import { HeroController } from "../controllers/hero.controller";

const heroController = new HeroController();
const router = express.Router();

// How can I reuse the router logic for all of the hero endpoints?
// Basically like middleware, but I want to do it in this file before making a new file.

// const setLocalHero = (req: Request, res: Response, next: NextFunction) => {
//     res.locals.hero = `${hero}`;
//     next();
// }

const setLocalHero = (req: Request, res: Response, next: NextFunction) => {
    res.locals.hero = `D.Va`;
    next();
}

router.get('/all', heroController.getAllHeroes)

router.get('/D.Va', setLocalHero, heroController.getHero);

router.get('/Reaper', 
    (req, res, next) => {
        res.locals.hero = 'Reaper';
        next();
    },
    heroController.getHero
);

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

// router.get('/', async (request, response) => {
//     console.log('hitting the router');
//     response.send();
//     // let heroName = request.query.heroName;
//     // response.send(`Hero Name: ${heroName}`);
// });
