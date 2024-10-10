'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	slidesPerView: 2,
	loop: true,
	spaceBetween: 30,
	speed: 3000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		450: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},

		992: {
			slidesPerView: 5,
			spaceBetween: 80,
		},
	},
}

export default function Partner() {
	return (
		<>

			<section className="flat-section-v4 flat-partner">
				<div className="container">
					<div className="wrap-partner swiper tf-sw-partner">
						<Swiper {...swiperOptions} className="swiper-wrapper">
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-1.jpg" alt="images" width={150} height={35} viewBox="0 0 182 35" fill="none" />
						                  <defs>
											<clippath id="clip0_1_17747">
												<rect width="181.333" height={34} fill="white" transform="translate(0 0.5)" />
											</clippath>
										</defs>
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-2.jpg" alt="images" width={150} height={45} viewBox="0 0 184 45" fill="none" />
										
										<defs>
											<clippath id="clip0_1_17753">
												<rect width="183.293" height={45} fill="white" transform="translate(0.5)" />
											</clippath>
										</defs>
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img  src="/images/slider/slider-2-10.jpg" alt="images" width={150} height={30} viewBox="0 0 151 39" fill="none" />
										
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-3.jpg" alt="images" width={150} height={30} viewBox="0 0 168 43" fill="none" />
										
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-4.jpg" alt="images" width={150} height={30} viewBox="0 0 161 39" fill="none" />
										
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-5.jpg" alt="images" width={150} height={30} viewBox="0 0 182 35" fill="none" />
										
										<defs>
											<clippath id="clip0_1_17747">
												<rect width="181.333" height={30} fill="white" transform="translate(0 0.5)" />
											</clippath>
										</defs>
								
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-6.jpg" alt="images" width={150} height={30} viewBox="0 0 184 45" fill="none" />
										
										<defs>
											<clippath id="clip0_1_17753">
												<rect width="183.293" height={30} fill="white" transform="translate(0.5)" />
											</clippath>
										</defs>
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-7.jpg" alt="images" width={150} height={30} viewBox="0 0 151 39" fill="none" />
										
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-9.jpg" alt="images" width={150} height={30} viewBox="0 0 168 43" fill="none" />
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-10.jpg" alt="images" width={150} height={30} viewBox="0 0 161 39" fill="none" />
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-11.jpg" alt="images" width={150} height={30} viewBox="0 0 161 39" fill="none" />
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-12.jpg" alt="images" width={150} height={30} viewBox="0 0 161 39" fill="none" />
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-13.jpg" alt="images" width={150} height={30} viewBox="0 0 161 39" fill="none" />
									
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
