import Header from '../../layouts/Header'
import Main from '../../layouts/Main'
import Footer from '../../layouts/Footer'
import { useNavigate, useParams } from 'react-router'
import React from 'react'

function ProdutosDetalhesPage() {
    const params = useParams()
    const navigate = useNavigate()
    const[dados, setDados] = React.useState(null)

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.codigo}`)
        .then(response => response.json())
        .then(json => {
            setDados(json)
        })
    }, [params])

    return (
        <>
            <Header />
            <button onClick={() => navigate('/produtos')}>Voltar</button>
            <h1>ProdutosDetalhesPage - {params.codigo}</h1>
            {dados && 
                <>
                    <p><strong>Nome: </strong>{dados.name}</p>
                    <p><strong>E-mail: </strong>{dados.email}</p>
                    <p><strong>Telefone: </strong>{dados.phone}</p>
                    <p><strong>Website: </strong>{dados.website}</p>
                </>
            }
            <Footer />
        </>
    )
}
export default ProdutosDetalhesPage