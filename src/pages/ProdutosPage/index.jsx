import Header from '../../layouts/Header'
import Main from '../../layouts/Main'
import Footer from '../../layouts/Footer'
import React from 'react'
import { useNavigate } from 'react-router'
function ProdutosPage() {
    
    const navigate = useNavigate()
    const[lista, setLista] = React.useState([])

    function consultarDados() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            setLista(json)
        })
    }

    function verDetalhesProduto(id) {
        navigate(`/produtos/${id}`)
    }

    React.useEffect(() => {
        consultarDados()
    }, [])

    return (
        <>
            <Header />
            <h1>Produtos</h1>
            <ul>
                {lista.map((produto, index) => (
                    <li key={index}>
                        {produto.name} - <button onClick={() => verDetalhesProduto(produto.id)}>Ver Detalhes</button>
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    )
}
export default ProdutosPage