import  './ProductListItem.css'
import { Link } from 'react-router-dom'
import BasketIconSVG from '../../../../assets/BasketIconSVG'
import PropTypes from "prop-types"
import HeartIconSVG from '../../../../assets/HeartIconSVG'
import { CartItem } from '../../../../Models/CartItem'
import { useContext } from 'react'
import { DataContext } from '../../../../App'

function ProductListItem({data}) {
  const urlLink = `/products/${data?.id}`
  const dataContext = useContext(DataContext)

  const handleAddCartSubmit = () => {
    let productIndex = dataContext.cart.findIndex(obj => obj.productId === data.id)

    if(productIndex === -1) {
      // Add product to cart
      dataContext.setCart([...dataContext.cart, {productId: data?.id, quantity: 1}])
      console.log("Add product to cart: ");
      console.log("product Index: " + productIndex)
      console.log(dataContext.cart)
    } else {
      // Increase quantity of product in cart
      let newCart = [...dataContext.cart];
      newCart[productIndex].quantity += 1;  
      dataContext.setCart(newCart)
      console.log("Add quantity of product in cart: ");
      console.log(dataContext.cart)
    }
  }

  return (
    <div className='product'>
      <div className='product-container'>
        <div className='product-container-padding'>
          <div className='product-image-align'>
            <button className='product-button-wishlist'> {/* TODO: Add functionallity*/}
              <HeartIconSVG/>
            </button>
            <Link to={urlLink}>
              <img className='image-container' src={data.imageURL}/>
            </Link>
          </div>
          <Link to={urlLink} className='product-container-title'>
            {data?.name}
          </Link>
          <div className='product-container-price'>{data?.price} kr</div>
        </div>
        <button className='product-button-add-item' onClick={handleAddCartSubmit}>
          <BasketIconSVG />
          ADD TO BASKET
        </button>
      </div>
    </div>
  )
}

ProductListItem.propTypes = { 
	data: PropTypes.object.isRequired
}


export default ProductListItem