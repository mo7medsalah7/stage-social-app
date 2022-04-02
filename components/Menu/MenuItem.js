function MenuItem({ Icon, title }) {
	return (
		<div className="flex flex-grow mb-2 space-x-5 items-center p-2 transition transform hover:translate-x-2 bg-white group shadow-sm hover:shadow-md rounded-md cursor-pointer">
			<span className="w-5 h-5 ml-2 ">
				<Icon />
			</span>
			<span className="font-semibold ">{title}</span>
		</div>
	);
}

export default MenuItem;
