import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Breadcrumb from './Breadcrumb';
import ClientLayout from "./ClientLayout";

export default function Layout({ headerStyle, hcls, footerStyle, breadcrumbTitle, children }) {
	return (
		<>
			<div id="wrapper">
				<div id="pagee" className="clearfix">
					{headerStyle === 1 && <Header1 hcls={hcls} />}
					{headerStyle === 2 && <Header2 />}
					<main className="main">
						{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
						{children}
					</main>
					{footerStyle === 1 && <Footer1 />}
					{footerStyle === 2 && <Footer2 />}
				</div>
			</div>
			<ClientLayout />
		</>
	);
}
