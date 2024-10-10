import Layout from "@/components/layout/Layout";
import {SignIn } from "@clerk/nextjs";
export default function Login() {
  return (
    <>
      {" "}
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SignIn">
        <section className="flat-section">
          <div className="signintest">
            <SignIn></SignIn>
          </div>
        </section>
      </Layout>
    </>
  );
}
