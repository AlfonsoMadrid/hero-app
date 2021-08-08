import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1 className='text-white display-4 p-2 mt-2 text-center' 
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            >DC</h1>
            <hr/>
            <HeroList publisher='DC Comics' />
        </div>
    )
}
