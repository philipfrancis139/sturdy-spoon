import Link from "next/link";
import React, { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

const Checkout = ({ cart, subTotal }) => {
  const products = Object.keys(cart);
  const countries = ['US','UK','CA','RW']
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center px-4 py-16 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
        <div className="flex flex-col items-start justify-start w-full space-y-9">
          <div className="flex flex-col items-start justify-start space-y-2">
            <button className="flex flex-row items-center space-x-1 text-gray-600 hover:text-gray-500">
              <svg
                className="fill-stroke"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none">Back</p>
            </button>
            <p className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
              Checkout
            </p>
            <p className="text-base leading-normal text-gray-600 sm:leading-4">
              Home {">"} Electronics {">"} Headphones {">"} Cart {">"} Checkout
            </p>
          </div>

          <div className="flex flex-col justify-center w-full space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6">
            {products.map((product) => (
              <li key={product} className="list-none">
                {" "}
                <div className="flex flex-col items-center justify-center px-10 bg-gray-100 xl:w-3/5 sm:flex-row xl:flex-col py-7 sm:py-0 xl:py-10 xl:w-full">
                  <div className="flex flex-col items-start justify-start w-full space-y-4">
                    <Link
                      href={cart[product].href}
                      className="text-xl leading-normal text-gray-800 md:text-2xl"
                    >
                      {cart[product].name}
                    </Link>
                    <p className="text-base font-semibold leading-none text-gray-600">
                      ${cart[product].quantity * cart[product].price}
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                    <img
                      src={cart[product].imageSrc}
                      alt={cart[product].imageAlt}
                    />
                  </div>
                </div>
              </li>
            ))}

            <div className="flex flex-col p-8 bg-gray-100 lg:w-full xl:w-3/5">
              <button className="flex flex-row items-center justify-center w-full py-4 space-x-2 text-white bg-gray-900 border border-transparent rounded hover:border-gray-300 hover:bg-white hover:text-gray-900">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <div className="flex flex-row items-center justify-center mt-6">
                <hr className="w-full border" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  or pay with card
                </p>
                <hr className="w-full border" />
              </div>

              <div className="mt-8">
                <input
                  className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Card details
              </label>
              <div className="flex-col mt-2">
                <div>
                  <input
                    className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded-tl rounded-tr"
                    type="email"
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded-bl"
                    type="email"
                    placeholder="MM/YY"
                  />
                  <input
                    className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded-br"
                    type="email"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Name on card
              </label>
              <div className="flex-col mt-2">
                <div>
                  <input
                    className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded"
                    type="email"
                    placeholder="Name on card"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Country or region
              </label>
              <div className="flex-col mt-2">
                <div className="relative">
                  <button
                    onClick={() => setMenu(!menu)}
                    className="w-full p-4 text-base leading-4 text-left text-gray-600 placeholder-gray-600 bg-white border border-gray-300 rounded-tl rounded-tr"
                    type="email"
                  >
                    {country}
                  </button>
                  <svg
                    className={
                      "transform  cursor-pointer absolute top-4 right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-800 hover:text-white"
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                <input
                  className="w-full p-4 text-base leading-4 text-gray-600 placeholder-gray-600 border border-gray-300 rounded-bl rounded-br"
                  type="text"
                  placeholder="ZIP"
                />
              </div>

              <button className="flex items-center justify-center w-full py-4 mt-8 text-white bg-gray-900 border border-transparent rounded hover:border-gray-300 hover:bg-white hover:text-gray-900">
                <div>
                  <p className="text-base leading-4">Pay ${subTotal}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
