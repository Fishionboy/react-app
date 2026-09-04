import PropTypes from "prop-types"

export const ProductDetail = ({ handlerProductSelected, handlerRemove, product = {} }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={() => handlerProductSelected(product)}
                    className="btn btn-secondary btn-sm">
                    Update
                </button>
            </td>
            <td>
                <button onClick={() => handlerRemove(product.id)} 
                className="btn btn-danger btn-sm">
                    Remove
                </button>
            </td>
        </tr>)
}
ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}