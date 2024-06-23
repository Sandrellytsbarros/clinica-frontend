import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchConsultas, handleCreateSchedule } from "../utils/Resource";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar.js"
import moment from 'moment';

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

const Consultas = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [consultas, setConsultas] = useState();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
		fetchConsultas(setConsultas);
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
                <Text fontSize='3xl' mb={"30px"} mt={"30px"}>Consultas</Text>
                <Button colorScheme='teal' mb={"50px"}>Adicionar</Button>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal' size='lg' mb={"200px"}>
                        <Thead>
                            <Tr>
                                <Th>Número</Th>
                                <Th>Data</Th>
                                <Th>Médico</Th>
                                <Th>Paciente</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {consultas?.map((consulta) => (
                                <Tr>
                                    <Td>{consulta.id}</Td>
                                    <Td>{moment(consulta.data).format('DD/MM/yyyy')}</Td>
                                    <Td>{consulta.medico?.nome}</Td>
                                    <Td>{consulta.paciente?.nome}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </div>
    );
};

export default Consultas;