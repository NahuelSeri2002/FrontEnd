import { useState } from "react";

function Interruptor() {
  const [luzEncendida, setLuzEncendida] = useState(false);
  const [historialClicks, setHistorialClicks] = useState([]);

  const cambiarLuz = () => {
    const nuevoEstado = !luzEncendida;
    setLuzEncendida(nuevoEstado);

    const registro = {
      id: crypto.randomUUID(),
      mensaje: `Luz ${nuevoEstado ? "encendida" : "apagada"} a las ${new Date().toLocaleTimeString()}`,
    };

    setHistorialClicks([registro, ...historialClicks]);
  };

  return (
    <section className="tarjeta interruptor">
      <h2>Interruptor</h2>
      <div className="bombilla">{luzEncendida ? "🌞" : "🌙"}</div>
      <button onClick={cambiarLuz}>
        {luzEncendida ? "Apagar" : "Encender"}
      </button>
      <div className="historial">
        <h3>Regsitro de clicks</h3>
        {historialClicks.length === 0 ? (
          <p className="historial-vacio"> Todavia no tocaste el interruptor </p>
        ) : (
          <ul className="lista-historial">
            {historialClicks.map((registro) => (
              <li key={registro.id}>{registro.mensaje}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Interruptor;
