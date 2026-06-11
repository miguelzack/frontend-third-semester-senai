import './App.css'
import {useState} from "react";
import axios from "axios";

function App() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState(null)

    const login = async () => {
        try {
            const resposta = await axios.post("http://localhost:3000/login", {
                email, senha
            })

            const token = resposta.data.token

            localStorage.setItem("token", token)
            alert("Login realizado")
        } catch {
            alert("Login inválido")
        }
    }

    const buscar = async () => {
        const token = localStorage.getItem("token")
        const resposta = await axios.get("http://localhost:3000/perfil", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        setUsuario(resposta.data.usuario)
        console.log(usuario)
    }

    return (<>
        <h2>Login</h2>
        <input type="email" placeholder="Informe o seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Informe sua senha" value={senha}
               onChange={(e) => setSenha(e.target.value)}/>
        <button onClick={login}>Entrar</button>
        <button onClick={buscar}>Buscar</button>
    </>)
}

export default App
