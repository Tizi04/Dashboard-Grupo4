//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import ProductList from './ProductList'

class Product extends React.Component {
    state = {
        product: []
    }

    componentDidMount() {
        fetch('http://localhost:3030/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({ product: data.products })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}

                {/*<!-- DataTales Example -->*/}
                <div className='card'>
                    <div className="card-body">
                        <h1 className="card-title">Todos Los Productos</h1>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Categoria</th>
                                        <th>Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.product.map((product, index) => {
                                            return <ProductList  {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Product