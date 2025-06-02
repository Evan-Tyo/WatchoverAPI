import { poolQuery } from "../configs/database.config";

export class HeroDatabase {

    async getAllHeroes() {
        const query = {
            text: `SELECT * FROM heroes`
        };
        
        const result = await poolQuery(query);
        return result;
    }

    // async getHero(hero: string) {
    //     const query = {
    //         text: `
    //             SELECT *
    //             FROM heroes
    //             RIGHT JOIN roles USING(role_id)
    //             LEFT JOIN abilities USING(hero_id)
    //             WHERE heroes.name = '${hero}'
    //         `
    //     };

    //     const result = await poolQuery(query);
    //     return result;
    // }

    // async getHero(hero: string) {
    //     const query = {
    //         text: `
    //             SELECT 
    //                 heroes.name,
    //                 heroes.description, 
    //                 roles.class, 
    //                 roles.name, 
    //                 roles.description, 
    //                 roles.category,
    //                 abilities.name,
    //                 abilities.description,
    //                 abilities.category
    //             FROM heroes
    //             RIGHT JOIN roles USING(role_id)
    //             LEFT JOIN abilities USING(hero_id)
    //             WHERE heroes.name = '${hero}'
    //         `
    //     };

    //     const result = await poolQuery(query);
    //     return result;
    // }

    async getHero(hero: string) {
        const query = {
            text: `
                SELECT 
                    heroes.name,
                    heroes.description, 
                    abilities.name,
                    abilities.description,
                    abilities.category
                FROM heroes
                LEFT JOIN abilities USING(hero_id)
                WHERE heroes.name = '${hero}'
            `
        };

        const result = await poolQuery(query);

        console.log(result)

        const query2 = {
            text: `
				SELECT 
                    heroes.name,
                    heroes.description, 
                    roles.class, 
                    roles.name, 
                    roles.description, 
                    roles.category
                FROM heroes
                RIGHT JOIN roles USING(role_id)
                WHERE heroes.name = '${hero}'
            `
        };

        const result2 = await poolQuery(query2);

        console.log(result2)

        result?.concat(result, result2);

        console.log(result?.concat(result, result2))
        return result?.concat(result, result2);
    }

}
