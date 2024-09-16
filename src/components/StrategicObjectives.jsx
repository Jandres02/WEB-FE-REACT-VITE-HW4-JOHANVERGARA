const objectives = [
  { id: 1000, goal: "Aumentar las ventas", target: 500000, progress: 250000, compliance: 50 },
  { id: 1001, goal: "Expandir a mercados internacionales", target: 1000000, progress: 50000, compliance: 5 },
  { id: 1002, goal: "Mejorar la atención al cliente", target: 1000, progress: 900, compliance: 90 },
  { id: 1003, goal: "Lanzar nuevos productos", target: 10, progress: 3, compliance: 30 },
  { id: 1004, goal: "Reducir costos operativos", target: 200000, progress: 70000, compliance: 35 }
];

export default function StrategicObjectives() {
  return (
    <section id="strategic-objectives" className="p-4">
      <h2 className="text-xl font-bold mb-5">3. Objetivos Estratégicos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-slate-900">
              <th className="border border-gray-300 px-4 py-2 text-white">Código</th>
              <th className="border border-gray-300 px-4 py-2 text-white">Objetivo</th>
              <th className="border border-gray-300 px-4 py-2 text-white">Meta</th>
              <th className="border border-gray-300 px-4 py-2 text-white">Avance</th>
              <th className="border border-gray-300 px-4 py-2 text-white">Cumplimiento (%)</th>
              <th className="border border-gray-300 px-4 py-2 text-white">Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => {
              let stateClass = "text-green-500"; 
              let stateLabel = "Exitoso";

              if (obj.compliance <= 35) {
                stateClass = "text-red-500";
                stateLabel = "Crítico";
              } else if (obj.compliance <= 75) {
                stateClass = "text-orange-500";
                stateLabel = "Aceptable";
              }

              return (
                <tr key={obj.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{obj.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{obj.goal}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {obj.target.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {obj.progress.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{obj.compliance}%</td>
                  <td className={`border border-gray-300 px-4 py-2 text-center ${stateClass}`}>
                    {stateLabel}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
