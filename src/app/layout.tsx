
import {  Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";

const poppin = Poppins({ subsets: ["latin"], weight: "600" });



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={
					poppin.className +
					" bg[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] absolute inset-0 h-full w-full bg-black bg-[size:24px_24px]"
				}
			>
				<Navigation />
				{children}
				<Analytics />

				<Footer />
			</body>
		</html>
	);
}
