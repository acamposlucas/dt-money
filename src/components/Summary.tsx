import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
import { priceFormatter } from "../utils/formatter";

export const Summary = () => {
	const { transactions } = useContext(TransactionsContext);

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "income") {
				acc.income += transaction.price;
				acc.total += transaction.price;
			} else {
				acc.outcome += transaction.price;
				acc.total -= transaction.price;
			}

			return acc;
		},
		{
			income: 0,
			outcome: 0,
			total: 0,
		}
	);

	return (
		<section className="max-w-screen-xl mx-auto px-4 xl:px-0 grid grid-cols-3 gap-8 -mt-20">
			<div
				className="py-6 px-8 bg-gray-600 rounded-md"
				aria-labelledby="entradas"
				aria-describedby="entradas-valor">
				<div className="flex justify-between items-center mb-3">
					<span id="entradas">Entradas</span>
					<ArrowCircleUp
						size={32}
						color="#00b37e"
					/>
				</div>
				<h2
					id="entradas-valor"
					className="text-2xl font-bold text-gray-100">
					{priceFormatter.format(summary.income)}
				</h2>
			</div>
			<div
				className="py-6 px-8 bg-gray-600 rounded-md"
				aria-labelledby="saidas"
				aria-describedby="saidas-valor">
				<div className="flex justify-between items-center mb-3">
					<span id="saidas">Saídas</span>
					<ArrowCircleDown
						size={32}
						color="#f75a68"
					/>
				</div>
				<h2
					id="saidas-valor"
					className="text-2xl font-bold text-gray-100">
					{priceFormatter.format(summary.outcome)}
				</h2>
			</div>
			<div
				className="py-6 px-8 bg-green-700 rounded-md"
				aria-labelledby="total"
				aria-describedby="total-value">
				<div className="flex justify-between items-center mb-3">
					<span id="total">Total</span>
					<CurrencyDollar
						size={32}
						color="#ffffff"
					/>
				</div>
				<h1
					id="total-valor"
					className="text-2xl font-bold text-gray-100">
					{priceFormatter.format(summary.total)}
				</h1>
			</div>
		</section>
	);
};
