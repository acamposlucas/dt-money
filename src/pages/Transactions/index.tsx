import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { SearchForm } from "./components/SearchForm";

interface Transaction {
	id: number;
	description: string;
	type: "income" | "outcome";
	price: number;
	category: string;
	createdAt: string;
}

export const Transactions = () => {
	const { transactions } = useContext(TransactionsContext);

	return (
		<>
			<Header />
			<Summary />
			<main className="max-w-screen-xl mx-auto px-4 xl:px-0 my-16 flex flex-col gap-4">
				<SearchForm />
				<table className="table-auto border-separate border-spacing-x-0 border-spacing-y-2 w-full">
					<tbody>
						{transactions.map((transaction) => {
							return (
								<tr key={transaction.id}>
									<td className="px-8 py-5 bg-gray-700 rounded-tl-md rounded-bl-md">
										{transaction.description}
									</td>
									<td
										className={`px-8 py-5 bg-gray-700 ${
											transaction.type === "income" ? "text-green-300" : "text-red-300"
										}`}>
										{transaction.price}
									</td>
									<td className="px-8 py-5 bg-gray-700">{transaction.category}</td>
									<td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
										{transaction.createdAt}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</main>
		</>
	);
};
