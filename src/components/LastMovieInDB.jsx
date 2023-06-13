import React from 'react'

function LastMovieInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto En La Base De Datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src="assets/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " /> */}
                    </div>
                    <p></p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LastMovieInDb)