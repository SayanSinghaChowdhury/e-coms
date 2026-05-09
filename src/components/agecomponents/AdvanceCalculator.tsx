"use client";

import { dateSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Calendar } from "../shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcnui/popover";
const AdvanceCalculator = () => {
	// Form Use
	const inputForm = useForm({
		resolver: zodResolver(dateSchema),

		mode: "all",
	});

	const [date, setDate] = useState("How Older You ?");

	const [open, setopen] = useState(false);

	return (
		<form className="grid place-items-center gap-7">
			<h1 className="font-sans text-2xl font-semibold">{date}</h1>
			<Controller
				name="date"
				control={inputForm.control}
				render={({ field, fieldState }) => (
					<Popover
						open={open}
						onOpenChange={setopen}>
						<PopoverTrigger asChild>
							<Button className="w-xs">pick a date </Button>
						</PopoverTrigger>

						<PopoverContent
							className="h-auto w-xs overflow-hidden border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg"
							align="center">
							<Calendar
								className="h-80"
								mode="single"
								// selected={data}
								// defaultMonth={data}

								onSelect={() => {
									setopen(false);
								}}
								captionLayout="dropdown"
							/>
						</PopoverContent>
					</Popover>
					// <Field data-invalid={fieldState.invalid}>
					// 	{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					// </Field>
				)}
			/>
		</form>
	);
};

export default AdvanceCalculator;
