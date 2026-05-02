import React from 'react'
function CompoStateEffect() {
    const[numero, setNumero] = React.useState(1)
    function aumentarNumero() {
       setNumero(numero + 1)
    }

    React.useEffect(() => {
        alert("NUmero alterado...")
        if(numero == 11) {
            alert("Quantidade Passou de 10.")
        }
    }, [numero])

    // Executa 1 vez quando o componente criar
    React.useEffect(() => {
        alert("Carregando Componente")
    }, [])
    
    return (
        <div className="container">
            CompoStateEffect - {numero}
            <br />
            <button onClick={aumentarNumero}>Aumentar Numero</button>
        </div>
    )
}

export default CompoStateEffect