const registerUser = async (user) => {
	fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};

const exports = {
	registerUser,
};

export default exports;
