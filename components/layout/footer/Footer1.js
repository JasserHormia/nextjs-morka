import { Colors } from "chart.js"
import Link from "next/link"

export default function Footer1() {
	return (
		<>

			<footer className="footer">
				<div className="top-footer">
					<div className="container">
						<div className="content-footer-top">
							<div className="footer-logo">
								<img src="/images/logo/logofooter.svg" alt="logo-footer" width={174} height={44} />
							</div>
							<div className="wd-social">
								<span>Follow Us:</span>
								<ul className="list-social d-flex align-items-center">
									<li><Link target="_blank" href="https://www.facebook.com/profile.php?id=61558802877905" className="box-icon w-40 social"><i className="icon icon-facebook" /></Link></li>
									<li><Link target="_blank" href="https://www.linkedin.com/company/morka-real-estate/" className="box-icon w-40 social"><i className="icon icon-linkedin" /></Link></li>
									{/* <li><Link href="#" className="box-icon w-40 social"><i className="icon icon-twitter" /></Link></li> */}
									{/* <li><Link href="#" className="box-icon w-40 social"><i className="icon icon-location" /></Link></li> */}
									<li  ><Link target="_blank" href="https://www.instagram.com/morka.realestate/" className="box-icon w-40 social"><i className="icon icon-instagram"  /></Link></li>
									{/* <li><Link href="#" className="box-icon w-40 social"><i className="icon icon-youtube" /></Link></li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="inner-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="footer-cl-1">
									<p className="text-variant-2">Specializes in providing high-class tours for those in need. Contact Us</p>
									<ul className="mt-12">
										<li className="mt-12 d-flex align-items-center gap-8">
											<i className="icon icon-mapPinLine fs-20 text-variant-2" />
											<p className="text-white">Office 2504-3, Prism Tower, Business Bay, Dubai, PO Box 118962</p>
										</li>
										<li className="mt-12 d-flex align-items-center gap-8">
											<i className="icon icon-phone2 fs-20 text-variant-2" />
											<Link href="/tel:1-333-345-6868" className="text-white caption-1">+971 44324415</Link>
										</li>
										<li className="mt-12 d-flex align-items-center gap-8">
											<i className="icon icon-mail fs-20 text-variant-2" />
											<p className="text-white">Info@morkarealestate.com</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-6">
								<div className="footer-cl-2">
									<div className="fw-7 text-white">Categories</div>
									<ul className="mt-10 navigation-menu-footer">
										<li> <Link href="/pricing" className="caption-1 text-variant-2">Pricing Plans</Link> </li>
										<li> <Link href="/our-service" className="caption-1 text-variant-2">Our Services</Link> </li>
										<li> <Link href="/about-us" className="caption-1 text-variant-2">About Us</Link> </li>
										<li> <Link href="/contact" className="caption-1 text-variant-2">Contact Us</Link> </li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6">
								<div className="footer-cl-3">
									<div className="fw-7 text-white">Our Company</div>
									<ul className="mt-10 navigation-menu-footer">
										<li> <Link href="/topmap-list" className="caption-1 text-variant-2">Property For Sale</Link> </li>
										<li> <Link href="/topmap-grid" className="caption-1 text-variant-2">Property For Rent</Link> </li>
										<li> <Link href="/topmap-grid" className="caption-1 text-variant-2">Property For Buy</Link> </li>
										<li> <Link href="/topmap-grid" className="caption-1 text-variant-2">Our Agents</Link> </li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="footer-cl-4">
									<div className="fw-7 text-white">
										Newsletter
									</div>
									<p className="mt-12 text-variant-2">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
									<form action="#" id="subscribe-form" className="mt-12">
										<span className="icon-left icon-mail" />
										<input type="email" placeholder="Your email address" required id="subscribe-email" />
										<button type="submit" id="subscribe-button"><i className="icon icon-send" /></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-footer">
					<div className="container">
						<div className="content-footer-bottom">
							<div className="copyright">©{new Date().getFullYear()} Morka. All Rights Reserved | Developed By <a  href="https://haramia.site/" target="_blank" style={{ color: 'white'}}>Jasser Haramia</a></div>
							<ul className="menu-bottom">
								<li><Link href="/our-service">Terms Of Services</Link> </li>
								<li><Link href="/pricing">Privacy Policy</Link> </li>
								<li><Link href="/contact">Cookie Policy</Link> </li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
