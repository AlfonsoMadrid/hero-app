import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';




export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    //const hero = getHeroById(heroeId);

    if (!hero) {
        return <Redirect to='/' /> //si es distinto del id re dirige a /
    }

    const handleReturn = () => {
        if (history.length <=2) {
            history.push('/');
        }else{
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className='row mx-1 animate__animated animate__fadeIn bg-dark  justify-content-center align-items-center text-center'>
            <div className='col-4-lg col-12-sm px-2  '>
                <h1 className='text-info display-4-lg'>{superhero}</h1>
                <img src={heroImages(`./${heroeId}.jpg`)}
                    alt={superhero}
                    className='img-thumbnail  animate__animated animate__fadeInLeft'
                    style={{maxHeight: 300}}
                />
                                <h3 className='text-warning mb-1-lg'>{alter_ego}</h3>
            </div>
            <div className='mt-5 row-sm justify-content-center align-items-center text-center w-75'>
            <div className='col-6-lg col-12-sm mt-5-lg'>
                <ul className='list-group list-group-flush mt-5-lg'>
                    <li className='list-group-item text-white bg-info'><b>Alter Ego: </b>{alter_ego}</li>
                    <li className='list-group-item text-white bg-info'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item text-white bg-info'><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className='text-light mt-4'>Characters</h5>
                <p className='text-muted'>{characters}</p>
                <button 
                    className='btn btn-outline-success mb-5'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
            </div>
        </div>
    )
}
