import "./ButtonCss.css"

export default function ButtonCss({bgColor, label, color}) {
    return (<button type="button"
                    style={{
                        backgroundColor: bgColor,
                        color: color}}>
            {label}
        </button>)
}