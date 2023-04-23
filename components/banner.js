import React from "react";

const Banner6 = () => {
    return (
        <div className="container px-4 mx-auto py-9 md:py-12 md:px-6">
            <div className="flex flex-col justify-center space-y-4 items-strech md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col justify-between px-6 py-6 md:flex-row items-strech bg-gray-50 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Best Deal</h1>
                        <p className="mt-2 text-base text-gray-800 lg:text-xl">
                            Save upto <span className="font-bold">50%</span>
                        </p>
                    </div>
                    <div className="flex justify-center mt-8 md:w-1/2 md:mt-0 md:justify-end">
                        <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
                    </div>
                </div>
                <div className="relative flex flex-col justify-center px-6 py-6 md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 md:py-0 md:px-4 lg:px-6">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Game Console</h1>
                        <p className="text-base text-gray-800 lg:text-xl">
                            Save Upto <span className="font-bold">30%</span>
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner6;
