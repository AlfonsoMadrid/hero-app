import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className='text-white display-4 p-2 mt-2 text-center'
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            >
                Marvel</h1>
            <hr/>
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}
