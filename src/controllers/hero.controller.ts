import { Request, Response } from "express";

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
        const hero = res.locals.hero;

        if(hero) {
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
        }
    };

}

// app  =>  routes  =>  controller  =>  database call