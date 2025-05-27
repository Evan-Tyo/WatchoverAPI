import { Request, Response } from "express";
import { heroes } from "../utils/constants";

export class HeroController {

    async getAllHeroes(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "All heroes teehee",
                // body: req.body
            });
        } catch (e) {
            res.status(500).json({
                message: `Oopsies made an oopsies on getAllHeroes ${e}`,
            });
        }
    };

    async getHero(req: Request, res: Response) {
        const hero = req.params.hero;

        if(heroes.includes(hero)) {
            try {
                res.status(200).json({
                    message: `${hero} information`,
                    // body: req.body
                });
            } catch (e) {
                res.status(500).json({
                    message: `Oopsies made an oopsies on getHero ${e}`,
                });
            }
        } else {
            res.status(500).json({
                message: `Hero: ${hero} does not exist.`,
            });
        }
    };

}

// app  =>  routes  =>  controller  =>  database call