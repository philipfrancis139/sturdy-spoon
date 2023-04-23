import React from "react";
import styles from '../../styles/Nav.module.css'

export default function Wishlist({
  wishlist,
  clearWishlist,
  removeOneItemFromWishlist,
  addToCart,
}) {
  const products = Object.keys(wishlist);
  return (
    <>
      {products.length == 0 && (
        <>
        <video id="video1" className={`${styles.video1} min-h-screen min-w-full bg-cover object-cover`} autoPlay loop muted src='/wishlist-desktop.mp4'></video>
        <video id="video2" className={`${styles.video2} min-h-full min-w-full `} autoPlay loop muted src='/wishlist-phone.mp4'></video>
        </>
      )}
     {products.length >= 1 && (<div className="bg-white min-h-full">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Wishlist</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product}  className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
             
                <img
                  src={wishlist[product].imageSrc}
                  alt={wishlist[product].imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
</div>
                <h3 className="mt-4 text-sm text-gray-700" >
                  {wishlist[product].name}
                </h3>

                <p className="mt-1 text-lg font-medium text-gray-900"> ${wishlist[product].price}</p>

                <p className="mt-1 text-lg font-medium text-gray-900"> {wishlist[product].colour}</p>
            <button type='button'  href={wishlist[product].href} className="mt-1 bg-black px-3 py-2 text-white rounded-md ">More Information</button> 
            <button type='button' onClick={() => {
                      addToCart(
                        slug,
                        "Phone",
                        "http://localhost:8000/",
                        "Red",
                        499,
                        1,
                        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
                        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      );
                    }} className="mt-1 left-0 ml-4 bg-black px-3 py-2 text-white rounded-md ">🛒</button>
            <button type='button' onClick={()=>{removeOneItemFromWishlist(product)}} className="mt-1 ml-4 bg-black px-3 py-2 text-white rounded-md "> 🗑️ </button>
              </div>
            ))}
          </div>
        </div>
      </div>)}
    </>
  );
}
