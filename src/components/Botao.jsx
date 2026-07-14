function Botao({ text, cor, onClick}) {
    return <button style={{
        width: "30px",
        height: "30px",
        border: "none",
        borderRadius: "5px",
        background: cor
    }} onClick={onClick}>
        {text}
    </button>
}

export default Botao;