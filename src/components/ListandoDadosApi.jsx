import React from 'react'

function ListandoDadosApi() {


    const[contador, setContador] = React.useState(0)
    const[lista, setLista] = React.useState([])

    function consultarApi() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setLista(json)
        })
    }

    React.useEffect(() => {
        
        console.log("Componente Montando...")
        // document.querySelector("body").style.background = 'black'
        consultarApi()

        if(contador == 10) {
            alert("Contador Chegou a 10")
        }

        return () => {
            console.log("Desmontando o Componente...")
            document.querySelector("body").style.background = 'pink'
        }

    }, [contador])

    return (
        <>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.website}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListandoDadosApi