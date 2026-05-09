"use client";

import {
	format,
	formatDistanceToNow,
	isBefore,
	startOfTomorrow,
} from "date-fns";
import { CalendarArrowDown } from "lucide-react";
import { useState } from "react";
import { TextScramble } from "../../../components/motion-primitives/text-scramble";
import { Button } from "../shadcnui/button";
import { Calendar } from "../shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcnui/popover";

const BasicAge = () => {
	const [data, setData] = useState<Date | undefined>(undefined);

	const [open, setOpen] = useState(false);

	const resetSubmit = () => {
		setData("");
	};

	return (
		<div className="grid w-full place-items-center gap-6">
			<h2 className="mb-6 font-sans text-2xl font-semibold">
				{data ? (
					isBefore(data, startOfTomorrow()) ? (
						<TextScramble
							className="font-sans text-2xl font-semibold"
							as="span"
							speed={0.01}>
							{formatDistanceToNow(data)}
						</TextScramble>
					) : (
						`You will be
      ${formatDistanceToNow(data)}old`
					)
				) : (
					"Your age"
				)}
			</h2>

			<Popover
				open={open}
				onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id="date"
						className="justify-center bg-white/1 font-normal">
						<h2 className="flex w-fit place-items-center">
							<span className="ms-2">
								<CalendarArrowDown />
							</span>
						</h2>

						{data ? format(data, "pppp") : "pick Your date"}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="h-auto w-xs overflow-hidden border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg"
					align="center">
					<Calendar
						className="h-80"
						mode="single"
						selected={data}
						defaultMonth={data}
						captionLayout="dropdown"
						onSelect={(date) => {
							setData(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
			{/* Reset Button */}
			<Button
				className="font-mono font-semibold opacity-75 hover:opacity-95"
				onClick={resetSubmit}>
				Reset
			</Button>
		</div>
	);
};

export default BasicAge;
