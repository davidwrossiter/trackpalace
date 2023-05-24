import React from "react";
import './Cart.css'
import { selectCartTotal, selectCartItems } from "../../features/cartItems/cartItemsSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cartItems/cartItemsSlice";
import removeIcon from '../../Icons/Plus.svg';
import stripeLogo from '../../Icons/StripeLogo.svg';
import paypalLogo from '../../Icons/PayPalLogo.svg';

const Cart = () => {
    // const cartTotalItems = useSelector(selectNumberItemsInCart);
    const cartTotal = useSelector(selectCartTotal);
    const cartItemInfo = useSelector(selectCartItems);
    const dispatch = useDispatch()
    return(
        <div className="cart-page-container">
            <h1>Your cart total is ${cartTotal}.00</h1>
            <div className='cart-line'></div>
            <div className="cart-items-cart-page-container">
                <div className="cart-item-info-header">
                    <div id="cart-item-item-header"><p>ITEM</p></div>
                    <div id='place-holder-for-cart-titles-price'><p>PRICE</p></div>
                    <div><p>LICENSE</p></div>
                    <div id='place-holder-for-cart-titles'><p>hi</p></div>
                </div>
                <div>{cartItemInfo.map((item) => {
                    return <div className='cart-item-cart-page'>
                            <div className='cart-item-info'>
                                <img src={item.cart_item.track_img_src} alt='cart-item'></img>
                                <div className='cart-item-artist-info'>
                                    <p id='cart-item-track-name'>{item.cart_item.track_name}</p>
                                    <div className='cart-item-artist-name'>
                                        <p>{item.cart_item.track_artist}</p>
                                        <img src='https://drive.google.com/uc?export=view&id=1mBnRA0aWy5kjRwPJ_qhN2BUIMdu064sE' alt='verified-badge'></img>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='cart-item-price'>
                                <p>${item.cart_item.track_price}.00</p>
                            </div>
                            <div className='cart-item-license'>
                                <p>{item.cart_item.lease_type}</p>
                            </div>
                                <div className='cart-item-review-remove-from-cart'>
                                    <button id='review-license-button'>Review License</button>
                                    <button id='remove-from-cart-button' onClick={() => {dispatch(removeFromCart(item.cart_item_number))}}><img src={removeIcon} alt='remove-from-cart'/></button>
                                </div>
                        </div>
                })}</div>

            </div>
            <div className='cart-line'></div>
            <div className='cart-summary'>
                <div className='cart-summary-container'>
                    <h4>Cart Summary</h4>
                    <div className='cart-line-2'></div>
                    <div>
                        <div id='total-gross-cost'>
                            <p>Total Gross</p>
                            <p>${cartTotal}.00</p>
                        </div>
                        <div id='total-discount-amount'>
                            <p>Discount</p>
                            <p>-$0.00</p>
                        </div>
                        <div id='final-cart-total'>
                            <p>Total</p>
                            <p>${cartTotal}.00</p>
                        </div>
                    </div>
                    <div id='checkout-options-buttons'>
                        <button id='checkout-with-pay-pal'>
                            <img src={paypalLogo} alt='paypal-logo' />
                            <p>Checkout via PayPal</p>
                        </button>
                        <button id='checkout-with-stripe'>
                            <img src={stripeLogo} alt='stripe-logo' />
                            <p>Checkout via Stripe</p>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart