import { Stack } from "@chakra-ui/react"
import MenuLink from "./menuLink"

const MenuItems = () => {

    return (
        <Stack 
            direction={'row'}
            spacing={4}
        >
            <MenuLink href="#proyectos">Proyectos</MenuLink>
            <MenuLink href="#tecnologias">Tecnologías</MenuLink>
            <MenuLink href="#contacto">Contacto</MenuLink>
        </Stack>
    )
}
export default MenuItems