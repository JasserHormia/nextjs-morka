import Layout from "@/components/layout/Layout";
import { SignUp } from "@clerk/nextjs";
export default function Register() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SignUp">
        <section className="flat-section">
          <div className="signintest">
            <SignUp></SignUp>
          </div>
        </section>
      </Layout>
    </>
  );
}
