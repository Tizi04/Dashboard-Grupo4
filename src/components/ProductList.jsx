import React from 'react'
import PropTypes from 'prop-types'

function ProductList(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.category}</td>
                <td>{props.description}</td>
            </tr>
        </React.Fragment>
    )
}

ProductList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string

}

export default ProductList