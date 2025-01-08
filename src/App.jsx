import { useEffect } from "react"
import { useState } from "react"


function App() {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [isModalOpen, setModal] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const cartItemCount = cart.length;

    let fetchProducts = async () => {
        const productsData = await fetch('https://fakestoreapi.com/products');
        const productResponse = await productsData.json();
        setProducts(productResponse);
    };

    let addToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
        let isAlreadyInCart = cart.some((item) => item.id === product.id);
        if (isAlreadyInCart) {
            alert("item is already in your cart!");
            return;
        }
    };

    let removeCart = (product, index) => {
        cart.splice(index, 1)
        setCart([...cart])
        setTotal(total - product.price)
    }


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="flex w-full p-4 shadow-md justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900 sm:truncate sm:text-3xl px-10">The Store</h1>
                <button onClick={() => {
                    setModal(true)
                }}
                    className="font-mono px-10">My Basket <span>{cartItemCount}</span>
                </button>
            </div>

            <div className="flex bg-gray-100">
                <div className="w-full p-6 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-4 px-8">
                        {
                            products.map((product, index) => {
                                return (
                                    <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col">
                                        <img className="object-cover w-full h-48 rounded-md" src={product.image} alt="" />
                                        <div className="flex-1 mt-4">
                                            <h3 className="text-lg font-semibold">{product.title}</h3>
                                        </div>
                                        <div className="mt-auto">
                                            <p className="text-gray-600">Rs.{product.price}</p>
                                            <button onClick={() => {
                                                addToCart(product)
                                            }} className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                {
                    isModalOpen ? <div className="relative z-10" aria-labelledby='modal-title' role='dialog' aria-modal='true'>
                        <div className="fixed inset-0 bg-gray-500/75 transition-opacity">
                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3 text-center w-full sm:ml-3 sm:mt-0 sm:text-left">
                                                    <div className="w-full sm:flex justify-between sm:px-6">
                                                        <h1 className="text-base font-semibold text-gray-900">
                                                            My Basket
                                                        </h1>
                                                        <button onClick={() => {
                                                            setModal(false)
                                                        }}
                                                            className="rounded-full bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                                                            X
                                                        </button>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="space-y-4">
                                                            {
                                                                cart.map((product, index) => {
                                                                    return (
                                                                        <div key={index} className="flex items-center justify-between">
                                                                            <div>
                                                                                <p className="font-medium">{product.title}</p>
                                                                                <p className="text-gray-600">Rs.{product.price}</p>
                                                                            </div>
                                                                            <button onClick={() => {
                                                                                removeCart(product, index)
                                                                            }} className="text-red-500 hover:text-red-700">
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className="pt-4 mt-8 border-t">
                                                            <div className="flex items-center justify-between">
                                                                <span className="font-bold">Total:</span>
                                                                <span className="font-bold">Rs.{total}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }



            </div>
        </>
    )
}

export default App
