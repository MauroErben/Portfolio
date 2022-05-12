import { Link } from "@chakra-ui/react"

const MenuLink = ({ href='/', children }) => {
    return (
        <Link
            color='gray.500'
            fontSize='sm'
            href={href}
        >
            {children}
        </Link>
    )
}
export default MenuLink