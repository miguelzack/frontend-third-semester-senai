import {Link} from "react-router-dom";

export const Home = () => {
  return (
      <>
        <h1>Página Home</h1>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </>
  )
}