'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
export default function MobileMenu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""
	
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className="menu-outer">
				<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
				<ul className="navigation clearfix">
				<li className={` home ${isAccordion  == 1 ? "open" : ""} ${checkParentActive([
					
				])}`}>
					<Link href="/">Home</Link>
					
					<div className="dropdown2-btn" onClick={() => handleAccordion (1)}/>

				</li>
				<li className={`Properties ${isAccordion  == 2 ? "open" : ""} ${checkParentActive([
					
				])}`}>
					<Link href="/sidebar-grid">Properties</Link>
					<div className="dropdown2-btn" onClick={() => handleAccordion (2)}/>
				</li>
				<li className={`Our Services ${isAccordion  == 3 ? "open" : ""} ${checkParentActive([
					
				])}`}>
					<Link href="/our-service">Our Services</Link>
					<div className="dropdown2-btn" onClick={() => handleAccordion (3)}/>
				</li>
				<li className={`aboutus ${isAccordion  == 4 ? "open" : ""} ${checkParentActive([
			
				])}`}>
					<Link href="/about-us">About Us</Link>
					<div className="dropdown2-btn" onClick={() => handleAccordion (4)}/>
				</li>
				<li className={`blog ${isAccordion  == 5 ? "open" : ""} ${checkParentActive([
			
				])}`}>
					<Link href="/blog-grid">Blog</Link>
					<div className="dropdown2-btn" onClick={() => handleAccordion (5)}/>

				</li>
				<li className={`blog ${isAccordion  == 5 ? "open" : ""} ${checkParentActive([
			
		])}`}>
			<Link href="/contact">Contact Us</Link>
			<div className="dropdown2-btn" onClick={() => handleAccordion (5)}/>

		</li>
				<li className={`dropdown2 ${isAccordion  == 6 ? "open" : ""} ${checkParentActive([
					"/dashboard",
					"/my-favorites",
					"/my-invoices",
					"/my-favorites",
					"/reviews",
					"/my-profile",
					"/add-property",
				])}`}>
					<Link href="#">Dashboard</Link>
					<ul style={{ display: `${isAccordion  == 6 ? "block" : "none"}` }}>
						<li className={`${checkCurrentMenuItem("/dashboard")}`}>
							<Link href="/dashboard">Dashboard</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/my-favorites")}`}>
							<Link href="/my-favorites">My Properties</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/my-invoices")}`}>
							<Link href="/my-invoices">My Invoices</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/my-favorites")}`}>
							<Link href="/my-favorites">My Favorites</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/reviews")}`}>
							<Link href="/reviews">Reviews</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/my-profile")}`}>
							<Link href="/my-profile">My Profile</Link>
						</li>
						<li className={`${checkCurrentMenuItem("/add-property")}`}>
							<Link href="/add-property">Add Property</Link>
						</li>
					</ul>
					<div className="dropdown2-btn" onClick={() => handleAccordion (6)}/>
				</li>
			</ul>
				</div>
			</div>
		</>
	)
}
