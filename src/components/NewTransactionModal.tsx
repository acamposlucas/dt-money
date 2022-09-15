import { RadioGroup } from "@headlessui/react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

const newTransactionFormSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(["income", "outcome"]),
});

type NewTrasactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<NewTrasactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: {
			type: "income",
		},
	});

	async function handleCreateNewTransaction(data: NewTrasactionFormInputs) {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
			<div
				role="group"
				className="flex flex-col gap-4">
				<label
					htmlFor="description"
					className="flex-1">
					<input
						{...register("description")}
						className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
						placeholder="Descrição"
						type="text"
						id="description"
					/>
				</label>
				<label
					htmlFor="value"
					className="flex-1">
					<input
						{...register("price", { valueAsNumber: true })}
						className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
						placeholder="Valor"
						type="text"
						id="value"
					/>
				</label>
				<label
					htmlFor="category"
					className="flex-1">
					<input
						{...register("category")}
						className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
						placeholder="Categoria"
						type="text"
						id="category"
					/>
				</label>
			</div>
			<Controller
				control={control}
				name="type"
				render={({ field }) => {
					return (
						<RadioGroup
							value={field.value}
							onChange={field.onChange}
							className="flex gap-4 mt-6 mb-10">
							<RadioGroup.Label className="sr-only">
								Tipo de transação
							</RadioGroup.Label>
							<RadioGroup.Option
								value="income"
								className="flex-1 cursor-pointer">
								{({ checked }) => (
									<div
										className={`px-6 py-4 rounded-md ${
											checked ? "bg-green-700" : "bg-gray-700 hover:bg-gray-600"
										}`}>
										<span
											className={`${
												checked ? "text-white" : "text-gray-300"
											} flex items-center justify-center gap-2`}>
											<ArrowCircleUp
												size={24}
												color={`${checked ? "#ffffff" : "#00B37E"}`}
											/>
											Entrada
										</span>
									</div>
								)}
							</RadioGroup.Option>
							<RadioGroup.Option
								value="outcome"
								className="flex-1 cursor-pointer">
								{({ checked }) => (
									<div
										className={`px-6 py-4 rounded-md ${
											checked ? "bg-red-800" : "bg-gray-700 hover:bg-gray-600"
										} hover:transition-colors`}>
										<span
											className={`${
												checked ? "text-white" : "text-gray-300"
											} flex items-center justify-center gap-2 hover:transition-colors`}>
											<ArrowCircleDown
												size={24}
												color={`${checked ? "#ffffff" : "#F75A68"} `}
											/>
											Saída
										</span>
									</div>
								)}
							</RadioGroup.Option>
						</RadioGroup>
					);
				}}
			/>
			<button
				disabled={isSubmitting}
				type="submit"
				className="block w-full rounded-md cursor-pointer text-white bg-green-500 enabled:hover:bg-green-300 py-4 enabled:hover:transition-colors disabled:cursor-not-allowed disabled:opacity-60">
				Cadastrar
			</button>
		</form>
	);
};
