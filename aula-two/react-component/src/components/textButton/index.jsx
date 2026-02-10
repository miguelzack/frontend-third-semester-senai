export default function TextButton(params) {
    console.log(params)

    let obj = {
        name: "João",
        age: 30,
        address: "rua joao pedro",
        phoneNumber: "11967627389"
    }

    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.address)
    console.log(obj.phoneNumber)

    let { name, age } = obj;
    console.log(name)
    console.log(age)

    return (
        <button type="button">
            {params.label}
        </button>
    )
}