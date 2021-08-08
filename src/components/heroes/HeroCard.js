import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className='card ms-md-5 bg-light overflow-auto' style={{maxWidth: 530}}>
            <div className='row no-gutters'>
                <div className='col-md-4 '>
                    {/* Este elemento solo se mostrara en tamaño grande */}
                    <img src={heroImages(`./${id}.jpg`)} 
                    className='img-fluid img-thumbnail d-none d-sm-none d-md-block' 
                    alt={superhero}
                    /> 
                    {/* Este elemento solo se mostrara en tamaño pequeño */}
                    <img src={heroImages(`./${id}.jpg`)} 
                    className='img-thumbnail d-block d-sm-block d-md-none' 
                    alt={superhero}
                    style={{maxHeight: 200}}
                    />
                </div>
                <div className='col-md-8 col-sm-6'>
                    <div className='card-body'>
                        <h5 className='card-title'><strong>{superhero}</strong></h5>
                        <p className='card-text'>{alter_ego}</p>

                        {
                            (alter_ego !== characters)
                            && <p className='card-text'>
                                <small className='text-secondary'>{characters}</small>
                            </p>
                        }
                        
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link className='stretched-link text-info' to={`./hero/${id}`}>
                            More info...
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}
