import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'

import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        toast.success("Deslogado com sucesso");
        logout();
        navigate("/");
    };

    return (
        <div>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'100px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav />
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={'a'}
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'lg'}
                            fontWeight={600}
                            color={'white'}
                            bg={'pink.400'}
                            onClick={handleLogout}
                            _hover={{
                                bg: 'pink.300',
                            }}>
                            Sair
                        </Button>
                    </Stack>
                </Flex>
            </Box>
        </div>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Box
                        as="a"
                        p={2}
                        fontSize={'xl'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}>
                        <Link className='link' to={navItem.href}>
                            {navItem.label}
                        </Link>
                        
                    </Box>
                </Box>
            ))}
        </Stack>
    )
}

const NAV_ITEMS = [
    {
        label: 'Médicos',
        href: '/medicos'
    },
    {
        label: 'Pacientes',
        href: '/pacientes'
    },
    {
        label: 'Consultas',
        href: '/consultas'
    }
]

export default Navbar;
