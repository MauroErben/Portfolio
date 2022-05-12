import { Icon } from "@chakra-ui/react"

const Item = ({ icon, color }) => {
    return(
        <Icon fontSize={40} color={color} as={icon}/>
    )
}
export default Item