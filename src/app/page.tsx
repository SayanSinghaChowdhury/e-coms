import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			{/* Hero icon */}
			<div className="h-[60vh] w-[100%]">
				<div className="relative aspect-[2/1]">
					<Image
						src="/featured.png"
						alt="Home Icon"
						fill
					/>
				</div>
			</div>
		</section>
	);
};

export default page;
