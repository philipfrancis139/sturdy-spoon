import React, { useState } from "react";
import Link from "next/link";
import ProductReview from "@/components/product-view/productreview";
import AlsoPurches from "@/components/product-view/productlist";
import { useRouter } from "next/router";

const Post = ({ addToCart, addToWishlist }) => {
  const route = useRouter();
  const { slug } = route.query;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const checkServiceability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <section className="pt-12 pb-24 overflow-hidden bg-blueGray-100 rounded-b-10xl">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap items-center mb-16">
                <li className="mr-6">
                  <Link
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Home</span>
                    <svg
                      className="ml-6"
                      width="4"
                      height="7"
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                    href="#"
                  >
                    <span>Store</span>
                    <svg
                      className="ml-6"
                      width="4"
                      height="7"
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    href="#"
                  >
                    Apple iPhone 12 PRO
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
              <div className="flex flex-wrap items-center justify-between -mx-4 lg:justify-start lg:items-start xl:items-center">
                <div className="flex items-center justify-center w-full px-4 text-center sm:w-auto min-w-max sm:flex-col">
                  <Link
                    className="inline-block mr-4 transform -rotate-90 sm:mb-12 sm:mr-0 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                  <Link className="block mb-4 mr-2 h-30 sm:mr-0" href="#">
                    <img
                      className="w-full h-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder1.png"
                      alt=""
                    />
                  </Link>
                  <Link
                    className="hidden mb-4 mr-2 sm:block h-30 sm:mr-0"
                    href="#"
                  >
                    <img
                      className="w-full h-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder2.png"
                      alt=""
                    />
                  </Link>
                  <Link
                    className="hidden mb-4 mr-2 border-2 sm:block h-30 sm:mr-0 rounded-xl border-blueGray-500"
                    href="#"
                  >
                    <img className="w-full h-full" src="" alt="" />
                  </Link>
                  <Link
                    className="block mb-4 mr-4 h-30 sm:mb-12 sm:mr-0"
                    href="#"
                  >
                    <img
                      className="w-full h-full"
                      src="uinel-assets/images/ecommerce-product-info/placeholder3.png"
                      alt=""
                    />
                  </Link>
                  <Link
                    className="inline-block transform -rotate-90 sm:transform-none hover:text-darkBlueGray-400"
                    href="#"
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="w-full px-4 sm:w-9/12">
                  <img
                    className="mb-5"
                    src="uinel-assets/images/ecommerce-product-info/ph-photo1.png"
                    alt=""
                  />
                  <p className="text-sm text-gray-300">
                    Roll over image to zoom in
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-md mb-6">
                <span className="text-xs tracking-wider text-gray-400">
                  APPLE #3299803
                </span>
                <h2 className="mt-6 mb-4 text-5xl font-medium md:text-7xl lg:text-8xl font-heading">
                  Apple iPhone 12 Pro (128GB) - Silver
                </h2>
                <p className="flex items-center mb-6">
                  <span className="mr-2 text-sm font-medium text-blue-500">
                    $
                  </span>
                  <span className="text-3xl font-medium text-blue-500">
                    44.90
                  </span>
                </p>
                <p className="text-lg text-gray-400">
                  The nulla commodo, commodo eros a lor, tristique lectus. Lorem
                  sad 128 GB silver.
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex mr-4">
                  <button className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button className="mr-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                        fill="#C1C9D3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span className="text-gray-400 text-md">4.59</span>
              </div>
              <div className="mb-6">
                <h4 className="mb-3 font-medium font-heading">
                  <span>Color:</span>
                  <span className="text-gray-400">Silver</span>
                </h4>
                <button className="inline-flex items-center justify-center p-1 border border-gray-300 rounded-full">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </button>
                <button className="inline-flex items-center justify-center p-1 border border-transparent rounded-full">
                  <div className="w-6 h-6 bg-orange-800 rounded-full"></div>
                </button>
                <button className="inline-flex items-center justify-center p-1 border border-transparent rounded-full">
                  <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
                </button>
                <button className="inline-flex items-center justify-center p-1 border border-transparent rounded-full">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                </button>
              </div>
              <div className="mb-10">
                <h4 className="mb-3 font-medium font-heading">Qty:</h4>
                <input
                  className="w-24 px-3 py-2 text-center border-2 border-blue-500 outline-none bg-light-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="text"
                  placeholder="1"
                />
              </div>
              <div className="flex flex-wrap mb-12 -mx-2">
                {/* Shop Now */}
                <div className="w-full px-2 my-2 text-dark-600 md:w-1/3">
                  <Link
                    className="flex items-center justify-center w-full px-2 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-red-400 text-dark-800 font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    Shop Now 🛍️
                  </Link>
                </div>
                {/* Cart section */}
                <div className="w-full px-2 my-2 text-dark-600 md:w-1/3">
                  <button
                    onClick={() => {
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
                    }}
                    className="flex items-center justify-center w-full px-2 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-red-400 text-dark-800 font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    Add To Cart 🛒
                  </button>
                </div>

                {/* Wishlist Section */}
                <div className="w-full px-2 my-2 text-dark-600 md:w-1/3">
                  <button
                    onClick={() => {
                      addToWishlist(
                        slug,
                        "Phone",
                        "http://localhost:3000/",
                        "Red",
                        499,
                        1,
                        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
                        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      );
                    }}
                    className="flex items-center justify-center w-full px-2 py-4 text-xl font-medium leading-8 tracking-tighter text-center bg-red-400 text-dark-800 font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    
                  >
                    Add To WishList 💖
                  </button>
                </div>
                {/* input of pin  */}
                <div className="w-full px-2 my-2 pin text-dark-600 md:w-1/3">
                  <input
                    onChange={onChangePin}
                    type="text"
                    placeholder="712410"
                    className="flex items-center justify-center w-full px-2 py-1 text-xl font-medium leading-8 tracking-tighter text-center border-2 border-blue-500 outline-none bg-light-600 text-dark-800 font-heading focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  />
                </div>

                <div className="w-full px-2 my-2 text-dark-600 md:w-1/3">
                  <button
                    onClick={checkServiceability}
                    className="flex items-center justify-center w-full px-2 py-1 text-xl font-medium leading-8 tracking-tighter text-center bg-red-400 text-dark-800 font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                    href="#"
                  >
                    Check-Availability
                  </button>
                  {!service && service != null && (
                    <div>Sorry ! Product is not available yet.</div>
                  )}
                  {service && service != null && (
                    <div>Yah! Product is available .</div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="mb-6 font-medium font-heading">
                  More information
                </h4>
                <div>
                  <div className="px-2 py-4 border border-gray-200 cursor-pointer rounded-2xl mt-7">
                    <div
                      onClick={() => setShow(!show)}
                      className="flex items-center justify-between px-2 cursor-pointer"
                    >
                      <p className="text-base leading-4 text-gray-800">
                        Shipping and returns
                      </p>
                      <button
                        className="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        aria-label="show or hide"
                      >
                        <svg
                          className={
                            "transform " + (show ? "rotate-180" : "rotate-0")
                          }
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1L5 5L1 1"
                            stroke="#4B5563"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={
                        "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                        (show ? "block" : "hidden")
                      }
                      id="sect"
                    >
                      You will be responsible for paying for your own shipping
                      costs for returning your item. Shipping costs are
                      nonrefundable
                    </div>
                  </div>
                </div>
                <div>
                  <div className="px-2 py-4 mt-2 border border-gray-200 cursor-pointer rounded-2xl">
                    <div
                      onClick={() => setShow2(!show2)}
                      className="flex items-center justify-between px-2 cursor-pointer"
                    >
                      <p className="text-base leading-4 text-gray-800">
                        Contact us
                      </p>
                      <button
                        className="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                        aria-label="show or hide"
                      >
                        <svg
                          className={
                            "transform " + (show2 ? "rotate-180" : "rotate-0")
                          }
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1L5 5L1 1"
                            stroke="#4B5563"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={
                        "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                        (show2 ? "block" : "hidden")
                      }
                      id="sect"
                    >
                      If you have any questions on how to return your item to
                      us, contact us.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductReview />
      <AlsoPurches />
    </>
  );
};

export default Post;
