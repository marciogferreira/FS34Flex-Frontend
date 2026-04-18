import ProductCard from "../components/ProductCard"

function Main () {

    const cursos = [
        {
            id: "23838",
            titulo: "Frontend",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ftgptPpHpBFCA3xycRX_oeOrJPrN9GhOLQ&s",
            descricao: "Curso de Frontend"
        },
        {
            id: "15838",
            titulo: "Backend",
            src: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
            descricao: "Curso de Backend"
        },
        {  
            id: "45838",
            titulo: "FullStack",
            src: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
            descricao: "Curso de FullStack"
        }
    ]

    return (
        <main className="container">

            <div className="row mt-5 mb-5">
                {cursos.map((item, posicao) => (
                    <div className="col-3" key={posicao}>
                        <ProductCard id={item.id} titulo={item.titulo} src={item.src}  />
                    </div>
                ))}
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-3">
                    <ProductCard 
                        titulo="Frontend"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ftgptPpHpBFCA3xycRX_oeOrJPrN9GhOLQ&s" 
                    />
                </div>
                <div className="col-3">
                    <ProductCard 
                        titulo="FullStack"
                        src="https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg" 
                    >
                        <strong>Curso de FullStack Completo</strong>
                        <br />
                        <p>Venha conferir!</p>
                    </ProductCard>
                </div>
                <div className="col-3">
                    <ProductCard 
                        titulo="Backend"
                        src="https://www.shutterstock.com/image-photo/web-development-hands-robot-human-260nw-2614142709.jpg"
                    />
                </div>
                <div className="col-3">
                    <ProductCard 
                        titulo="IA Generate"
                        src="https://www.shutterstock.com/image-photo/web-development-innovation-businessman-touching-260nw-2606963815.jpg"
                    />
                </div>
            </div>
        </main>
    )
}

export default Main