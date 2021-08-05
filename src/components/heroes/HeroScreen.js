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
        <div className='row mx-1 animate__animated animate__fadeIn'>
            <div className='col-4 px-2'>
                <h1 className='text-info display-4'>{superhero}</h1>
                <img src={heroImages(`./${heroeId}.jpg`)}
                    alt={superhero}
                    className='img-thumbnail mb-5 animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-7 mx-1'>
                <h3 className='text-warning'>{alter_ego}</h3>
                <ul className='list-group list-group-flush mt-5'>
                    <li className='list-group-item text-muted'><b>Alter Ego: </b>{alter_ego}</li>
                    <li className='list-group-item text-muted'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item text-muted'><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className='text-light mt-4'>Characters</h5>
                <p className='text-muted'>{characters}</p>
                <button 
                    className='btn btn-outline-success'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
