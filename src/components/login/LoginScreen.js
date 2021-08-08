import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';



export const LoginScreen = ({ history }) => {

    //para el valor del nombre
    const [inputName, setInputName] = useState('')
    const handleInputChange = (e) => {
        setInputName(e.target.value);
    }


    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        //history.push('/dc')//lleva a la pagina indicada

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: inputName
            }
        });
        history.replace(lastPath);//reemplaza pagina con lo indicado
    }


    return (
        <div className='mx-3 h-100 card-body' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className='container-fluid '>
                <div className='row justify-content-center align-items-center'>
                    <img src='https://tentulogo.com/wp-content/uploads/2018/12/logo-marvel-comics-de-los-90.jpg'
                        style={{width: '7%'}}
                        alt='Logo'/>
                    <h1 className='text-warning display-4-md animate__animated animate__slideInDown m-1'>
                        Login Hero App</h1>
                    <img src='https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/35ZJMJYMK5DVRNBHF34TEA5MF4.png'
                        style={{width: '7%'}}
                        alt='Logo'/>

                </div>
                <hr />
            </div>
            <div className='row  justify-content-center align-items-center'>
                <div className="input-group mb-5 w-75">
                    <div className="input-group-prepend">
                        <span className="input-group-text bg-dark text-info"
                            id="inputGroup-sizing-default"
                        >
                            Your Name
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        value={inputName}
                        onChange={handleInputChange}
                    />

                </div>
                <button
                    className='btn btn-info animate__animated animate__slideInLeft mb-5'
                    onClick={handleLogin}
                >
                    See your Heroes
                </button>
            </div>

        </div>

    )
}
