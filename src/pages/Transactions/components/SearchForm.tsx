import { MagnifyingGlass } from "phosphor-react";

export const SearchForm = () => {
	return (
		<form className="flex items-center gap-4">
			<label
				htmlFor="search"
				className="flex-1">
				<input
					className="w-full bg-gray-900 outline-none p-4 rounded-md text-gray-500 placeholder:text-gray-500 border border-transparent focus:border-green-300"
					placeholder="Busque por transações"
					type="text"
					id="search"
				/>
			</label>
			<button
				type="submit"
				className="flex items-center gap-4 px-8 py-4 rounded-md text-green-300 border border-green-300 font-bold hover:bg-green-300 hover:text-white transition-colors delay-100">
				<MagnifyingGlass
					size={20}
					className="fill-green-300 hover:fill-white"
				/>
				Buscar
			</button>
		</form>
	);
};
