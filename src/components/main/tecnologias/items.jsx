import { Icon, Text } from "@chakra-ui/react"
import TechnologyBox from "../../box/technologyBox"

const Item = ({ icon, color, name }) => {
    return (
        <TechnologyBox>
            <Icon fontSize={[40, 60]} color={color} as={icon} />
            <Text fontSize='md'>{name}</Text>
        </TechnologyBox>
    )
}
export default Item