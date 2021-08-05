import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/UI/Navbar'

export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar />

            <div className='container'>
                <Switch>

                    <Route  exact path='/marvel' component={MarvelScreen} />
                    <Route  exact path='/hero/:heroeId' component={HeroScreen} />
                    <Route  exact path='/dc' component={DcScreen} />
                    <Route  exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />

                </Switch>
            </div>
        </div>
    )
}
