"use client";

import {
	Briefcase,
	Footprints,
	Glasses,
	Hand,
	Shirt,
	ShoppingBasket,
	Venus,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Category = () => {
	const categories = [
		{
			name: "All",
			icon: <ShoppingBasket className="h-4 w-4" />,
			slug: "all",
		},
		{
			name: "T-shirts",
			icon: <Shirt className="h-4 w-4" />,
			slug: "t-shirts",
		},
		{
			name: "Shoes",
			icon: <Footprints className="h-4 w-4" />,
			slug: "shoes",
		},
		{
			name: "Accessories",
			icon: <Glasses className="h-4 w-4" />,
			slug: "accessories",
		},
		{
			name: "Bags",
			icon: <Briefcase className="h-4 w-4" />,
			slug: "bags",
		},
		{
			name: "Dresses",
			icon: <Venus className="h-4 w-4" />,
			slug: "dresses",
		},
		{
			name: "Jackets",
			icon: <Shirt className="h-4 w-4" />,
			slug: "jackets",
		},
		{
			name: "Gloves",
			icon: <Hand className="h-4 w-4" />,
			slug: "gloves",
		},
	];

	const clickCategory = useSearchParams();

	// ==== raping---useSearchParams();

	const onParams = clickCategory.get("click");

	const selectCategory = useRouter();

	const handleClick = (value: string | number) => {
		selectCategory.push(`/?click=${value}`);
	};

	return (
		<div className="bg-dark mb-4 grid cursor-pointer grid-cols-2 gap-8 rounded-md p-2 text-sm text-gray-400 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
			{categories.map((cData) => (
				<div
					onClick={() => {
						handleClick(cData.slug);
					}}
					className={`grid place-items-center ${cData.slug === onParams ? "rounded-md bg-white text-black" : "text-gray-400"} `}
					key={cData.name}>
					{cData.icon}
					{cData.name}
				</div>
			))}
		</div>
	);
};

export default Category;
