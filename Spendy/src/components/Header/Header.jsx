import React from 'react'


export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
  <nav className="container mx-auto px-4 lg:px-6 py-3">
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        Spendy
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 focus:outline-none"
        >
          Log in
        </a>
        <a
          href="#"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 focus:outline-none"
        >
          Signup
        </a>
      </div>
    </div>
  </nav>
</header>


  );
}
