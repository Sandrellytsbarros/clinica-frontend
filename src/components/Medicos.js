import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar.js"
import { fetchMedicos } from "../utils/Resource";

import {
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Text
} from "@chakra-ui/react";

const Medicos = () => {
    const navigate = useNavigate();
    const [medicos, setMedicos] = useState();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
		if (!isAuthenticated) {
			navigate("/");
		}
	}, [navigate]);


    useEffect(() => {
		fetchMedicos(setMedicos);
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
                <Text fontSize='3xl' mb={"30px"} mt={"30px"}>Médicos</Text>
                <Button colorScheme='teal' placement='right' mb={"50px"}>Button</Button>
                
                <TableContainer>
                    <Table variant='striped' colorScheme='teal' size='lg' mb={"200px"}>
                        <Thead>
                            <Tr>
                                <Th>Número</Th>
                                <Th>Nome</Th>
                                <Th>Email</Th>
                                <Th>Password</Th>
                                <Th>Especialidade</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {medicos?.map((medico) => (
                                <Tr>
                                    <Td>{medico.number}</Td>
                                    <Td>{medico.nome}</Td>
                                    <Td>{medico.email}</Td>
                                    <Td>{medico.password}</Td>
                                    <Td>{medico.especialidade?.nome}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </div>
    );
};

export default Medicos;