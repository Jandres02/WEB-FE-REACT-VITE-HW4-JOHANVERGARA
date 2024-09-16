const dofaData = [
  {
    id: 1,
    type: "Debilidades",
    items: [
      { id: 1, description: "Dependencia de proveedores externos para componentes clave." },
      { id: 2, description: "Falta de opciones avanzadas de personalización del software." },
      { id: 3, description: "Menor visibilidad de marca en comparación con competidores grandes." },
      { id: 4, description: "Limitada presencia de tiendas físicas para experiencia de cliente." },
      { id: 5, description: "Desafíos en la retención de clientes debido a la alta competencia." }
    ]
  },
  {
    id: 2,
    type: "Oportunidades",
    items: [
      { id: 1, description: "Expansión en mercados emergentes con baja penetración de wearables." },
      { id: 2, description: "Creciente interés en la salud personal y dispositivos de monitoreo." },
      { id: 3, description: "Integración con ecosistemas de hogar inteligente." },
      { id: 4, description: "Aumento de la demanda de dispositivos fitness debido a las tendencias de bienestar." },
      { id: 5, description: "Potencial para ofrecer servicios de suscripción complementarios." }
    ]
  },
  {
    id: 3,
    type: "Fortalezas",
    items: [
      { id: 1, description: "Innovación constante en tecnología de wearables." },
      { id: 2, description: "Interfaz de usuario intuitiva y fácil de usar." },
      { id: 3, description: "Alta duración de batería en comparación con competidores." },
      { id: 4, description: "Amplia gama de modelos y precios accesibles." },
      { id: 5, description: "Colaboraciones con aplicaciones de salud reconocidas." }
    ]
  },
  {
    id: 4,
    type: "Amenazas",
    items: [
      { id: 1, description: "Competencia intensa de marcas como Apple y Samsung." },
      { id: 2, description: "Cambios en regulaciones sobre privacidad y protección de datos." },
      { id: 3, description: "Fluctuaciones en la disponibilidad de componentes tecnológicos." },
      { id: 4, description: "Sensibilidad al precio en ciertos mercados, afectando las ventas." },
      { id: 5, description: "Creciente oferta de wearables de bajo costo que compiten en funcionalidad." }
    ]
  }
];

export default function DOFA() {
  return (
    <section id="dofa" className="p-4">
      <h2 className="text-xl font-bold mb-5">1. Diagnóstico Actual</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dofaData.map((category) => (
          <div key={category.id} className="bg-gray-100 border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">{category.type}</h3>
            <ul className="list-disc list-inside space-y-2">
              {category.items.map((item) => (
                <li key={item.id} className="text-gray-700">{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
