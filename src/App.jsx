import "./App.scss";
import { Nabvar } from "./components/Nabvar";

function App() {
  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7336b4ac";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la petición: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Puedes hacer lo que necesites con los datos aquí, como mostrarlos en la página
    })
    .catch((error) => {
      console.error("Ha ocurrido un error al realizar la petición:", error);
    });
  return (
    <>
      <Nabvar />
    </>
  );
}

export default App;
