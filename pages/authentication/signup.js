import Link from "next/link"

 const Signup  = () => {
  return ( 
      <main className="flex w-full">
          <div className="relative items-center justify-center flex-1 hidden h-screen bg-white lg:flex">
              <div className="relative z-10 w-full max-w-md">
                  <img src="https://floatui.com/logo-dark.svg" alt='' width={150} />
                  <div className="mt-16 space-y-3 ">
                      <h3 className="text-3xl font-bold text-white">Start growing your business quickly</h3>
                      <p className="text-gray-300">
                          Create an account and get access to all features for 30-days, No credit card required.
                      </p>
                      <div className="flex items-center -space-x-2 overflow-hidden">
                          <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                          <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 border-2 border-white rounded-full" />
                          <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 border-2 border-white rounded-full" />
                          <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 border-2 border-white rounded-full" />
                          <p className="text-sm font-medium text-gray-400 translate-x-5">
                              Join 5.000+ users
                          </p>
                      </div>
                  </div>
              </div>
              <div
                  className="absolute inset-0 my-auto h-[500px]"
                  style={{
                      background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                  }}
              >

              </div>
          </div>
          <div className="flex items-center justify-center flex-1 h-screen">
              <div className="w-full max-w-md px-4 space-y-8 text-gray-600 bg-white sm:px-0">
                  <div className="">
                      <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" />
                      <div className="mt-5 space-y-2">
                          <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Sign up</h3>
                          <p className="">Already have an account? <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</Link></p>
                      </div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-3">
                      <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_17_40)">
                                  <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                  <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                  <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                  <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                              </g>
                              <defs>
                                  <clipPath id="clip0_17_40">
                                      <rect width="48" height="48" fill="white" />
                                  </clipPath>
                              </defs>
                          </svg>
                      </button>
                      <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                          <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937" fill="#1DA1F2" />
                          </svg>
                      </button>
                      <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                      <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1543 0C4.6293 0 0.154298 4.475 0.154298 10C0.153164 12.0993 0.813112 14.1456 2.04051 15.8487C3.26792 17.5517 5.00044 18.8251 6.9923 19.488C7.4923 19.575 7.6793 19.275 7.6793 19.012C7.6793 18.775 7.6663 17.988 7.6663 17.15C5.1543 17.613 4.5043 16.538 4.3043 15.975C4.1913 15.687 3.7043 14.8 3.2793 14.562C2.9293 14.375 2.4293 13.912 3.2663 13.9C4.0543 13.887 4.6163 14.625 4.8043 14.925C5.7043 16.437 7.1423 16.012 7.7163 15.75C7.8043 15.1 8.0663 14.663 8.3543 14.413C6.1293 14.163 3.8043 13.3 3.8043 9.475C3.8043 8.387 4.1913 7.488 4.8293 6.787C4.7293 6.537 4.3793 5.512 4.9293 4.137C4.9293 4.137 5.7663 3.875 7.6793 5.163C8.49336 4.93706 9.33447 4.82334 10.1793 4.825C11.0293 4.825 11.8793 4.937 12.6793 5.162C14.5913 3.862 15.4293 4.138 15.4293 4.138C15.9793 5.513 15.6293 6.538 15.5293 6.788C16.1663 7.488 16.5543 8.375 16.5543 9.475C16.5543 13.313 14.2173 14.163 11.9923 14.413C12.3543 14.725 12.6673 15.325 12.6673 16.263C12.6673 17.6 12.6543 18.675 12.6543 19.013C12.6543 19.275 12.8423 19.587 13.3423 19.487C15.3273 18.8168 17.0522 17.541 18.2742 15.8392C19.4962 14.1373 20.1537 12.0951 20.1543 10C20.1543 4.475 15.6793 0 10.1543 0Z"
                                fill="#333333"
                            />
                        </svg>
                      </button>
                  </div>
                  <div className="flex items-center justify-between w-full py-0.5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                            OR
                        </p>
                        <hr className="w-full bg-gray-400 " />
                    </div>
                  <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-5"
                  >
                      <div>
                          <label className="font-medium">
                              Name
                          </label>
                          <input
                              type="text"
                              required
                              className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-indigo-600"
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Email
                          </label>
                          <input
                              type="email"
                              required
                              className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-indigo-600"
                          />
                      </div>
                      <div>
                          <label className="font-medium">
                              Password
                          </label>
                          <div className="relative flex">
                          <input
                              type="password"
                              required
                              className="w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-indigo-600"
                          />
                           <div className="absolute mt-5 mr-3 cursor-pointer right-1">
                                <svg
                                    width={20}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                        fill="#71717A"
                                    />
                                </svg>
                                </div>
                                </div>
                      </div>
                      <button
                          className="w-full px-4 py-2 font-medium text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-600"
                      >
                          Create account
                      </button>
                  </form>
              </div>
          </div>
      </main>
  )
}

export default Signup