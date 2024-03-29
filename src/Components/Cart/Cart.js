import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCart from "../Cart/ItemCart";
import { cartContext } from "../Context/CartContext";



    const Cart = () => {

        const { qtyProducts, products, clear } = useContext(cartContext)

        return(
            <>
                {qtyProducts === 0
                ? 
                <div className="grid justify-items-center">
                    <div className="m-5 text-center">
                        <h1 className="font-bold text-2xl m-5">Cerveceria Artezanal Hipatia</h1>
                        <hr className="divider"/>
                        <h2 className="font-semibold text-lg m-5">Aún no tienes Productos o Servicios en el Carrito, <Link to="/" className="m-3 p-1 font-light bg-red-100 text-black drop-shadow-md rounded-md overflow-hidden">Click aqui para Comprar</Link></h2>
                    </div>
                </div> 
                :  (
                    <div className="grid justify-items-center">
                        <div className="m-5 text-center">
                            <h1 className="font-bold text-2xl m-5">Cerveceria Artezanal Hipatia</h1>
                            <hr className="divider"/>
                        <div>
                            <table className="w-3 m-3 p-1 font-light text-lg bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">
                                <thead className="m-3 p-1 font-light bg-red-100 text-black">
                                    <tr>
                                        <th scope="col" className="p-3">Nombre</th>
                                        <th scope="col" className="p-3">Precio</th>
                                        <th scope="col" className="p-3">Cantidad</th>
                                        <th scope="col" className="p-3">
                                            <button onClick={() => clear()} className="m-3 p-1 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300">Limpiar</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => <ItemCart key={product.id} product={product}/>)}
                                </tbody>
                                <tfoot>
                                    <tr className="m-3 p-1 font-light bg-red-100 text-black">
                                        <td className="font-bold">Total</td>
                                        <td className="font-bold" colSpan="1"><p>${products.reduce((acc, el) => acc + (el.qty * el.price), 0)}</p></td>
                                        <td></td>
                                        <td>    
                                            <Link to="/Formulario">
                                                <button className="m-3 p-1 font-light bg-gray-100 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300">Finalizar compra</button>
                                            </Link>
                                        </td>
                                        
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>)}
            </>
        );
    };

export default Cart
