"use client";

import { ProductsType } from "@/lib/typeOfProduct";
import Image from "next/image";
import Link from "next/link";

const CardOfProduct = ({ pData }: { pData: ProductsType }) => {
	return (
		<div className="flex place-items-center gap-3">
			<div className="flex w-2xs place-items-center gap-3 rounded-lg">
				{/* IMAGE */}
				<Link
					href={`/products/id`}
					className="w-full">
					<div className="relative grid place-items-center shadow-lg">
						<Image
							src={pData.images[pData.colors[0]]}
							alt={pData.name}
							height={100}
							width={100}
							className="w-full object-cover transition-all duration-300 hover:scale-105"
						/>
					</div>
				</Link>
			</div>
			<div className="flex w-2xs place-items-center gap-3 rounded-lg shadow-lg">
				{/* IMAGE */}
				<Link
					href={`/products/id`}
					className="w-full">
					<div className="relative grid place-items-center">
						<Image
							src={pData.images[pData.colors[0]]}
							alt={pData.name}
							height={100}
							width={100}
							className="w-full object-cover transition-all duration-300 hover:scale-105"
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default CardOfProduct;
