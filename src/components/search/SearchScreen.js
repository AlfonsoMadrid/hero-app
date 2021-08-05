import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1 className='text-light display-4'>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5 mb-5'>
                    <h4 className='text-light'>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Find your Hero'
                            className='form-control'
                            autoComplete='off'
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type='submit'
                            className='btn mt-1 btn-block btn-outline-info '
                        >
                        Search...
                        </button>
                    </form>
                </div>
                <div className='col-7 mb-5'>
                    <h4 className='text-light'>Results</h4>

                    {
                        (q === '')
                        &&
                        <div className='alert alert-success'>
                            Search your Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className='alert alert-danger'>
                            Sorry... <br/> No hero found under the following parameter:<br/> {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
