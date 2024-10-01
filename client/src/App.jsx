import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './Todo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
     </BrowserRouter>
     
  )
}

export default App
