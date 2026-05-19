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
	return (
		<div className="mb-4 grid grid-cols-2 gap-8 rounded-md bg-gray-100 p-2 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 dark:text-yellow-400">
			{categories.map((cData) => (
				<div
					className="grid place-items-center"
					key={cData.name}>
					{cData.icon}
					{cData.name}
				</div>
			))}
		</div>
	);
};

export default Category;
