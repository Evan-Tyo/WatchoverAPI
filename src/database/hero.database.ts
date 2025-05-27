import { poolQuery } from "../configs/database.config";

export class HeroDatabase {

    async getAllHeroes() {
        const query = {
            text: `SELECT * FROM heroes`
        };
        
        const result = await poolQuery(query);
        return result;
    }

    async getHero(hero: string) {
        const query = {
            text: `
                SELECT *
                FROM heroes
                RIGHT JOIN roles USING(role_id)
                LEFT JOIN abilities USING(hero_id)
                WHERE heroes.name = '${hero}'
            `
        };

        const result = await poolQuery(query);
        return result;
    }

}
