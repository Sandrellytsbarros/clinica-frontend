import React, { useState, useEffect } from "react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { handleLogin } from "../utils/Resource";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	chakra,
	Box,
	Link as ChakraLink,
	Avatar,
	FormControl,
	InputRightElement,
	Select
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowClick = () => setShowPassword(!showPassword);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [tipo, setTipo] = useState("");
	const navigate = useNavigate();
	const { isAuthenticated, login } = useContext(AuthContext);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/dashboard");
		}
	}, [isAuthenticated]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username.trim() && password.trim()) {
			handleLogin(username, password, tipo, navigate, login);
			setPassword("");
			setUsername("");
			setTipo("");
		}
	};

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			backgroundColor="gray.200"
			justifyContent="center"
			alignItems="center"
		>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
			>
				<Heading as='h1' size='4xl' noOfLines={1} color="teal.400" mb={"50px"}>
					Clínica do Sr. Zacarias
				</Heading>
				<Avatar bg="teal.500" />
				<Heading color="teal.400">Entrar na sua conta</Heading>
				<Box minW={{ base: "90%", md: "468px" }}>
					<form onSubmit={handleSubmit}>
						<Stack
							spacing={4}
							p="1rem"
							backgroundColor="whiteAlpha.900"
							boxShadow="md"
						>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaUserAlt color="gray.300" />}
									/>
									<Input type="email" id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder="email" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										children={<CFaLock color="gray.300" />}
									/>
									<Input
										type={showPassword ? "text" : "password"} name='password'
										placeholder="senha" id='password' value={password} onChange={(e) => setPassword(e.target.value)}
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleShowClick}>
											{showPassword ? "Ocultar" : "Mostrar"}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<Select id='tipo' name='tipo' value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder='Tipo de Cadastro'>
										<option value='ADMIN'>Administrador</option>
										<option value='MEDICO'>Médico</option>
										<option value='PACIENTE'>Paciente</option>
									</Select>
								</InputGroup>
							</FormControl>
							<Button
								borderRadius={0}
								type="submit"
								variant="solid"
								colorScheme="teal"
								width="full"
							>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Não tem registro?{" "}
				<ChakraLink as={ReactRouterLink} color="teal.500" to="/registrar">
					Registre aqui
				</ChakraLink>
			</Box>
		</Flex>
	);
};

export default Login;
