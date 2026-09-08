const nombres = ["Lucas", "Ana", "Marta", "Lucas"];

function ListaNombres() {
  return (
    <section className="tarjeta">
        <h2>Nombres</h2>
        <ul className="lista-nombres">
            {(nombres.map((nombre, index) => 
                <li key={index}>{nombre}</li>   
            ))}
        </ul>
    </section>
  )
}

export default ListaNombres
