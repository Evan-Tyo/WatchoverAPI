import { Request, Response } from "express";

export class HeroController {
    async allHeroes(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "200 response",
                body: req.body
            });
        } catch (e) {
            res.status(500).json({
                message: "Oopsies made an oopsies"
            })
        }
    }
}

// app  =>  routes  =>  controller  =>  database call