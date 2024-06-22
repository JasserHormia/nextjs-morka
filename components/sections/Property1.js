'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 2000,
	navigation: {
		clickable: true,
		nextEl: ".nav-prev-location",
		prevEl: ".nav-next-location",
	},
	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
	},
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	centeredSlides: true,
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 20,
			centeredSlides: false,
		},

		1520: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
}



import Link from "next/link"

export default function Property1() {
	return (
		<>

			<section className="flat-section-v3 flat-location bg-surface">
				<div className="container-full">
					<div className="box-title text-center wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
						<div className="text-subtitle text-primary">Explore Cities</div>
						<h4 className="mt-4">Our Location For You</h4>
					</div>
					<div className="wow fadeInUpSmall" data-wow-delay=".4s" data-wow-duration="2000ms">
						<div className="swiper tf-sw-location overlay">
							<Swiper {...swiperOptions} className="swiper-wrapper">
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img style={{height : "fit"}} src="/images/location/location-3.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">8 Property</span>
											<h6 className="title">DownTown,Dubai</h6>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img src="/images/location/location-4.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">3 Property</span>
											<h6 className="title">Creek,Dubai</h6>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img src="/images/location/location-5.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">0 Property</span>
											<h6 className="title">Dubai South</h6>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img src="/images/location/location-6.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">3 Property</span>
											<h6 className="title">Palm Jumeirah,Dubai</h6>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img src="/images/location/location-7.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">0 Property</span>
											<h6 className="title">Beach Front,Dubai</h6>
										</div>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href="#" className="box-location">
										<div className="image">
											<img src="/images/location/location-8.jpg" alt="image-location" />
										</div>
										<div className="content">
											<span className="sub-title">0 Property</span>
											<h6 className="title">Marina,Dubai</h6>
										</div>
									</Link>
								</SwiperSlide>
							</Swiper>
							<div className="box-navigation">
								<div className="navigation swiper-nav-next nav-next-location"><span className="icon icon-arr-l" /></div>
								<div className="navigation swiper-nav-prev nav-prev-location"><span className="icon icon-arr-r" /></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
