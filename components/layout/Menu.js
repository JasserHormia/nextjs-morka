'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
	const pathname = usePathname()
	const [currentMenuItem, setCurrentMenuItem] = useState("")

	useEffect(() => {
		setCurrentMenuItem(pathname)
	}, [pathname])

	const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current" : ""
	const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current" : ""

	return (
		<>
			<ul className="navigation clearfix">
				<li className={` home ${checkParentActive([
				])}`}>
					<Link href="/">Home</Link>
					
				</li>
				<li className={`Properties ${checkParentActive([
					"/sidebar-grid",
					
				])}`}>
					<Link href="/sidebar-grid">Properties</Link>
				</li>
				<li className={`Our services ${checkParentActive([
					
				])}`}>
					<Link href="/our-service">Our Services</Link>
					
				</li>
				<li className={`about us ${checkParentActive([
					
				])}`}>
					<Link href="/about-us">About Us</Link>
				</li>
				<li className={`blog ${checkParentActive([
					
				])}`}>
					<Link href="/blog-grid">Blog</Link>
				</li>
				<li className={`contact us ${checkParentActive([
					
				])}`}>
					<Link href="/contact">Contact Us</Link>
					
				</li>
			</ul>
		</>
	)
}

