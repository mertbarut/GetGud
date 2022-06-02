import React from 'react'

export default function SideBar() {
  return (
    <div
      className="w-full md:w-64 md:h-screen shadow-md bg-white absolute"
    >
      <div className="text-center w-full">
        <p className="my-4 text-sm text-gray-700">
          <input
            disabled={true}
            placeholder="Type Username (disabled)"
            className='text-center border-2 rounded-md w-48'
          />
        </p>
      </div>
      <hr className="my-2" />
      <div
        className="grid grid-flow-row justify-center pt-4 pb-2 px-6 "
      >
        <div
          className="flex items-center text-left md:text-center md:flex-col"
        >
          <a>
            <div
              className="shrink-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                className="rounded-full w-24 md:w-64 border-2"
                alt="Avatar"
              />
            </div>
          </a>
          <div
            className="grow my-2 ml-2 md:my-4"
          >
            <p
              className="text-sm md:text-lg font-semibold text-blue-600"
            >
              Full Name
            </p>
            <p
              className="text-xs md:text-md font-light text-sky-500"
            >
              username
            </p>
          </div>
        </div>
        <p
          className="text-sm text-center md:text-md font-md text-slate-900 my-4"
        >
          Description
        </p>
        <p
          className="flex flex-row items-center justify-center text-sm md:text-md font-md text-slate-900 my-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 md:mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
            X followers · Y following
        </p>
      </div>
      <hr className="my-2" />
      <ul className="relative px-1">
        <li className="relative">
          <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
            </svg>
            <span>See on GitHub</span>
          </a>
        </li>
      </ul>
      <hr className="my-2" />
    </div>
  )
}
