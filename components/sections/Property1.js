
import Link from "next/link"

export default function Property1() {
	return (
		<>

			<section className="flat-section flat-property">
				<div className="container">
					<div className="box-title style-1 wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
						<div className="box-left">
							<div className="text-subtitle text-primary">Top Properties</div>
							<h4 className="mt-4">Best Property Value</h4>
						</div>
						<Link href="#" className="tf-btn primary size-1">View All</Link>
					</div>
					<div className="wrap-property">
						<div className="box-left  wow fadeInLeftSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
							<div className="homeya-box lg">
								<div className="archive-top">
									<Link href="/property-details-v1" className="images-group">
										<div className="images-style">
											<img src="/images/home/house-7.jpg" alt="img" />
										</div>
										<div className="top">
											<ul className="d-flex gap-8">
												<li className="flag-tag success style-3">Featured</li>
												<li className="flag-tag style-1 style-3">For Rent</li>
											</ul>
											<ul className="d-flex gap-4">
												<li className="box-icon w-40">
													<span className="icon icon-arrLeftRight" />
												</li>
												<li className="box-icon w-40">
													<span className="icon icon-heart" />
												</li>
												<li className="box-icon w-40">
													<span className="icon icon-eye" />
												</li>
											</ul>
										</div>
										<div className="bottom">
											<span className="flag-tag style-2"> Apartment</span>
										</div>
									</Link>
									<div className="content">
										<h5 className="text-capitalize"><Link href="/property-details-v1" className="link"> Partial Lake View - Semi Furnished</Link></h5>
										<div className="desc"><i className="icon icon-mapPin" /><p>Horizon Tower Dubai, Dubai Marina</p> </div>
										<p className="note">"I truly appreciate the professionalism and in-depth...</p>
										<ul className="meta-list">
											<li className="item">
												<i className="icon icon-bed" />
												<span>4</span>
											</li>
											<li className="item">
												<i className="icon icon-bathtub" />
												<span>4</span>
											</li>
											<li className="item">
												<i className="icon icon-ruler" />
												<span>2,410 SqFT</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="archive-bottom d-flex justify-content-between align-items-center">
									<div className="d-flex gap-8 align-items-center">
										<div className="avatar avt-40 round">
											<img src="/images/avatar/Arooj.webp" alt="avt" />
										</div>
										<span className="body-2">Arooj M. Amin</span>
									</div>
									<div className="d-flex align-items-center">
										<h6>180,000 AED</h6>
										<span className="text-variant-1">/Year</span>
									</div>
								</div>
							</div>
						</div>
						<div className="box-right wow fadeInRightSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
							<div className="homeya-box list-style-1">
								<Link href="/property-details-v1" className="images-group">
									<div className="images-style">
										<img src="/images/home/house-sm-1.jpg" alt="img" />
									</div>
									<div className="top">
										<ul className="d-flex gap-4 flex-wrap flex-column">
											<li className="flag-tag success">Featured</li>
											<li className="flag-tag style-1">For Rent</li>
										</ul>
										<ul className="d-flex gap-4">
											<li className="box-icon w-28">
												<span className="icon icon-arrLeftRight" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-heart" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-eye" />
											</li>
										</ul>
									</div>
									<div className="bottom">
										<span className="flag-tag style-2">Apartment</span>
									</div>
								</Link>
								<div className="content">
									<div className="archive-top">
										<div className="h7 text-capitalize fw-7"><Link href="/property-details-v1" className="link">Furnished | High Floor | Canal View</Link></div>
										<div className="desc"><i className="icon icon-mapPin" /><p>Reva Residences Dubai, Business Bay</p> </div>
										<ul className="meta-list">
											<li className="item">
												<i className="icon icon-bed" />
												<span>1</span>
											</li>
											<li className="item">
												<i className="icon icon-bathtub" />
												<span>1</span>
											</li>
											<li className="item">
												<i className="icon icon-ruler" />
												<span>472 SqFT</span>
											</li>
										</ul>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex gap-8 align-items-center">
											<div className="avatar avt-40 round">
												<img src="/images/avatar/Arooj.webp" alt="avt" />
											</div>
											<span>Arooj</span>
										</div>
										
			
										<div className="d-flex align-items-center">
											
											<div style={{marginLeft: '10px'}} className="h7 fw-7">90,000AED </div>
											<span className="text-variant-1">/Year</span>
										</div>
									</div>
								</div>
							</div>
							<div className="homeya-box list-style-1">
								<Link href="/property-details-v1" className="images-group">
									<div className="images-style">
										<img src="/images/home/house-sm-2.jpg" alt="img" />
									</div>
									<div className="top">
										<ul className="d-flex">
											<li className="flag-tag style-1">For Rent</li>
										</ul>
										<ul className="d-flex gap-4">
											<li className="box-icon w-28">
												<span className="icon icon-arrLeftRight" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-heart" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-eye" />
											</li>
										</ul>
									</div>
									<div className="bottom">
										<span className="flag-tag style-2">Apartment</span>
									</div>
								</Link>
								<div className="content">
									<div className="archive-top">
										<div className="h7 text-capitalize fw-7"><Link href="/property-details-v1" className="link">Fully furnished | Sunset and lagoon View |</Link></div>
										<div className="desc"><i className="icon icon-mapPin" /><p>Palm Jumeirah, Dubai, United Arab Emirates</p> </div>
										<ul className="meta-list">
											<li className="item">
												<i className="icon icon-bed" />
												<span>2</span>
											</li>
											<li className="item">
												<i className="icon icon-bathtub" />
												<span>3</span>
											</li>
											<li className="item">
												<i className="icon icon-ruler" />
												<span>1780 SqFT</span>
											</li>
										</ul>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex gap-8 align-items-center">
											<div className="avatar avt-40 round">
												<img src="/images/avatar/Alex.webp" alt="avt" />
											</div>
											<span>Alexander</span>
										</div>
										<div className="d-flex align-items-center">
											<div style={{marginLeft: '10px'}}  className="h7 fw-7">210,000AED</div>
											<span className="text-variant-1">/Year</span>
										</div>
									</div>
								</div>
							</div>
							<div className="homeya-box list-style-1">
								<Link href="/property-details-v1" className="images-group">
									<div className="images-style">
										<img src="/images/home/house-sm-3.jpg" alt="img" />
									</div>
									<div className="top">
										<ul className="d-flex">
											<li className="flag-tag style-1">For Rent</li>
										</ul>
										<ul className="d-flex gap-4">
											<li className="box-icon w-28">
												<span className="icon icon-arrLeftRight" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-heart" />
											</li>
											<li className="box-icon w-28">
												<span className="icon icon-eye" />
											</li>
										</ul>
									</div>
									<div className="bottom">
										<span className="flag-tag style-2">Apartment</span>
									</div>
								</Link>
								<div className="content">
									<div className="archive-top">
										<div className="h7 text-capitalize fw-7"><Link href="/property-details-v1" className="link">Ready to Move | Fully Furnished | High Floor</Link></div>
										<div className="desc"><i className="icon icon-mapPin" /><p>Sobha Creek Vistas, Sobha Hartland.</p> </div>
										<ul className="meta-list">
											<li className="item">
												<i className="icon icon-bed" />
												<span>1</span>
											</li>
											<li className="item">
												<i className="icon icon-bathtub" />
												<span>1</span>
											</li>
											<li className="item">
												<i className="icon icon-ruler" />
												<span>490.08 SqFT</span>
											</li>
										</ul>
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex gap-8 align-items-center">
											<div className="avatar avt-40 round">
												<img src="/images/avatar/Ousama.webp" alt="avt" />
											</div>
											<span>Osamah</span>
										</div>
										<div className="d-flex align-items-center">
											<div style={{marginLeft: '10px'}} className="h7 fw-7">85,000AED</div>
											<span className="text-variant-1">/Year</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
