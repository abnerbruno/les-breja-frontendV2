import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();
    
    return ( 
        <Layout title="Carrinho" description="Suas Melhores Cervejas" >
            <div >
                <div className="text-center mt-5">
                    <h1>Carrinho</h1>
                    <p>Suas Melhores Cervejas.</p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-8 p-1">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Seu Carrinho esta Vazio
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Compra Finalizada</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">Continuar comprando</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-4 p-3">
                            <div className="card card-body mb-3">
                                <h5 className=" mb-3 text-center">Area Cupom</h5>
                                <hr className="my-4"/>
                                <form class="card p-2">
                                    <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Cod Cupom"/>
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-primary">Resgatar</button>
                                    </div>
                                    </div>
                                </form>
                            </div>

                            <div className="card card-body">
                                <p className="mb-1">Total de Itens</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total a pagar</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <Link to='/checkout'><button type="button" className="btn btn-primary mb-2">CHECKOUT</button></Link>
                                    <button type="button" className="btn text-danger mb-2" onClick={clearCart}>LIMPAR</button>
                                </div>

                            </div>
                        </div>
                        
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;