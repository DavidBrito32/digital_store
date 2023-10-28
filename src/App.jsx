import Ways from "./routes";
import {AuthContextProvider} from './context/AuthContexto/index';


const App = () => {

  return (
    <>
    <AuthContextProvider>
      <Ways />
    </AuthContextProvider>
    </>
  )
}

export default App
