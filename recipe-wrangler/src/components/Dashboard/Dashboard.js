const Dashboard = () => {
	const loggedInUser = JSON.parse(localStorage.getItem('user'));
	if (!loggedInUser) window.location.href = '/login';

	return (
		<div className="Dashboard">
			<header>RecipeWrangler</header>
		</div>
	);
};

export default Dashboard;
