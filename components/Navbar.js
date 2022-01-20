import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-for-max-width">
      <div className="flex items-center justify-center flex-shrink-0 mr-6 bg-for-secondary w-24 h-16 rounded-br-3xl">
        <span className="text-2xl text-white font-Apparel-Display-Black">For.</span>
      </div>
      <div className="flex text-base font-Gilroy-Regular">
        <div className={"mr-20"}>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-for-secondary hover:text-white mr-4 border-b border-b-for-secondary">
            Collections
          </a>
        </div>
        <div className={"mr-20"}>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-for-secondary hover:text-white mr-4">
            Lookbook
          </a>
        </div>
        
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-for-secondary hover:text-white">
          About
        </a>
      </div>
    </nav>
  )
}
