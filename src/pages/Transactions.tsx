import { Header } from "../components/Header";
import { Summary } from "../components/Summary";

export const Transactions = () => {
	return (
		<>
			<Header />
			<Summary />
			<main className="max-w-screen-xl mx-auto px-4 xl:px-0 my-16">
				<table className="table-auto border-separate border-spacing-x-0 border-spacing-y-2 w-full">
					<tbody>
						<tr>
							<td className="px-8 py-5 bg-gray-700 rounded-tl-md rounded-bl-md">
								Desenvolvimento de site
							</td>
							<td className={`px-8 py-5 bg-gray-700 text-green-300`}>R$ 12.000,00</td>
							<td className="px-8 py-5 bg-gray-700">Vendas</td>
							<td className="px-8 py-5 bg-gray-700 rounded-tr-md rounded-br-md">
								13/04/2022
							</td>
						</tr>
						<tr>
							<td className="px-8 py-5 bg-gray-700 rounded-tl-md rounded-bl-md">
								Compras
							</td>
							<td className="px-8 py-5 bg-gray-700 text-red-300">- R$ 50,00</td>
							<td className="px-8 py-5 bg-gray-700">Alimentação</td>
							<td className="px-8 py-5 bg-gray-700  rounded-tr-md rounded-br-md">
								13/04/2022
							</td>
						</tr>
					</tbody>
				</table>
			</main>
		</>
	);
};
