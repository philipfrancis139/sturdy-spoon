import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];

export default function Cart({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  removeOneItemFromCart,
}) {
  const products = Object.keys(cart);
  // console.log(products);
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-4 px-2 py-1 text-2xl font-semibold border-0 rounded bg-gradient-to-r from-teal-400 to-yellow-200 focus:outline-none hover:bg-gray-200 md:mt-0 text-dark-900 hover:text-gray-500"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open panel</span>
        🛒
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                    <div className="flex flex-col h-full overflow-y-scroll shadow-xl bg-gradient-to-tl from-pink-500 via-pink-500 to-rose-300">
                      <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-cyan-400"
                            >
                              {products.length == 0 && (
                                <div className="font-semibold">
                                  No Items In cart 🤷🏻‍♀️ !
                                </div>
                              )}
                              {products.map((product) => (
                                <li key={product} className="flex py-6">
                                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                    <img
                                      src={cart[product].imageSrc}
                                      alt={cart[product].imageAlt}
                                      className="object-cover object-center w-full h-full"
                                    />
                                  </div>

                                  <div className="flex flex-col flex-1 ml-4">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link href={cart[product].href}>
                                            {cart[product].name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          $
                                          {cart[product].quantity *
                                            cart[product].price}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Color: {cart[product].colour}
                                      </p>
                                    </div>
                                    <div className="flex items-end justify-between flex-1 text-sm">
                                      <p className="text-gray-900">
                                        Qty :
                                        <button
                                          onClick={() => {
                                            addToCart(
                                              product,
                                              cart[product].name,
                                              cart[product].href,
                                              cart[product].colour,
                                              cart[product].price,
                                              1,
                                              cart[product].imageSrc,
                                              cart[product].imageAlt
                                            );
                                          }}
                                          className="mx-1 bg-red-200"
                                        >
                                          ➕
                                        </button>
                                        {cart[product].quantity}
                                        <button
                                          onClick={() => {
                                            removeFromCart(
                                              product,
                                              cart[product].name,
                                              cart[product].href,
                                              cart[product].colour,
                                              cart[product].price,
                                              1,
                                              cart[product].imageSrc,
                                              cart[product].imageAlt
                                            );
                                          }}
                                          className="mx-1 bg-red-200"
                                        >
                                          ➖
                                        </button>
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() => {
                                            removeOneItemFromCart(product);
                                          }}
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-6 border-t border-cyan-200 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subTotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6 ">
                          <button
                            onClick={() => {
                              clearCart();
                            }}
                            className="flex items-center justify-center w-full px-6 py-3 mb-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-red-500 to-orange-500 "
                          >
                            Clear Cart 🧹🫧
                          </button>

                          <Link
                            href="/order/checkout"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-red-500 to-orange-500 "
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
