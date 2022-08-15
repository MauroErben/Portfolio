import { Box, IconButton, HStack, Stack, useColorMode } from "@chakra-ui/react"
import MenuLink from "./menuLink"
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const MenuItems = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Stack
            w='full'
            direction={['column', 'row']}
            justify='space-between'
            align='center'
            spacing={4}
        >
            <HStack
                spacing={4}
            >
                <MenuLink href="#proyectos">Proyectos</MenuLink>
                <MenuLink href="#tecnologias">Tecnologías</MenuLink>
                <MenuLink href="#contacto">Contacto</MenuLink>
            </HStack>

            <Box>
                <IconButton
                    onClick={toggleColorMode}
                    size='lg'
                    variant='ghost'
                    aria-label="dark-mode"
                    icon={colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
                />
            </Box>
        </Stack>
    )
}
export default MenuItems