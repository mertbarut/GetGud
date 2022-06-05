import React from 'react'
import logo from '../img/github.png'

/**
 * Renders the Navigation bar component on screen.
 */
export default function NavBar() {
  return (
    <div>
      <nav
        className="flex items-center justify-left flex-wrap bg-gradient-to-r from-sky-600 to-emerald-500 px-6 py-2"
      >
        <div
          className="flex items-center flex-shrink-0 text-white"
        >
          <img
            width="54"
            height="54"
            src={logo}
            className='rounded-full'
          />
          <div
            className='grid grid-cols-1 grid-rows-2'
          >
            <p
              className="font-semibold text-xl text-slate-100 text-left tracking-tight pl-6"
            >
              GetGud
            </p>
            <p
              className="font-semibold text-sm text-slate-100 text-left tracking-tight pl-6"
            >
              <em>Showcasing Repositories, Made Simpler</em>
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}