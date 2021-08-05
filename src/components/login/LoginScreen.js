import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        //history.push('/dc')//lleva a la pagina indicada
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Alfonso'
            }
        });
        history.replace(lastPath);//reemplaza pagina con lo indicado
    }

    return (
        <div style={{ margin: 0, height: '100%', backgroundColor: 'black' }}>
            <div className='container mt-5'>
                <h1 className='text-white display-4 animate__animated animate__fadeIn'>Login to App</h1>
                <hr />
                <button
                    className='btn btn-info animate__animated animate__slideInLeft'
                    onClick={handleLogin}
                >
                    See your Heroes
                </button>
            </div>
        </div>

    )
}
