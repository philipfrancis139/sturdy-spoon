import React from "react";

const Mugs = () => {
  return (
    <>
            <div className="">
                {/* Remove py-8 */}
                <div className="container py-8 mx-auto">
                    <div className="flex flex-wrap items-center justify-center lg:justify-between">
                        {/* Card 1 */}
                        <div className="mx-2 mb-8 w-72 lg:mb-0">
                            <div>
                                <img src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png" className="w-full h-44" />
                            </div>
                            <div className="bg-gradient-to-r from-rose-400 to-red-500">
                                <div className="flex items-center justify-between px-4 pt-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bookmark" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                                        </svg>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                        <p className="text-xs text-yellow-500">Featured</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">iphone XS</h2>
                                        <p className="pl-5 text-xs text-gray-600">4 days ago</p>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-600">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                    <div className="flex mt-4">
                                        <div>
                                            <p className="px-2 py-1 text-xs text-gray-600 bg-gray-200">12 months warranty</p>
                                        </div>
                                        <div className="pl-2">
                                            <p className="px-2 py-1 text-xs text-gray-600 bg-gray-200">Complete box</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <h2 className="text-xs font-semibold text-indigo-700">Bay Area, San Francisco</h2>
                                        <h3 className="text-xl font-semibold text-indigo-700">$350</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card 1 Ends */}
                      
                     
                      
                     
                    </div>
              
                </div>
            </div>
        </>
  );
};

export default Mugs;
