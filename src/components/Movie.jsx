//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import MovieList from './MovieList'

class Movie extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/movies')
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Todos Los Productos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        {/* <th>Premios</th> */}
                                        {/* <th>Duración</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movies.map((movie, index) => {
                                            return <MovieList  {...movie} key={index} />
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

export default Movie