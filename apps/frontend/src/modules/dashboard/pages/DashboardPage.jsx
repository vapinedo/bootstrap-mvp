export const DashboardPage = () => {
	return (
		<>
			<div className="grid grid-cols-12 gap-4 md:gap-6">
				<div className="col-span-12 space-y-6 xl:col-span-7">
					<p>Ecommerce Metrics</p>
					<p>Monthly Sales Chart</p>
				</div>

				<div className="col-span-12 xl:col-span-5">
					<p>Monthly Target</p>
				</div>

				<div className="col-span-12">
					<p>Statistics Chart</p>
				</div>

				<div className="col-span-12 xl:col-span-5">
					<p>Demographic Card</p>
				</div>

				<div className="col-span-12 xl:col-span-7">
					<p>Recent Orders</p>
				</div>
			</div>
		</>
	);
};
