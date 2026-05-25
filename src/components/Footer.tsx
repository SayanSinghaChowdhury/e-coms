import Link from "next/link";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-3 rounded-md bg-gray-900 p-5 md:flex md:flex-row lg:gap-20">
			{/* Frist Box */}
			<div className="grid justify-center gap-2 text-center text-gray-400">
				<Link
					href="/"
					className="text-xl tracking-tight text-yellow-400"
					aria-label="App Name">
					ECOMs
				</Link>

				<Link href="/">2026 @ ECOMs</Link>

				<Link href="/">All rights Recives</Link>
			</div>
			{/* Seccond Box */}

			<div className="grid items-start justify-center gap-2 text-center text-gray-400">
				<Link
					href="/"
					className="text-xl tracking-tight text-gray-300"
					aria-label="App Name">
					Links
				</Link>

				<Link href="/">Home Page</Link>

				<Link href="/"> Contact</Link>
				<Link href="/">Service</Link>

				<Link href="/">Teams and service</Link>
				<Link href="/">Product</Link>
			</div>
			{/* Third Box */}

			<div className="grid justify-center gap-2 text-center text-gray-400">
				<Link
					href="/"
					className="text-xl tracking-tight text-gray-300"
					aria-label="App Name">
					Product
				</Link>

				<Link href="/">All product</Link>

				<Link href="/">Your Product</Link>
				<Link href="/">New Design</Link>

				<Link href="/">Trending</Link>
				<Link href="/">Brand product</Link>
			</div>
			{/* Fourth Box */}

			<div className="grid justify-center gap-2 text-center text-gray-400">
				<Link
					href="/"
					className="text-xl tracking-tight text-gray-300"
					aria-label="App Name">
					Company
				</Link>

				<Link href="/">ABout us</Link>

				<Link href="/">Your Contact </Link>
				<Link href="/">Contact with us </Link>

				<Link href="/">Support</Link>

				<Link href="/">saYANdEV.@</Link>
			</div>
		</footer>
	);
};

export default Footer;
