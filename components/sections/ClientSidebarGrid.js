"use client";
import RangeSlider from "@/components/elements/RangeSlider";
import SidebarFilter from "@/components/elements/SidebarFilter";
import TabNav from "@/components/elements/TabNav";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";
// import Preloader from "@/components/elements/Preloader";

export default function ClientSidebarGrid({ data }) {

    const [isTab, setIsTab] = useState(1);
    const [isVisible, setIsVisible] = useState(true);
    const handleTab = (i) => {
        setIsTab(i);
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    };

    // if (loading) return <Preloader />;
    // if (error) return <div>Error: {error}</div>;

    return (
            <Layout headerStyle={1} footerStyle={1}>
                <section className="flat-section-v6 flat-recommended flat-sidebar">
                    <div className="container">
                        <div className="box-title-listing">
                            <h5>Property listing</h5>
                            <div className="box-filter-tab">
                                <ul className="nav-tab-filter" role="tablist">
                                    <li className="nav-tab-item" onClick={() => handleTab(1)}>
                                        <a
                                            className={
                                                isTab == 1 ? "nav-link-item active" : "nav-link-item"
                                            }
                                            data-bs-toggle="tab"
                                        >
                                            <i className="icon icon-grid" />
                                        </a>
                                    </li>
                                    <li className="nav-tab-item" onClick={() => handleTab(2)}>
                                        <a
                                            className={
                                                isTab == 2 ? "nav-link-item active" : "nav-link-item"
                                            }
                                            data-bs-toggle="tab"
                                        >
                                            <i className="icon icon-list" />
                                        </a>
                                    </li>
                                </ul>
                                <select className="nice-select">
                                    <option data-value={1} className="option">
                                        10 Per Page
                                    </option>
                                    <option data-value={2} className="option">
                                        11 Per Page
                                    </option>
                                    <option data-value={3} className="option selected">
                                        12 Per Page
                                    </option>
                                </select>
                                <select className="nice-select">
                                    <option data-value="default" className="option selected">
                                        Sort by (Default)
                                    </option>
                                    <option data-value="new" className="option">
                                        Newest
                                    </option>
                                    <option data-value="old" className="option">
                                        Oldest
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                                <div className="widget-sidebar fixed-sidebar">
                                    <div className="flat-tab flat-tab-form widget-filter-search widget-box bg-surface">
                                        <div className="h7 title fw-7">Search</div>
                                        <ul className="nav-tab-form" role="tablist">
                                            <TabNav />
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade active show"
                                                role="tabpanel"
                                            >
                                                <div className="form-sl">
                                                    <form method="post">
                                                        <div className="wd-filter-select">
                                                            <div className="inner-group inner-filter">
                                                                <div className="form-style">
                                                                    <label className="title-select">
                                                                        Keyword
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search Keyword."
                                                                        name="s"
                                                                        title="Search for"
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="form-style">
                                                                    <label className="title-select">
                                                                        Location
                                                                    </label>
                                                                    <div className="group-ip ip-icon">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Search Location"
                                                                            name="s"
                                                                            title="Search for"
                                                                            required
                                                                        />
                                                                        <Link
                                                                            href="#"
                                                                            className="icon-right icon-location"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="form-style">
                                                                    <label className="title-select">Type</label>
                                                                    <div className="group-select">
                                                                        <select className="nice-select">
                                                                            <option
                                                                                data-value
                                                                                className="option selected"
                                                                            >
                                                                                All
                                                                            </option>
                                                                            <option
                                                                                data-value="villa"
                                                                                className="option"
                                                                            >
                                                                                Villa
                                                                            </option>
                                                                            <option
                                                                                data-value="studio"
                                                                                className="option"
                                                                            >
                                                                                Studio
                                                                            </option>
                                                                            <option
                                                                                data-value="office"
                                                                                className="option"
                                                                            >
                                                                                Office
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="form-style box-select">
                                                                    <label className="title-select">Rooms</label>
                                                                    <select className="nice-select">
                                                                        <option data-value={2} className="option">
                                                                            1
                                                                        </option>
                                                                        <option
                                                                            data-value={2}
                                                                            className="option selected"
                                                                        >
                                                                            2
                                                                        </option>
                                                                        <option data-value={3} className="option">
                                                                            3
                                                                        </option>
                                                                        <option data-value={4} className="option">
                                                                            4
                                                                        </option>
                                                                        <option data-value={5} className="option">
                                                                            5
                                                                        </option>
                                                                        <option data-value={6} className="option">
                                                                            6
                                                                        </option>
                                                                        <option data-value={7} className="option">
                                                                            7
                                                                        </option>
                                                                        <option data-value={8} className="option">
                                                                            8
                                                                        </option>
                                                                        <option data-value={9} className="option">
                                                                            9
                                                                        </option>
                                                                        <option data-value={10} className="option">
                                                                            10
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-style box-select">
                                                                    <label className="title-select">
                                                                        Bathrooms
                                                                    </label>
                                                                    <select className="nice-select">
                                                                        <option data-value="all" className="option">
                                                                            All
                                                                        </option>
                                                                        <option data-value={1} className="option">
                                                                            1
                                                                        </option>
                                                                        <option data-value={2} className="option">
                                                                            2
                                                                        </option>
                                                                        <option data-value={3} className="option">
                                                                            3
                                                                        </option>
                                                                        <option
                                                                            data-value={4}
                                                                            className="option selected"
                                                                        >
                                                                            4
                                                                        </option>
                                                                        <option data-value={5} className="option">
                                                                            5
                                                                        </option>
                                                                        <option data-value={6} className="option">
                                                                            6
                                                                        </option>
                                                                        <option data-value={7} className="option">
                                                                            7
                                                                        </option>
                                                                        <option data-value={8} className="option">
                                                                            8
                                                                        </option>
                                                                        <option data-value={9} className="option">
                                                                            9
                                                                        </option>
                                                                        <option data-value={10} className="option">
                                                                            10
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-style box-select">
                                                                    <label className="title-select">
                                                                        Bedrooms
                                                                    </label>
                                                                    <select className="nice-select">
                                                                        <option data-value={1} className="option">
                                                                            All
                                                                        </option>
                                                                        <option data-value={1} className="option">
                                                                            1
                                                                        </option>
                                                                        <option data-value={2} className="option">
                                                                            2
                                                                        </option>
                                                                        <option data-value={3} className="option">
                                                                            3
                                                                        </option>
                                                                        <option
                                                                            data-value={4}
                                                                            className="option selected"
                                                                        >
                                                                            4
                                                                        </option>
                                                                        <option data-value={5} className="option">
                                                                            5
                                                                        </option>
                                                                        <option data-value={6} className="option">
                                                                            6
                                                                        </option>
                                                                        <option data-value={7} className="option">
                                                                            7
                                                                        </option>
                                                                        <option data-value={8} className="option">
                                                                            8
                                                                        </option>
                                                                        <option data-value={9} className="option">
                                                                            9
                                                                        </option>
                                                                        <option data-value={10} className="option">
                                                                            10
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-style widget-price">
                                                                    <RangeSlider />
                                                                </div>
                                                                <div className="form-style widget-price wd-price-2">
                                                                    <RangeSlider />
                                                                </div>
                                                                <SidebarFilter />
                                                                <div className="form-style">
                                                                    <button
                                                                        type="submit"
                                                                        className="tf-btn primary"
                                                                        href="#"
                                                                    >
                                                                        Find Properties
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-box bg-surface box-latest-property">
                                        <div className="h7 fw-7 title">Latest Propeties</div>
                                        <ul>
                                            <li className="latest-property-item">
                                                <Link
                                                    href="/property-details-v1"
                                                    className="images-style"
                                                >
                                                    <img src="/images/home/house-sm-3.jpg" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <div className="h7 text-capitalize fw-7">
                                                        <Link href="/property-details-v1" className="link">
                                                            Casa Lomas de Mach...
                                                        </Link>
                                                    </div>
                                                    <ul className="meta-list">
                                                        <li className="item">
                                                            <span>Bed:</span>
                                                            <span className="fw-7">4</span>
                                                        </li>
                                                        <li className="item">
                                                            <span>Bath:</span>
                                                            <span className="fw-7">2</span>
                                                        </li>
                                                        <li className="item">
                                                            <span className="fw-7">600 SqFT</span>
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <div className="h7 fw-7">$5050,00</div>
                                                        <span className="text-variant-1">/SqFT</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="latest-property-item">
                                                <Link
                                                    href="/property-details-v1"
                                                    className="images-style"
                                                >
                                                    <img src="/images/home/house-sm-9.jpg" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <div className="h7 text-capitalize fw-7">
                                                        <Link href="/property-details-v1" className="link">
                                                            Lakeview Haven...
                                                        </Link>
                                                    </div>
                                                    <ul className="meta-list">
                                                        <li className="item">
                                                            <span>Bed:</span>
                                                            <span className="fw-7">4</span>
                                                        </li>
                                                        <li className="item">
                                                            <span>Bath:</span>
                                                            <span className="fw-7">2</span>
                                                        </li>
                                                        <li className="item">
                                                            <span className="fw-7">600 SqFT</span>
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <div className="h7 fw-7">$5050,00</div>
                                                        <span className="text-variant-1">/SqFT</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="latest-property-item">
                                                <Link
                                                    href="/property-details-v1"
                                                    className="images-style"
                                                >
                                                    <img src="/images/home/house-sm-1.jpg" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <div className="h7 text-capitalize fw-7">
                                                        <Link href="/property-details-v1" className="link">
                                                            Sunset Heights Estate
                                                        </Link>
                                                    </div>
                                                    <ul className="meta-list">
                                                        <li className="item">
                                                            <span>Bed:</span>
                                                            <span className="fw-7">4</span>
                                                        </li>
                                                        <li className="item">
                                                            <span>Bath:</span>
                                                            <span className="fw-7">2</span>
                                                        </li>
                                                        <li className="item">
                                                            <span className="fw-7">600 SqFT</span>
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <div className="h7 fw-7">$5050,00</div>
                                                        <span className="text-variant-1">/SqFT</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="latest-property-item">
                                                <Link
                                                    href="/property-details-v1"
                                                    className="images-style"
                                                >
                                                    <img src="/images/home/house-sm-4.jpg" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <div className="h7 text-capitalize fw-7">
                                                        <Link href="/property-details-v1" className="link">
                                                            de Machalí Machas...
                                                        </Link>
                                                    </div>
                                                    <ul className="meta-list">
                                                        <li className="item">
                                                            <span>Bed:</span>
                                                            <span className="fw-7">4</span>
                                                        </li>
                                                        <li className="item">
                                                            <span>Bath:</span>
                                                            <span className="fw-7">2</span>
                                                        </li>
                                                        <li className="item">
                                                            <span className="fw-7">600 SqFT</span>
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <div className="h7 fw-7">$5050,00</div>
                                                        <span className="text-variant-1">/SqFT</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="tab-content">
                                    <div
                                        style={{ opacity: isVisible ? 1 : 0 }}
                                        className={
                                            isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"
                                        }
                                        id="gridLayout"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            {data?.length > 0 ? (
                                                data?.map((property, index) => (
                                                    <div className="col-md-6" key={property.id}>
                                                        <div className="homeya-box">
                                                            <div className="archive-top">
                                                                <Link
                                                                    href="/property-details-v1"
                                                                    className="images-group"
                                                                >
                                                                    <div className="images-style">
                                                                        {property.images &&
                                                                            property.images.length > 0 ? (
                                                                            <img
                                                                                loading="lazy"
                                                                                src={property.images[0].medium.link}
                                                                                alt="img"
                                                                            />
                                                                        ) : (
                                                                            <div>No Image Available</div>
                                                                        )}
                                                                    </div>
                                                                    <div className="top">
                                                                        <ul className="d-flex gap-8">
                                                                            <li className="flag-tag success">
                                                                                Featured
                                                                            </li>
                                                                            <li className="flag-tag style-1">
                                                                                {property.price.offering_type}
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="d-flex gap-4">
                                                                            <li className="box-icon w-32">
                                                                                <span className="icon icon-arrLeftRight" />
                                                                            </li>
                                                                            <li className="box-icon w-32">
                                                                                <span className="icon icon-heart" />
                                                                            </li>
                                                                            <li className="box-icon w-32">
                                                                                <span className="icon icon-eye" />
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <span className="flag-tag style-2">
                                                                            {property.type.name}
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                                <div className="content">
                                                                    <div className="h7 text-capitalize fw-7">
                                                                        <Link
                                                                            href="/property-details-v1"
                                                                            className="link"
                                                                        >
                                                                            {" "}
                                                                            {property.languages[0].title}
                                                                        </Link>
                                                                    </div>
                                                                    <div className="desc">
                                                                        <i className="fs-16 icon icon-mapPin" />

                                                                        {property?.location ? (
                                                                            <>
                                                                                {property.location.city
                                                                                    ? ` ${property.location.city}`
                                                                                    : "City not available"}
                                                                                {property.location.community
                                                                                    ? `, ${property.location.community}`
                                                                                    : ""}
                                                                                {property.location.sub_community
                                                                                    ? ` ${property.location.sub_community}`
                                                                                    : ""}
                                                                            </>
                                                                        ) : (
                                                                            "Location not available"
                                                                        )}
                                                                    </div>
                                                                    <ul className="meta-list">
                                                                        <li className="item">
                                                                            <i className="icon icon-bed" />
                                                                            <span>{property.bedrooms}</span>
                                                                        </li>
                                                                        <li className="item">
                                                                            <i className="icon icon-bathtub" />
                                                                            <span>{property.bathrooms}</span>
                                                                        </li>
                                                                        <li className="item">
                                                                            <i className="icon icon-ruler" />
                                                                            <span>{property.size} SqFt</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="archive-bottom d-flex justify-content-between align-items-center">
                                                                <div className="d-flex gap-8 align-items-center">
                                                                    <div className="avatar avt-40 round">
                                                                        <img
                                                                            loading="lazy"
                                                                            src="/images/avatar/avt-6.jpg"
                                                                            alt="avt"
                                                                        />
                                                                    </div>
                                                                    <span>{property.created_by}</span>
                                                                </div>
                                                                {property.price.offering_type === "rent" ? (
                                                                    <div className="d-flex align-items-center">
                                                                        <h6>
                                                                            {property?.price?.prices?.[0]?.value
                                                                                ? `${property.price.prices[0].value} AED`
                                                                                : "Price not available"}
                                                                        </h6>
                                                                        <span className="text-variant-1">
                                                                            /YEAR
                                                                        </span>
                                                                    </div>
                                                                ) : (
                                                                    <div className="d-flex align-items-center">
                                                                        <h6>{property.price.value} AED</h6>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>Loading...</p>
                                            )}
                                        </div>

                                        <ul className="wd-navigation">
                                            <li>
                                                <Link href="#" className="nav-item active">
                                                    1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="nav-item">
                                                    2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="nav-item">
                                                    3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="nav-item">
                                                    <i className="icon icon-arr-r" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
    );
}
