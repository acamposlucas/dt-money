import Logo from "../assets/logo.svg";

export const Header = () => {
	return (
		<header className="bg-gray-900 pt-10 pb-32">
			<div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex justify-between items-center">
				<img
					src={Logo}
					alt=""
				/>
				<button
					type="button"
					className="font-bold text-white bg-green-500 rounded-md hover:bg-green-300 hover:transition-colors px-5 py-3 hover:delay-200 hover:ease-in">
					Nova transação
				</button>
			</div>
		</header>
	);
};
