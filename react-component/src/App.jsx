import Breadcrumb from "./components/breadcrumb/breadcrumb";
import Modal from "./components/modal/modal";

function App() {
    return (<>
        <h1>Componentes em react</h1>
        <p>Componente com CSS puro:</p>
        <Breadcrumb/>
        <p>Componente com modules:</p>
        <Modal/>
        <p>Componente com styled-components:</p>

    </>);
}

export default App;
