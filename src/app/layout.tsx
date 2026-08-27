import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js Frontend Template",
	icons: {
		icon: "/logo.png",
	},
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="duration-[1.2s]">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<main className="mx-auto max-w-7xl px-6 py-8">
						<Header />
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
