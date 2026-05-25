"use client";

import { BellIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Menubar = () => {
	return (
		<div className="grid w-auto items-center gap-4 md:flex md:justify-center">
			<input
				type="text"
				placeholder="Search"
				className="rounded-sm bg-gray-300/40 p-1 font-sans font-semibold text-black shadow-md duration-500"
			/>

			<Link href={"/"}>
				<BellIcon />
			</Link>

			<Link href={"/"}>
				<ShoppingCartIcon />
			</Link>
		</div>
	);
};

export default Menubar;
