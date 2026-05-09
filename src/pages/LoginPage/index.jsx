import React from 'react'
import Swal from 'sweetalert2'

function LoginPage() {

    const[login, setLogin] = React.useState('')
    const[senha, setSenha] = React.useState('')

    function handleLogin() {
        if(login == 'admin' && senha == '123123') {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Login Efetuado com Sucesso!',
                icon: 'success'
            })
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
        <>
            <form>
                <div>
                    <label htmlFor="">Login</label>
                    <input type="text" name="login" id="login" value={login} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" name="senha" id="senha" value={senha} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={handleLogin} type="button">Acessar</button>
                </div>
                
            </form>
        </>
    )
}
export default LoginPage