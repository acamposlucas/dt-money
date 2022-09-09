import { RadioGroup } from "@headlessui/react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useState } from "react";

export const NewTransactionModal = () => {
	const [transaction, setTransaction] = useState("income");

	return (
		<form>
			<div
				role="group"
				className="flex flex-col gap-4">
				<label
					htmlFor="description"
					className="flex-1">
					<input
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
						className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
						placeholder="Categoria"
						type="text"
						id="category"
					/>
				</label>
			</div>
			<RadioGroup
				value={transaction}
				onChange={setTransaction}
				className="flex gap-4 mt-6 mb-10">
				<RadioGroup.Label className="sr-only">Tipo de transação</RadioGroup.Label>
				<RadioGroup.Option
					value="income"
					className="flex-1">
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
					className="flex-1">
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
			<button
				type="submit"
				className="block w-full rounded-md text-white bg-green-500 hover:bg-green-300 py-4 hover:transition-colors">
				Cadastrar
			</button>
		</form>
	);
};
