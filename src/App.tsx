
import './App.css'
import Contact from './components/Contact'
import Cronograma from './components/Cronograma'
import Inscripciones from './components/Inscripciones'

import Layout from './components/Layout'
import News from './components/News'
import Patreons from './components/Patreons'
import Staff from './components/Staff'

function App() {
  return (
    <Layout>
      <Cronograma />
      <Staff />
      <News />
      <Patreons />
      <Inscripciones />
      <Contact />
    </Layout>
  )
}

export default App
