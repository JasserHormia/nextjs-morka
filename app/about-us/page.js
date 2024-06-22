"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".nav-prev-testimonial",
    prevEl: ".nav-next-testimonial",
  },
  pagination: {
    el: ".sw-pagination-testimonial",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};

const swiperOptions2 = {
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
};
export default function AboutUs() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <section className="flat-section flat-banner-about">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <h3>
                    Welcome To The <br /> Morka Real Estate
                  </h3>
                </div>
                <div className="col-md-7 hover-btn-view">
                  <p className="body-2 text-variant-1">
                    Welcome to Morka, where we turn houses into homes and dreams
                    into reality. At Morka, we understand that a home is more
                    than just a physical space; it's a place where memories are
                    created, families grow, and life unfolds.{" "}
                  </p>
                  <Link href="#" className="btn-view style-1">
                    <span className="text">Learn More</span>{" "}
                    <span className="icon icon-arrow-right2" />{" "}
                  </Link>
                </div>
              </div>
              <div className="banner-video">
                <video
                  style={{ maxWidth: "100%", width: "100%", margin: "0 auto" , borderRadius: "20px"}}
                  Autoplay=""
                  playsInline
                  loop
                  muted
                  controls
                  alt="All the devices"
                  src="https://dl.dropboxusercontent.com/scl/fi/jjsqamlralh4dvwcpv4mo/Sequence-2.mp4?rlkey=p9rbw6m669m5zvvd5qkootjar"
                />
              </div>
            </div>
          </section>
          {/* end banner video */}
          {/* Service */}
          <section className="flat-section-v3 flat-service-v2 bg-surface">
            <div className="container">
              <div className="row wrap-service-v2">
                <div className="col-lg-6">
                  <div className="box-left">
                    <div className="box-title">
                      <div className="text-subtitle text-primary">
                        Why Choose Us
                      </div>
                      <h4 className="mt-4">
                        Discover What Sets Our Real Estate Expertise Apart
                      </h4>
                    </div>
                    <p>
                      At Morka, our unwavering commitment lies in crafting
                      unparalleled real estate journeys. Our seasoned
                      professionals, armed with extensive market knowledge, walk
                      alongside you through every phase of your property
                      endeavor. We prioritize understanding your unique
                      aspirations, tailoring our expertise to match your vision.
                    </p>
                    <ul className="list-view">
                      <li>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15.9947C12.4183 15.9947 16 12.4154 16 8C16 3.58462 12.4183 0.00524902 8 0.00524902C3.58172 0.00524902 0 3.58462 0 8C0 12.4154 3.58172 15.9947 8 15.9947Z"
                            fill="#198754"
                          />
                          <path
                            d="M7.35849 12.2525L3.57599 9.30575L4.65149 7.9255L6.97424 9.735L10.8077 4.20325L12.2462 5.19975L7.35849 12.2525Z"
                            fill="white"
                          />
                        </svg>
                        Transparent Partnerships
                      </li>
                      <li>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15.9947C12.4183 15.9947 16 12.4154 16 8C16 3.58462 12.4183 0.00524902 8 0.00524902C3.58172 0.00524902 0 3.58462 0 8C0 12.4154 3.58172 15.9947 8 15.9947Z"
                            fill="#198754"
                          />
                          <path
                            d="M7.35849 12.2525L3.57599 9.30575L4.65149 7.9255L6.97424 9.735L10.8077 4.20325L12.2462 5.19975L7.35849 12.2525Z"
                            fill="white"
                          />
                        </svg>
                        Proven Expertise
                      </li>
                      <li>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15.9947C12.4183 15.9947 16 12.4154 16 8C16 3.58462 12.4183 0.00524902 8 0.00524902C3.58172 0.00524902 0 3.58462 0 8C0 12.4154 3.58172 15.9947 8 15.9947Z"
                            fill="#198754"
                          />
                          <path
                            d="M7.35849 12.2525L3.57599 9.30575L4.65149 7.9255L6.97424 9.735L10.8077 4.20325L12.2462 5.19975L7.35849 12.2525Z"
                            fill="white"
                          />
                        </svg>
                        Customized Solutions
                      </li>
                      <li>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 15.9947C12.4183 15.9947 16 12.4154 16 8C16 3.58462 12.4183 0.00524902 8 0.00524902C3.58172 0.00524902 0 3.58462 0 8C0 12.4154 3.58172 15.9947 8 15.9947Z"
                            fill="#198754"
                          />
                          <path
                            d="M7.35849 12.2525L3.57599 9.30575L4.65149 7.9255L6.97424 9.735L10.8077 4.20325L12.2462 5.19975L7.35849 12.2525Z"
                            fill="white"
                          />
                        </svg>
                        Local Area Knowledge
                      </li>
                    </ul>
                    <Link href="/contact" className="btn-view">
                      <span className="text">Contact Us</span>{" "}
                      <span className="icon icon-arrow-right2" />{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-right">
                    <div className="box-service style-1 hover-btn-view">
                      <div className="icon-box">
                        <span className="icon icon-buy-home" />
                      </div>
                      <div className="content">
                        <h6 className="title">Buy A New Home</h6>
                        <p className="description">
                          Explore diverse properties and expert guidance for a
                          seamless buying experience.
                        </p>
                        <Link href="#" className="btn-view style-1">
                          <span className="text">Learn More</span>{" "}
                          <span className="icon icon-arrow-right2" />{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="box-service style-1 hover-btn-view">
                      <div className="icon-box">
                        <span className="icon icon-rent-home" />
                      </div>
                      <div className="content">
                        <h6 className="title">Rent a home</h6>
                        <p className="description">
                          Explore a diverse variety of listings tailored
                          precisely to suit your unique lifestyle needs.
                        </p>
                        <Link href="#" className="btn-view style-1">
                          <span className="text">Learn More</span>{" "}
                          <span className="icon icon-arrow-right2" />{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="box-service style-1 hover-btn-view">
                      <div className="icon-box">
                        <span className="icon icon-sale-home" />
                      </div>
                      <div className="content">
                        <h6 className="title">Sell a home</h6>
                        <p className="description">
                          Showcasing your property's best features for a
                          successful sale.
                        </p>
                        <Link href="#" className="btn-view style-1">
                          <span className="text">Learn More</span>{" "}
                          <span className="icon icon-arrow-right2" />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Service */}
          {/* Testimonial */}
          <section className="flat-section flat-testimonial-v4">
            <div className="container">
              <div className="box-title text-center">
                <div className="text-subtitle text-primary">
                  Our Testimonials
                </div>
                <h4 className="mt-4">What’s people say’s</h4>
              </div>
              <div className="swiper tf-sw-testimonial">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="box-tes-item style-2">
                      <ul className="list-star">
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                      </ul>
                      <p className="note body-1">
                        "I truly appreciate the professionalism and in-depth
                        knowledge of the brokerage team. They not only helped me
                        find the perfect home but also assisted with legal and
                        financial aspects, making me feel confident and secure
                        in my decision."
                      </p>
                      <div className="box-avt d-flex align-items-center gap-12">
                        <div className="avatar avt-60 round">
                          <img src="/images/avatar/avt-7.jpg" alt="avatar" />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7">Liam Anderson</div>
                          <p className="text-variant-1 mt-4">CEO Digital</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box-tes-item style-2">
                      <ul className="list-star">
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                      </ul>
                      <p className="note body-1">
                        "My experience with property management services has
                        exceeded expectations. They efficiently manage
                        properties with a professional and attentive approach in
                        every situation. I feel reassured that any issue will be
                        resolved promptly and effectively."
                      </p>
                      <div className="box-avt d-flex align-items-center gap-12">
                        <div className="avatar avt-60 round">
                          <img src="/images/avatar/avt-5.jpg" alt="avatar" />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7">Adam Will</div>
                          <p className="text-variant-1 mt-4">CEO Agency</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box-tes-item style-2">
                      <ul className="list-star">
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                      </ul>
                      <p className="note body-1">
                        "My experience with property management services has
                        exceeded expectations. They efficiently manage
                        properties with a professional and attentive approach in
                        every situation. I feel reassured that any issue will be
                        resolved promptly and effectively."
                      </p>
                      <div className="box-avt d-flex align-items-center gap-12">
                        <div className="avatar avt-60 round">
                          <img src="/images/avatar/avt-5.jpg" alt="avatar" />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7">Adam Will</div>
                          <p className="text-variant-1 mt-4">CEO Agency</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box-tes-item style-2">
                      <ul className="list-star">
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                        <li className="icon icon-star" />
                      </ul>
                      <p className="note body-1">
                        "I truly appreciate the professionalism and in-depth
                        knowledge of the brokerage team. They not only helped me
                        find the perfect home but also assisted with legal and
                        financial aspects, making me feel confident and secure
                        in my decision."
                      </p>
                      <div className="box-avt d-flex align-items-center gap-12">
                        <div className="avatar avt-60 round">
                          <img src="/images/avatar/avt-7.jpg" alt="avatar" />
                        </div>
                        <div className="info">
                          <div className="h7 fw-7">Liam Anderson</div>
                          <p className="text-variant-1 mt-4">CEO Digital</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="sw-pagination sw-pagination-testimonial" />
              </div>
              <div className="wrap-partner swiper tf-sw-partner">
                <Swiper {...swiperOptions2} className="swiper-wrapper">
                <SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-1.jpg" alt="images" width={150} height={35} viewBox="0 0 182 35" fill="none" />
						                  <defs>
											<clipPath id="clip0_1_17747">
												<rect width="181.333" height={34} fill="white" transform="translate(0 0.5)" />
											</clipPath>
										</defs>
									
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-2.jpg" alt="images" width={150} height={45} viewBox="0 0 184 45" fill="none" />
										
										<defs>
											<clipPath id="clip0_1_17753">
												<rect width="183.293" height={45} fill="white" transform="translate(0.5)" />
											</clipPath>
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
											<clipPath id="clip0_1_17747">
												<rect width="181.333" height={30} fill="white" transform="translate(0 0.5)" />
											</clipPath>
										</defs>
								
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="partner-item">
									<img src="/images/slider/slider-2-6.jpg" alt="images" width={150} height={30} viewBox="0 0 184 45" fill="none" />
										
										<defs>
											<clipPath id="clip0_1_17753">
												<rect width="183.293" height={30} fill="white" transform="translate(0.5)" />
											</clipPath>
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
          {/* End Testimonial */}
          {/* Contact */}
          <section className="flat-section-v3 flat-slider-contact">
            <div className="container">
              <div className="row content-wrap">
                <div className="col-lg-7">
                  <div className="content-left">
                    <div className="box-title">
                      <div className="text-subtitle text-white">Contact Us</div>
                      <h4 className="mt-4 fw-6 text-white">
                        We're always eager to hear from you!
                      </h4>
                    </div>
                    <p className="body-2 text-white">
                      Sed ullamcorper nulla egestas at. Aenean eget tortor nec
                      elit sagittis molestie. Pellentesque tempus massa in.r
                      nulla egestas at. Aenean eget tortor nec elit sagittis
                      mole
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form action="#" className="box-contact-v2">
                    <div className="box">
                      <label htmlFor="name" className="label">
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="box">
                      <label htmlFor="email" className="label">
                        Email:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="box">
                      <label htmlFor="message" className="label">
                        Message:
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        cols={30}
                        rows={10}
                        placeholder="Write comment"
                        defaultValue={""}
                      />
                    </div>
                    <div className="box">
                      <button className="tf-btn primary">Contact US</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="overlay" />
          </section>
          {/* End Contact */}
          {/* Agents */}
          <section className="flat-section flat-agents">
            <div className="container">
              <div className="box-title text-center">
                <div className="text-subtitle text-primary">Our Teams</div>
                <h4 className="mt-4">Meet Our Agents</h4>
              </div>
              <div className="row">
                <div className="box col-lg-4 col-sm-6">
                  <div className="box-agent style-1 hover-img">
                    <div className="box-img img-style">
                      <img
                        src="/images/agents/agent-lg-1.jpg"
                        alt="image-agent"
                      />
                      <ul className="agent-social">
                        <li>
                          <Link href="#" className="icon icon-facebook" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-linkedin" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-twitter" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-instagram" />
                        </li>
                      </ul>
                    </div>
                    <Link href="#" className="content">
                      <div className="info">
                        <h6 className="link">Jack Halow</h6>
                        <p className="mt-4 text-variant-1">CEO &amp; Founder</p>
                      </div>
                      <span className="icon-phone" />
                    </Link>
                  </div>
                </div>
                <div className="box col-lg-4 col-sm-6">
                  <div className="box-agent style-1 hover-img">
                    <div className="box-img img-style">
                      <img
                        src="/images/agents/agent-lg-2.jpg"
                        alt="image-agent"
                      />
                      <ul className="agent-social">
                        <li>
                          <Link href="#" className="icon icon-facebook" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-linkedin" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-twitter" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-instagram" />
                        </li>
                      </ul>
                    </div>
                    <Link href="#" className="content">
                      <div className="info">
                        <h6 className="link">John Smith</h6>
                        <p className="mt-4 text-variant-1">Property Manager</p>
                      </div>
                      <span className="icon-phone" />
                    </Link>
                  </div>
                </div>
                <div className="box col-lg-4 col-sm-6">
                  <div className="box-agent style-1 hover-img">
                    <div className="box-img img-style">
                      <img
                        src="/images/agents/agent-lg-3.jpg"
                        alt="image-agent"
                      />
                      <ul className="agent-social">
                        <li>
                          <Link href="#" className="icon icon-facebook" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-linkedin" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-twitter" />
                        </li>
                        <li>
                          <Link href="#" className="icon icon-instagram" />
                        </li>
                      </ul>
                    </div>
                    <Link href="#" className="content">
                      <div className="info">
                        <h6 className="link">Chris Patt</h6>
                        <p className="mt-4 text-variant-1">
                          Administrative Staff
                        </p>
                      </div>
                      <span className="icon-phone" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Agents */}
          {/* banner */}
          <section className="flat-section pt-0 flat-banner">
            <div className="container">
              <div className="wrap-banner bg-surface">
                <div className="box-left">
                  <div className="box-title">
                    <div className="text-subtitle text-primary">
                      Become Partners
                    </div>
                    <h4 className="mt-4">
                      List your Properties on Homeya, join Us Now!
                    </h4>
                  </div>
                  <Link href="#" className="tf-btn primary size-1">
                    Become A Hosting
                  </Link>
                </div>
                <div className="box-right">
                  <img src="/images/banner/banner.png" alt="image" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
