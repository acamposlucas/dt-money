import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export const Summary = () => {
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
					R$ 17.400,00
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
					R$ 17.400,00
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
					R$ 17.400,00
				</h1>
			</div>
		</section>
	);
};
