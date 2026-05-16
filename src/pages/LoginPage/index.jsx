import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function LoginPage() {

    const[login, setLogin] = React.useState('')
    const[senha, setSenha] = React.useState('')
    const navigate = useNavigate()
    const { setAutorizado } = useContext(AuthContext)

    function handleLogin() {
        if(login == 'admin' && senha == '123123') {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Login Efetuado com Sucesso!',
                icon: 'success'
            })
            setAutorizado(true)
            navigate('/admin')
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'Login ou senha incorreto!',
                icon: 'error'
            })
        }
    }

    function handleChange(evento) {

        const { name, value } = evento.target

        if(name == 'login') {
            setLogin(value)
        }

        if(name == 'senha') {
            setSenha(value)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <form className='mt-5'>
                        <h2 className='text-center'>Autenticação</h2>
                        <div className='mt-3'>
                            <label htmlFor="">Login</label>
                            <input className='form-control' type="text" name="login" id="login" value={login} onChange={handleChange} />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="">Senha</label>
                            <input className='form-control' type="password" name="senha" id="senha" value={senha} onChange={handleChange} />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary' onClick={handleLogin} type="button">Acessar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage