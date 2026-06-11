import './App.css'
import {useState} from "react";
import axios from "axios";

function App() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    const login = async () => {
        try {
            const resposta = await axios.post("http://localhost:3000/login", {
                email, senha
            })

            const token = resposta.data.token

            localStorage.setItem("token", token)
            alert("Login realizado")
        }
        catch {
            alert("Login inválido")
        }
    }

    return (<>
        <h2>Login</h2>
        <input type="email" placeholder="Informe o seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Informe sua senha" value={senha}
               onChange={(e) => setSenha(e.target.value)}/>
        <button onClick={login}>Entrar</button>
    </>)
}

export default App
