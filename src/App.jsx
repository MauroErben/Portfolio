import { Container } from '@chakra-ui/react'
import Header from './components/header/Index'
import Main from './components/main/Index'
import './App.css'

function App() {
  return (
    <Container
      maxW='container.lg'
      p={4}
    >
      <Header />
      <Main />
    </Container>
  )
}
export default App
