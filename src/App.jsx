import './App.css'
import Pestañas from './components/Pestañas'

function App() {
  return (
    <>
      <h1>Pestañas</h1>
      <Pestañas titulo={['Pestaña 1', 'Pestaña 2', 'Pestaña 3']} contenido={['Contenido de la pestaña 1', 'Contenido de la pestaña 2', 'Contenido de la pestaña 3']} />
    </>
  )
}

export default App
