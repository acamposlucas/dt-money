import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionContext";

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
	const { fetchTransactions } = useContext(TransactionsContext);

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	async function handleSearchTransactions(data: SearchFormInputs) {
		await fetchTransactions(data.query);
	}
	return (
		<form
			onSubmit={handleSubmit(handleSearchTransactions)}
			className="flex items-center gap-4">
			<label
				htmlFor="search"
				className="flex-1">
				<input
					{...register("query")}
					className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
					placeholder="Busque por transações"
					type="text"
					id="search"
				/>
			</label>
			<button
				disabled={isSubmitting}
				type="submit"
				className="flex items-center gap-4 px-8 py-4 rounded-md cursor-pointer text-green-300 border border-green-300 font-bold enabled:hover:bg-green-300 enabled:hover:text-white transition-colors delay-100 disabled:opacity-60 disabled:cursor-not-allowed">
				<MagnifyingGlass
					size={20}
					className="fill-green-300 hover:fill-white"
				/>
				Buscar
			</button>
		</form>
	);
};
