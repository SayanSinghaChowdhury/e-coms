import AdvanceCalculator from "@/components/agecomponents/AdvanceCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="flex w-md place-items-center border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg">
				<CardHeader className="w-full">
					<CardTitle className="text-center font-sans text-2xl">
						Advance Age calculator
					</CardTitle>
				</CardHeader>

				<CardContent className="h-auto">
					<AdvanceCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
