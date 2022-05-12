import { Container } from '@chakra-ui/react'
import Header from './components/header'
import Main from './components/main'
import './App.css'

function App() {
  return (
    <Container
      maxW='container.md'
      p={4}
    >
      <Header />
      <Main />
    </Container>
  )
}
export default App
