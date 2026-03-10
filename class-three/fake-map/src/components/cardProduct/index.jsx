export default function CardProduct(props) {
    const {title, price, image, description, category} = props;

    return (
        <div>
            <img
                src={image.src}
                alt={image.alt}
            />

            <div>
                <span>{category}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <strong>R$ {price}</strong>
            </div>
        </div>

    )
}

// export default function CardProduct(title, price, image, description, category) {
//
//     return (
//         <div>
//             <img
//                 src={image.src}
//                 alt={image.alt}
//             />
//
//             <div>
//                 <span>{category}</span>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//                 <strong>R$ {price}</strong>
//             </div>
//         </div>
//
//     )
// }