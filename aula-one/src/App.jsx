import logo from './logo.svg';
import './App.css';

function App() {
    // var name = 'Miguel'
    // let lastName = 'Silva'
    // const middle_name = 'Zacharias Alberto Nunes Jonas'
    // let fatia_texto = middle_name.split(" ")
    // console.log(fatia_texto)
    // console.table(fatia_texto)

    let full_name = "Maria Clara de Jose Adalberto"
    let array_string = full_name.split(" ")

    // let name = array_string[0]
    // let lastname = array_string[3]

    // console.log(array_string)
    // console.table(array_string)
    // console.log(name)
    // console.log(lastname)
    // console.log(array_string.length)

    let name = array_string[0]
    let last_name = array_string[array_string.length - 1]
    console.log(last_name)


    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>{`Olá ${name} ${last_name}`}</p>
            {/*<p>                    {`Olá, ${name} ${middle_name} da ${lastName}`}                </p>*/}
            {/*<p>{fatia_texto}</p>*/}
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>);
}

export default App;
