import React from 'react'

function ListaTarefas() {
    
    const[lista, setLista] = React.useState([
        "Lavar a Louça",
        "Lavar Carro",
        "Lavar Moto"
    ])

    function adicionarTarefa() {
        const tarefa = prompt("Digite o nome da Tarefa") 
        if(tarefa != "") {
            setLista([...lista, tarefa])
        }
    }
    
    function removerTarefa(tarefa) {
        const novaLista = lista.filter((item) => item != tarefa)
        setLista([...novaLista])
    }

    return (
        <>
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            <ul>
                {lista.map((nome, index) => (
                    <li key={index}>
                        {nome} - 
                        <button className='btn btn-danger btn-sm' onClick={() => removerTarefa(nome)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaTarefas