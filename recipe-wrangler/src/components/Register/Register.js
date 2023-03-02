const Register = () => {
	return (
		<>
			<h1>Register</h1>

			<form>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" />

				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" />

				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
				/>

				<button type="submit">Register</button>
			</form>

			<p>
				Already have an account? <a href="/login">Login</a>
			</p>

			<style jsx>{`
				h1 {
					text-align: center;
				}

				form {
					display: flex;
					flex-direction: column;
					width: 300px;
					margin: 0 auto;
				}

				label {
					margin-top: 1rem;
				}

				input {
					padding: 0.5rem;
					font-size: 1rem;
					border: 1px solid #ccc;
					border-radius: 4px;
				}

				button {
					margin-top: 1rem;
					padding: 0.5rem;
					font-size: 1rem;
					border: none;
					border-radius: 4px;
					background-color: #333;
					color: #fff;
					cursor: pointer;
				}

				p {
					margin-top: 1rem;
					text-align: center;
				}

				a {
					color: #333;
					text-decoration: none;
				}

				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
};

export default Register;
