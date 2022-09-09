import { TransactionsProvider } from "./contexts/TransactionContext";
import { Transactions } from "./pages/Transactions";

function App() {
	return (
		<div className="bg-gray-800 text-gray-300 font-default h-screen">
			<TransactionsProvider>
				<Transactions />
			</TransactionsProvider>
		</div>
	);
}

export default App;
