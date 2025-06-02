import { Request, Response } from "express";
import { heroes } from "../utils/constants";
import { HeroDatabase } from "../database/hero.database";

const heroDatabase = new HeroDatabase();

export class HeroController {

    async getAllHeroes(req: Request, res: Response) {
        try {
            const result = await heroDatabase.getAllHeroes();
            res.status(200).json({
                message: "All Heroes",
                body: result
            });
        } catch (e) {
            res.status(500).json({
                message: `Error getAllHeroes: ${e}`,
            });
        }
    };

    async getHero(req: Request, res: Response) {
        const hero = req.params.hero;

        if(heroes.includes(hero)) {
            try {
                const result = await heroDatabase.getHero(hero);
                res.status(200).json({
                    message: `${hero} information`,
                    body: result
                });
            } catch (e) {
                res.status(500).json({
                    message: `Error getHero: ${e}`,
                });
            }
        } else {
            res.status(500).json({
                message: `Hero: ${hero} does not exist.`,
            });
        }
    };

}
