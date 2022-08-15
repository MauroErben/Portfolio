import { Stack } from "@chakra-ui/react"
import Logo from "./Logo"
import MenuItems from "./MenuItems"

const NavBar = () => {
    return (
        <Stack
            //p={2}
            justify={['center', 'stretch']}
            direction={['column', 'column', 'row']}
            align='center'
            borderBottom='1px'
            borderColor='#0049ae'
        >
            <Logo />
            <MenuItems />
        </Stack>
    )
}
export default NavBar