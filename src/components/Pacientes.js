import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleCreateSchedule } from "../utils/Resource";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Navbar from "./Navbar.js"
import { fetchPacientes } from "../utils/Resource";

import {
    Flex,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
} from "@chakra-ui/react";

const Pacientes = () => {
    const navigate = useNavigate();
    const [pacientes, setPacientes] = useState();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
		if (!isAuthenticated) {
			navigate("/");
		}
	}, [navigate]);

    useEffect(() => {
		fetchPacientes(setPacientes);
	}, []);

    return (
        <div>
            <Navbar />
            <Flex
                flexDirection="column"
                width="100wh"
                height="100vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontSize='3xl' mb={"30px"} mt={"30px"}>Pacientes</Text>
                <Button colorScheme='teal' mb={"50px"}>Adicionar</Button>
                
                <TableContainer>
                    <Table variant='striped' colorScheme='teal' size='lg' mb={"200px"}>
                        <Thead>
                            <Tr>
                                <Th>Número</Th>
                                <Th>Nome</Th>
                                <Th>Email</Th>
                                <Th>Password</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pacientes?.map((paciente) => (
                                <Tr>
                                    <Td>{paciente.id}</Td>
                                    <Td>{paciente.nome}</Td>
                                    <Td>{paciente.email}</Td>
                                    <Td>{paciente.password}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </div>
    );
};

export default Pacientes;