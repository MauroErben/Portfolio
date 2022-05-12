import { Stack } from "@chakra-ui/react"
import Logo from "./logo"
import MenuItems from "./menuItems"

const NavBar = () => {
    return (
        <Stack
            p={2}
            justify={['center', 'stretch']}
            direction={['column', 'column', 'row']}
            align='center'
            boxShadow='sm'
        >
            <Logo />
            <MenuItems />
        </Stack>
    )
}
export default NavBar