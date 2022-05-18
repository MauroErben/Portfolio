import { Icon, VStack, Text } from "@chakra-ui/react"
import TechnologyBox from "../../box/technologyBox"

const Item = ({ icon, color, name }) => {
    return (
        <TechnologyBox>
            <VStack
                spacing={[2, 4]}
            >
                <Icon fontSize={60} color={color} as={icon} />
                <Text fontSize='md'>{name}</Text>
            </VStack>
        </TechnologyBox>
    )
}
export default Item