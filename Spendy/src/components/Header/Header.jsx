import React from 'react'


export default function Header() {
  return (
      <header className="shadow sticky z-50 top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <div to="/" className="flex items-center">
                    <div>Spendy</div>

                  </div>
                  <div className="flex items-center lg:order-2">
                      <div
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </div>
                      <div
                          to="#"
                          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Signup
                      </div>
                  </div>

              </div>
          </nav>
      </header>
  );
}
