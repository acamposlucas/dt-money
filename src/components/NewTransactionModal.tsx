import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

export const NewTransactionModal = () => {
	const [transaction, setTransaction] = useState("income");
	{
		/**
  // TODO: Terminar RadioGroup
  */
	}
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
				onChange={setTransaction}>
				<RadioGroup.Label className="sr-only">Entrada</RadioGroup.Label>
				<RadioGroup.Option value="income">
					<span>Entrada</span>
				</RadioGroup.Option>
				<RadioGroup.Label className="sr-only">Saída</RadioGroup.Label>
				<RadioGroup.Option value="outcome">
					<span>Saída</span>
				</RadioGroup.Option>
			</RadioGroup>
		</form>
	);
};
