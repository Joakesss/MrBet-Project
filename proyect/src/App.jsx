import { Helmet } from 'react-helmet-async'
import Header from './Header.jsx'



import Body from './Body.jsx'


import Footer from './Footer.jsx'

function App() {

  return (
    <>
        <Helmet>
          <title>Mr.Bet | Juega seguro</title>
          <meta name="description" content="Registrate en Mr. Bet, conoce los beneficios y aprende cómo funciona nuestra plataforma." />
        </Helmet>
        
        <Header/>
        <Body/>
        <Footer/>
    </>
  )
}

export default App
