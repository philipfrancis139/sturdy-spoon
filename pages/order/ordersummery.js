import React from "react";

const Ordersum3 = () => {
    return (
        <div className="px-4 py-14 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex flex-col justify-start space-y-2 item-start ">
                <h1 className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">Order #13432</h1>
                <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
            </div>
            <div className="flex flex-col items-stretch w-full mt-10 space-y-4 xl:flex-row jusitfy-center xl:space-x-8 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col items-start justify-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col items-start justify-start w-full px-4 py-4 bg-gray-50 md:py-6 md:p-6 xl:p-8">
                        <p className="text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5">Customer’s Cart</p>
                        <div className="flex flex-col items-start justify-start w-full mt-4 md:mt-6 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
                            <div className="w-full pb-4 md:pb-8 md:w-40">
                                <img className="hidden w-full md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                            </div>
                            <div className="flex flex-col items-start justify-between w-full pb-8 space-y-4 border-b border-gray-200 md:flex-row md:space-y-0">
                                <div className="flex flex-col items-start justify-start w-full space-y-8">
                                    <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">Premium Quaility Dress</h3>
                                    <div className="flex flex-col items-start justify-start space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between w-full space-x-8">
                                    <p className="text-base leading-6 xl:text-lg">
                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                    </p>
                                    <p className="text-base leading-6 text-gray-800 xl:text-lg">01</p>
                                    <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">$36.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full mt-6 space-y-4 md:mt-0 md:flex-row md:items-center md:space-x-6 xl:space-x-8 ">
                            <div className="w-full md:w-40">
                                <img className="hidden w-full md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
                            </div>
                            <div className="flex flex-col items-start justify-between w-full space-y-4  md:flex-row md:space-y-0">
                                <div className="flex flex-col items-start justify-start w-full space-y-8">
                                    <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl">High Quaility Italic Dress</h3>
                                    <div className="flex flex-col items-start justify-start space-y-2">
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Size: </span> Small
                                        </p>
                                        <p className="text-sm leading-none text-gray-800">
                                            <span className="text-gray-300">Color: </span> Light Blue
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between w-full space-x-8">
                                    <p className="text-base leading-6 xl:text-lg">
                                        $20.00 <span className="text-red-300 line-through"> $30.00</span>
                                    </p>
                                    <p className="text-base leading-6 text-gray-800 xl:text-lg">01</p>
                                    <p className="text-base font-semibold leading-6 text-gray-800 xl:text-lg">$20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col w-full px-4 py-6 space-y-6 md:p-6 xl:p-8 bg-gray-50 ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex flex-col items-center justify-center w-full pb-4 space-y-4 border-b border-gray-200">
                                <div className="flex justify-between w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        Discount <span className="p-1 text-xs font-medium leading-3 text-gray-800 bg-gray-200">STUDENT</span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">$36.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full px-4 py-6 space-y-6 md:p-6 xl:p-8 bg-gray-50 ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex items-start justify-between w-full">
                                <div className="flex items-center justify-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col items-center justify-start">
                                        <p className="text-lg font-semibold leading-6 text-gray-800">
                                            DPD Delivery
                                            <br />
                                            <span className="font-normal">Delivery with 24 Hours</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="py-5 text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-96 md:w-full">View Carrier Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full px-4 py-6 bg-gray-50 xl:w-96 md:items-start md:p-6 xl:p-8 ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col items-stretch justify-start w-full h-full md:flex-row xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col items-start justify-start flex-shrink-0">
                            <div className="flex items-center justify-center w-full py-8 space-x-4 border-b border-gray-200 md:justify-start">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                <div className="flex flex-col items-start justify-start space-y-2 ">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">David Kent</p>
                                    <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full py-4 space-x-4 border-b border-gray-200 md:justify-start">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-sm leading-5 text-gray-800 cursor-pointer">david89@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch justify-between w-full mt-6 xl:h-full md:mt-0">
                            <div className="flex flex-col items-center justify-center space-y-4 md:justify-start xl:flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 xl:space-y-12 md:space-y-0 md:flex-row md:items-start ">
                                <div className="flex flex-col items-center justify-center space-y-4 md:justify-start md:items-start xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center text-gray-800 md:text-left">Shipping Address</p>
                                    <p className="w-48 text-sm leading-5 text-center text-gray-600 lg:w-full xl:w-48 md:text-left">180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div className="flex flex-col items-center justify-center space-y-4 md:justify-start md:items-start ">
                                    <p className="text-base font-semibold leading-4 text-center text-gray-800 md:text-left">Billing Address</p>
                                    <p className="w-48 text-sm leading-5 text-center text-gray-600 lg:w-full xl:w-48 md:text-left">180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full md:justify-start md:items-start">
                                <button className="py-5 mt-6 text-base font-medium leading-4 text-gray-800 border border-gray-800 md:mt-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-96 2xl:w-full">Edit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ordersum3;
