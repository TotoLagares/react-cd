 import './items.css'
 const Item = ({id, nombre, precio, stock, img, categoria, descripcion}) => {
    return(
        <figure class="snip1268 bg-secondary">
            <div class="image m-3">
                <img src={img} alt="sq-sample4" className='img-fluid border'/>
                <a href="/" class="add-to-cart">Add to Cart</a>
            </div>
            <figcaption>
                <h2 className='text-center fs-6 m-3'>{nombre}</h2>
                <div className='d-flex justify-content-around'>
                    <h5 className=''> $ {precio}</h5>
                    <h5 className='text-muted fs-5'>Stock {stock}</h5>
                </div>
                <p className='text-center mt-3 fs-6'>{descripcion}</p>
            </figcaption>
      </figure> 

    )
}
export default Item