function Interruptor({state}) {
    return (
        <div>
            <h1>{state ? 'Ligado' : 'Desligado'}</h1>
        </div>
    )    
}

export default Interruptor