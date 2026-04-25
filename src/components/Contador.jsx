import React from 'react'
function Contador() {

    const[contador, setContador] = React.useState(0)
    const[imagem, setImagem] = React.useState(false)

    function aumentarContador() {
        setContador(contador + 1)
    }

    function diminuirContador() {
        setContador(contador - 1)
    }

    return (
        <>
            {/* https://dontpad.com/fs34 */}
            {contador}
            <button onClick={aumentarContador}>Aumentar Contador</button>
            <button onClick={diminuirContador}>Diminuir Contador</button>
            <br />
            {imagem ? 
                <img 
                    onClick={() => {setImagem(false)}}
                    src="https://cdn-icons-png.flaticon.com/512/5537/5537462.png"
                    width="100px"
                    alt=""
                    className='animate__animated animate__fadeIn' 
                />
            : 
                <img 
                    onClick={() => {setImagem(true)}}
                    src="https://cdn-icons-png.flaticon.com/512/702/702814.png"  
                    width="100px"
                    alt="" 
                    className='animate__animated' 
                />
            }
        </>
    )
}

export default Contador