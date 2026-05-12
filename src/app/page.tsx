import { Card, CardContent } from "@/components/shadcnui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/shadcnui/carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	// make arry for map our data

	const product = [
		{
			id: 1,
			name: "snicker",
			image: "/featured.png",
		},
		{
			id: 2,
			name: "snicker",
			image: "/featured.png",
		},

		{
			id: 3,
			name: "snicker",
			image: "/featured.png",
		},

		// {
		// 	id: 3,
		// 	name: "Hoddie",
		// 	image: "/b.png",
		// },

		// {
		// 	id: 4,
		// 	name: "tshirt",
		// 	image: "/a.png",
		// },
	];

	return (
		<section className="grid h-[90dvh] place-items-center">
			{/* Hero icon */}
			<Carousel className="mb-12 w-[90%]">
				<CarouselContent>
					{product.map((items) => (
						<CarouselItem key={items.id}>
							<Card className="rounded-none border-none bg-transparent">
								<CardContent>
									<div className="relative aspect-[3/1] border-none">
										<img
											src={items.image}
											alt="home"
										/>
									</div>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
};

export default page;
