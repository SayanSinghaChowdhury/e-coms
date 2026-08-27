"use client";

import { ProductType } from "@/lib/typeOfProduct";
import CardOfProduct from "../CardOfProduct";
import Category from "../Category";

const ProductList = () => {
	// Temporary Data

	const products: ProductType = [
		{
			id: 1,
			name: "Adidas CoreFit T-Shirt",
			shortDescription:
				"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
			description:
				"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
			price: 39.9,
			sizes: ["s", "m", "l", "xl", "xxl"],
			colors: ["gray", "purple", "green"],
			images: {
				gray: "/product/1g.png",
				purple: "/product/1gr (1).png",
				green: "/product/1gr.png",
			},
		},

		// {
		// 	id: 2,
		// 	name: "Puma Ultra Warm Zip",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 59.9,
		// 	sizes: ["s", "m", "l", "xl"],
		// 	colors: ["gray", "green"],
		// 	images: { gray: "/product/2g.png", green: "/product/2gr.png" },
		// },
		// {
		// id: 3,
		// 	name: "Nike Air Essentials Pullover",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 69.9,
		// 	sizes: ["s", "m", "l"],
		// 	colors: ["green", "blue", "black"],
		// 	images: {
		// 		green: "/products/3gr.png",
		// 		blue: "/products/3b.png",
		// 		black: "/products/3bl.png",
		// 	},
		// },
		// {
		// 	id: 4,
		// 	name: "Nike Dri Flex T-Shirt",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 29.9,
		// 	sizes: ["s", "m", "l"],
		// 	colors: ["white", "pink"],
		// 	images: { white: "/products/4w.png", pink: "/products/4p.png" },
		// },
		// {
		// 	id: 5,
		// 	name: "Under Armour StormFleece",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 49.9,
		// 	sizes: ["s", "m", "l"],
		// 	colors: ["red", "orange", "black"],
		// 	images: {
		// 		red: "/products/5r.png",
		// 		orange: "/products/5o.png",
		// 		black: "/products/5bl.png",
		// 	},
		// },
		// {
		// 	id: 6,
		// 	name: "Nike Air Max 270",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 59.9,
		// 	sizes: ["40", "42", "43", "44"],
		// 	colors: ["gray", "white"],
		// 	images: { gray: "/products/6g.png", white: "/products/6w.png" },
		// },
		// {
		// 	id: 7,
		// 	name: "Nike Ultraboost Pulse ",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 69.9,
		// 	sizes: ["40", "42", "43"],
		// 	colors: ["gray", "pink"],
		// 	images: { gray: "/products/7g.png", pink: "/products/7p.png" },
		// },
		// {
		// 	id: 8,
		// 	name: "Levi’s Classic Denim",
		// 	shortDescription:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	description:
		// 		"Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
		// 	price: 59.9,
		// 	sizes: ["s", "m", "l"],
		// 	colors: ["blue", "green"],
		// 	images: { blue: "/products/8b.png", green: "/products/8gr.png" },
		// },
	];

	return (
		<div className="w-full">
			<Category />

			<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{products.map((pData) => (
					<CardOfProduct
						key={pData.id}
						pData={pData}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
