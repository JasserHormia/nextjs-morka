import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function UaeGoldenVisa() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Uae Golden Visa">
        <section className="flat-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="flat-blog-list">
                  <div className="flat-blog-item">
                    <div className="img-style">
                      <img
                        src="/images/gvisa/gvisa-1.jpg"
                        alt="img-blog"
                        style={{ width: "60%" }}
                      />
                    </div>
                    <div className="content-box">
                      <h5 className="title">UAE Golden Visa</h5>
                      <p className="description body-1">
                        The United Arab Emirates (UAE) is a beacon of modernity,
                        showcasing state-of-the-art infrastructure, a
                        well-connected transportation network, and extensive
                        business opportunities for entrepreneurs, business
                        leaders and investors. For those looking to secure the
                        longest possible residence within the UAE, the route
                        through investment is the most effective. The UAE
                        Residence by Investment program enables foreign
                        individuals to invest in the country and gain the option
                        for 10-year resident status. At Morka Real Estate, we
                        provide a comprehensive residency by investment service,
                        advising and assisting clients wanting to establish
                        long-term residency through the whole process.
                      </p>
                    </div>
                  </div>
                  <div className="flat-blog-item">
                    <div className="img-style">
                      <img
                        src="/images/gvisa/gvisa-2.jpg"
                        alt="img-blog"
                        style={{ width: "60%", borderRadius: "15px" }}
                      />
                    </div>
                    <div className="content-box">
                      <h5 className="title">UAE Investment-Based Residence</h5>
                      <p className="description body-1">
                        The United Arab Emirates stands as a highly appealing
                        global business hub. The UAE’s Investment-Based
                        Residence program is designed to offer long-term
                        residency opportunities to foreign investors,
                        entrepreneurs, as well as individuals with exceptional
                        skills, such as specialists, students, and researchers,
                        who contribute significantly to the country through
                        their investments.
                      </p>
                      
                    </div>
                  </div>
                  <div className="flat-blog-item">
                    <div className="img-style">
                      <img src="/images/gvisa/gvisa-3.jpg" alt="img-blog" style={{width:"60%" , height:"550px" , borderRadius:"15px"}} />
                    </div>
                    <div className="content-box">
                      
                      <h5 className="title">
                      Residence Through Property Investment
                      </h5>
                      <p className="description body-1">
                        Delve into the art of home staging as an effective
                        strategy to attract buyers and sell your home...
                      </p>
                      <Link href="/blog-detail" className="btn-read-more">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
