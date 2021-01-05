import React from 'react';

const Table = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Proveedores</h2>
                <div className="btn-group me-2">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Filtrar</button>
                    <button type="button" id="show-modal" className="btn btn-sm btn-outline-secondary">+ Nuevo</button>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Rif</th>
                            <th>Nombre</th>
                            <th>Tipo de contribuyente</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>V123456559</td>
                            <td>Johan Castillo</td>
                            <td>Ordinario</td>
                            <td>04242183299</td>
                            <td>correo@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                        <tr>
                            <td>V123456789</td>
                            <td>Jc Johan</td>
                            <td>Especial</td>
                            <td>04242183299</td>
                            <td>jcjohan2707@gmail.com</td>
                        </tr>

                    
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;