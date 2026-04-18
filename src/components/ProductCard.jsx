function ProductCard(props) {

    function comprarProduto() {
        alert("Comprando...ID " + props.id)
    }

    return (
        <>
            {/* https://dontpad.com/flex34 */}
            <div className="card">
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <p className="card-text">{props.children}</p>
                    <a href="#" onClick={comprarProduto} className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard