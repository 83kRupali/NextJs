import React from 'react'
import styles from './header.module.css'
import Container from './Container'
import Link from 'next/link'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'

function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className="flex items-center">
            <span className="text-pink-500 font-bold text-4xl">
              E-Store<b className="text-black">.</b>
            </span>
          </div>
        </Link>

        {/* Search Bar */}
        <div className={`${styles.searchBar}`}>
          <input
            type="text"
            placeholder="Search for products..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <FiSearch size={18} />
          </button>
        </div>

        {/* Navigation */}
        <NavBar />
      </Container>
    </header>
  )
}

const NavBar = () => {
  return (
    <nav className="flex items-center gap-5">
      {/* Navigation Links */}
      <ul className="flex items-center gap-3 font-semibold">
        <li className={styles.navLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navLink}>
          <Link href="/store">Store</Link>
        </li>
      </ul>

      {/* Icons */}
      <Link href="/cart">
        <div className="relative cursor-pointer">
          <FiShoppingCart size={24} />
          <span
            className={`${styles.cartBadge} absolute top-[-10px] right-[-10px] bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center`}
          >
            0
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Header
