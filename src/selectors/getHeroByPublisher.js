import { heroes } from "../data/heroes";


export const getHeroByPublisher = (publisher) => {
    
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher "${ publisher }" is not correct inmundo animal!!`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
