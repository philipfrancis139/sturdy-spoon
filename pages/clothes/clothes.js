import React from "react";

const Clothes = () => {
  return (
    <>
      <div className="">
        {/* Remove py-8 */}
        <div className="container py-8 mx-auto">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {/* Card 1 */}
            <div className="mx-2 mt-3 mb-8 w-72 lg:mb-0 ">
              <div>
                <img
                alt=''
                  src=""
                  className="w-full h-44"
                />
              </div>
              <div className="bg-gradient-to-r from-rose-400 to-red-500">
                <div className="flex items-center justify-between px-4 pt-4"> 
                  <div className="bg-yellow-200 ">🛒</div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="pl-5 text-xs text-gray-600">4 days ago</p>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    The Apple iPhone XS is available in 3 colors with 64GB
                    memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="px-2 py-1 text-xs text-gray-600 bg-gray-200">
                        12 months warranty
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="px-2 py-1 text-xs text-gray-600 bg-gray-200">
                        Complete box
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-xs font-semibold text-indigo-700">
                      Bay Area, San Francisco
                    </h2>
                    <h3 className="text-xl font-semibold text-indigo-700">
                      $350
                    </h3>
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

export default Clothes;
