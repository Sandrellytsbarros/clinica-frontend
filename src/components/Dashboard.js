import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar.js"

import {
	Flex,
} from "@chakra-ui/react";

const Dashboard = () => {
	const navigate = useNavigate();
	const { isAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/");
		}
	}, [navigate]);

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
			</Flex>
		</div>
	);
};

export default Dashboard;