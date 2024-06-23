import React, { useState } from "react";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { handleRegister } from "../utils/Resource";

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
	InputRightElement
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const [showPassword, setShowPassword] = useState(false);

	const handleShowClick = () => setShowPassword(!showPassword);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim() && password.trim() && email.trim()) {
			handleRegister(email, name, password, navigate);
			setName("");
			setEmail("");
			setPassword("");
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
				<Heading color="teal.400">Criar conta</Heading>
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
									<Input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										children={<CFaUserAlt color="gray.300" />}
									/>
									<Input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
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
				Já possui registro?{" "}
				<ChakraLink as={ReactRouterLink} color="teal.500" to="/">
					Entrar
				</ChakraLink>
			</Box>
		</Flex>
	);
};

export default Signup;