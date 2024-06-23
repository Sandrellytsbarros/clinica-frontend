import { toast } from "react-toastify";

export async function handleLogin(email, password, tipo, navigate, login) {
	try {
		const request = await fetch("http://localhost:3000/login", {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
				tipo
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = await request.json();
		if (data.error) {
			toast.error(data.error);
		} else {
			toast.success("Logado com sucesso");
			login(data);
			navigate("/dashboard");
		}
	} catch (err) {
		console.error(err);
	}
}

export async function handleRegister(email, username, password, navigate) {
	try {
		const request = await fetch("http://localhost:3000", {
			method: "POST",
			body: JSON.stringify({
				email,
				username,
				password,
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = await request.json();
		if (data.error_message) {
			toast.error(data.error_message);
		} else {
			toast.success(data.message);
			navigate("/");
		}
	} catch (err) {
		console.error(err);
		toast.error("Account creation failed");
	}
}

export function fetchMedicos(setMedicos) {
	fetch(`http://localhost:3000/medicos`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				toast.error(data.error);
			} else {
				setMedicos(data)
			}
		})
		.catch((err) => console.error(err));
}

export function fetchPacientes(setPacientes) {
	fetch(`http://localhost:3000/pacientes`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				toast.error(data.error);
			} else {
				setPacientes(data)
			}
		})
		.catch((err) => console.error(err));
}

export function fetchConsultas(setConsultas) {
	fetch(`http://localhost:3000/consultas`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.error) {
				toast.error(data.error);
			} else {
				setConsultas(data)
			}
		})
		.catch((err) => console.error(err));
}