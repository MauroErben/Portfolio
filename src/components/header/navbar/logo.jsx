import { Box, Image } from "@chakra-ui/react"

const Logo = () => {
    return (
        <Box>
            <Image
                display={['none', 'none', 'block']}
                src="/images/Logo.png"
                boxSize='100px'
                fit='cover'
            />
        </Box>
    )
}
export default Logo