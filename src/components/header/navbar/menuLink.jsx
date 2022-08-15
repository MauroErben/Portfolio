import { Link } from "@chakra-ui/react"

const MenuLink = ({ href='/', children }) => {
    return (
        <Link
            //color='blue.500'
            fontWeight='medium'
            fontSize='sm'
            href={href}
        >
            {children}
        </Link>
    )
}
export default MenuLink