for (let i = 1; i <= 10; i++) {
    console.log(i)
}


let num = 2;
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(num)
    }
    num++
}


let senha = "12345"
do {
    if (senha == "1234") {
        console.log("Bem vindo ao sistema")
    } else {
        console.log("Senha errada.")
    }
} while (senha != "1234")