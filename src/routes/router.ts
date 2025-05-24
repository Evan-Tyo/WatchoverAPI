import express from "express";

/*
/ Hero Router will be used so that each hero
/ can have their own route, without the need
/ for query parameters. This will use whatever
/ call is set up for the backend, and pass in
/ that hero name. At least that's the plan
/ at this time.
*/
export let heroRouter = (heroName: string) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        let hero = heroName;
        res.send(`Hero Name: ${hero}`)
    })

    return router;
}

// const router = express.Router();

// router.get('/', async (request, response) => {
//     console.log('hitting the router');
//     response.send();
//     // let heroName = request.query.heroName;
//     // response.send(`Hero Name: ${heroName}`);
// });

// export default router;
