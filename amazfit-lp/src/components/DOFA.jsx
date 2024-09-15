const dofaData = [
    { type: "Debilidades", items: ["Falta de publicidad", "Poca variedad de productos", "Precios altos"] },
    { type: "Oportunidades", items: ["Demanda creciente", "Expansión a nuevos mercados", "Colaboraciones con influencers"] },
    { type: "Fortalezas", items: ["Alta calidad de productos", "Buena atención al cliente", "Entrega rápida"] },
    { type: "Amenazas", items: ["Competencia", "Cambio en tendencias tecnológicas", "Inestabilidad económica"] }
  ];
  
  export default function DOFA() {
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold">Diagnóstico Actual</h2>
        <div className="grid grid-cols-2 gap-4">
          {dofaData.map((category, idx) => (
            <div key={idx} className="border p-4">
              <h3 className="font-bold">{category.type}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  