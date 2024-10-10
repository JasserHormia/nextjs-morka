import "/public/css/bootstrap.min.css"
import "/public/fonts/font-icons.css"
import "/public/fonts/fonts.css"
// import "/public/css/nouislider.min.css"
import "/public/css/swiper-bundle.min.css"
import "/public/css/animate.css"
import "/public/css/styles.css"

import { DM_Sans, Josefin_Sans } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"

const dm = DM_Sans({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--dm",
	display: 'swap',
})
const josefin = Josefin_Sans({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--josefin",
	display: 'swap',
})


export const metadata = {
	title: 'Morka Real Estate',
	description: 'Developed By Jasser Haramia',
	icons: {
		icon: ['/images/logo/favicmorka.webp']
	}
}

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
		<html lang="en">
			<body className={`${dm.variable} ${josefin.variable} body`}>{children}</body>
		</html>
		</ClerkProvider>
	)
}
