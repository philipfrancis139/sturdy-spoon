import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // cart functionality
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [wishlist, setWishlist] = useState({});
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear("cart");
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i += 1) {
      subt += myCart[keys[i]].price * myCart[keys[i]].quantity;
    }
    setSubTotal(subt);
  };
  const addToCart = (
    id,
    name,
    href,
    colour,
    price,
    quantity,
    imageSrc,
    imageAlt
  ) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].quantity = cart[id].quantity + quantity;
    } else {
      newCart[id] = {
        name,
        href,
        colour,
        price,
        quantity: 1,
        imageSrc,
        imageAlt,
      };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("cart cleared!");
  };
  const removeFromCart = (
    id,
    name,
    href,
    colour,
    price,
    quantity,
    imageSrc,
    imageAlt
  ) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].quantity = cart[id].quantity - quantity;
    }
    if (newCart[id]["quantity"] <= 0) {
      delete newCart[id];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeOneItemFromCart = (
    id,
    name,
    href,
    colour,
    price,
    quantity,
    imageSrc,
    imageAlt
  ) => {
    let newCart = cart;
    delete newCart[id];
    setCart(newCart);
    saveCart(newCart);
  };
  // wishlist functionality
  useEffect(() => {
    try {
      if (localStorage.getItem("wishlist")) {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")));
        saveWishlist(JSON.parse(localStorage.getItem("wishlist")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear("wishlist");
    }
  }, []);

  const saveWishlist = (myWishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(myWishlist));
    let keys = Object.keys(myWishlist);
  };
  const addToWishlist = (
    id,
    name,
    href,
    colour,
    price,
    quantity,
    imageSrc,
    imageAlt
  ) => {
    let newWishlist = wishlist;
    if (id in wishlist) {
      //i have to do something
      newWishlist[id].quantity =1
    } else {
      newWishlist[id] = {
        name,
        href,
        colour,
        price,
        quantity: 1,
        imageSrc,
        imageAlt,
      };
    }
    setWishlist(newWishlist);
    saveWishlist(newWishlist);
  };

  const clearWishlist = () => {
    setWishlist({});
    setWishlist({});
    console.log("Wishlist cleared!");
  };
  const removeOneItemFromWishlist = (
    id,
    name,
    href,
    colour,
    price,
    quantity,
    imageSrc,
    imageAlt
  ) => {
    let newWishlist = wishlist;
    delete newWishlist[id];
    setWishlist(newWishlist);
    saveWishlist(newWishlist);
  };
  return (
    <>
      <Navigation
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        removeOneItemFromCart={removeOneItemFromCart}
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        clearWishlist={clearWishlist}
        removeOneItemFromWishlist={removeOneItemFromWishlist}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        removeOneItemFromCart={removeOneItemFromCart}
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        clearWishlist={clearWishlist}
        removeOneItemFromWishlist={removeOneItemFromWishlist}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
