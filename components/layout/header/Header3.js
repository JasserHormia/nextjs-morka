'use client'
import Link from "next/link"
import { useState } from "react"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { SignInButton, UserButton } from "@clerk/nextjs"

export default function Header3({ scroll, isSidebar, handleSidebar, isMobileMenu, handleMobileMenu }) {
	// const {user , isSignedIn}=useUser();
	const [isToggled, setToggled] = useState(false)
	const handleToggle = () => setToggled(!isToggled)


    console.log(btoa("FjhtK.hBJ8cKhU1A9Z6wTOEx2EuKGMEXk7pOpVTP"))
	return (
		<>

			<header className="main-header fixed-header header-dashboard">
				{/* Header Lower */}
				<div className="header-lower">
					<div className="row">
						<div className="col-lg-12">
							<div className="inner-container d-flex justify-content-between align-items-center">
								{/* Logo Box */}
								<div className="logo-box d-flex">
									<div className="logo"><Link href="/"><img src="/images/logo/logo.svg" alt="logo" width={174} height={44} /></Link></div>
									<div className="button-show-hide" onClick={handleSidebar}>
										<span className="icon icon-categories" />
									</div>
								</div>
								<div className="nav-outer">
									{/* Main Menu */}
									<nav className="main-menu show navbar-expand-md">
										<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
											<Menu />
										</div>
									</nav>
									{/* Main Menu End*/}
								</div>
								<div className="header-account">
									{/* {
										isSignedIn? <UserButton/> 
										: 
										<SignInButton></SignInButton>
									} */}
										<p className="name">Jasser Jasser<span className="icon icon-arr-down" /></p>
								
									<div className={`dropdown-menu  ${isToggled ? "show" : ""}`} style={{ position: 'absolute', inset: '0px auto auto 0px', margin: 0, transform: 'translate(1494px, 62px)' }}>
										<Link className="dropdown-item" href="/my-favorites">My Properties</Link>
										<Link className="dropdown-item" href="/my-invoices">My Invoices</Link>
										<Link className="dropdown-item" href="/my-favorites">My Favorites</Link>
										<Link className="dropdown-item" href="/reviews">Reviews</Link>
										<Link className="dropdown-item" href="/my-profile">My Profile</Link>
										<Link className="dropdown-item" href="/add-property">Add Property</Link>
										<Link className="dropdown-item" href="/">Logout</Link>
									</div>

									<div className="flat-bt-top">
										<Link className="tf-btn primary" href="/add-property">Submit Property</Link>
									</div>
								</div>
								<div className="mobile-nav-toggler mobile-button" onClick={handleMobileMenu}><span /></div>
							</div>
						</div>
					</div>
				</div>
				{/* End Header Lower */}
				{/* Mobile Menu  */}
				<div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-cancel-1" /></div>
				<div className="mobile-menu">
					<div className="menu-backdrop" onClick={handleMobileMenu} />
					<nav className="menu-box">
						<div className="nav-logo"><Link href="/"><img src="/images/logo/logo.svg" alt="nav-logo" width={174} height={44} /></Link></div>
						<div className="bottom-canvas">
							<MobileMenu />
							<div className="button-mobi-sell">
								<Link className="tf-btn primary" href="/add-property">Submit Property</Link>
							</div>
							<div className="mobi-icon-box">
								<div className="box d-flex align-items-center">
									<span className="icon icon-phone2" />
									<div>+971 44324415</div>
								</div>
								<div className="box d-flex align-items-center">
									<span className="icon icon-mail" />
									<div>Info@morkarealestate.com</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				{/* End Mobile Menu */}
			</header>

		</>
	)
}



