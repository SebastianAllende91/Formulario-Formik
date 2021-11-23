import Formulario from "./pages/Formulario";
import MyProvider from "./context/provider";

function App() {
  return (
    <MyProvider>
      <div>
        <h1>Crud</h1>
        <Formulario />
      </div>
    </MyProvider>
  );
}

export default App;
