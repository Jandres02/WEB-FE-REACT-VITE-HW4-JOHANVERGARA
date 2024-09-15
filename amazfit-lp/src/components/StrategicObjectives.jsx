const objectives = [
    { id: 1000, goal: "Aumentar las ventas", target: 500, progress: 250, compliance: 50 },
    { id: 1001, goal: "Expandir a mercados internacionales", target: 1000000, progress: 50000, compliance: 5 },
    { id: 1002, goal: "Mejorar la atención al cliente", target: 1000, progress: 900, compliance: 90 },
    { id: 1003, goal: "Lanzar nuevos productos", target: 150000, progress: 150000, compliance: 100 },
  ];
  
  export default function StrategicObjectives() {
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold">Objetivos Estratégicos</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Código</th>
              <th>Objetivo</th>
              <th>Meta</th>
              <th>Avance</th>
              <th>Cumplimiento</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => {
              let stateClass = "text-green-500";
              if (obj.compliance <= 35) stateClass = "text-red-500";
              else if (obj.compliance <= 75) stateClass = "text-orange-500";
  
              return (
                <tr key={obj.id}>
                  <td>{obj.id}</td>
                  <td>{obj.goal}</td>
                  <td>{obj.target}</td>
                  <td>{obj.progress}</td>
                  <td>{obj.compliance}%</td>
                  <td className={stateClass}>{obj.compliance <= 35 ? "Crítico" : obj.compliance <= 75 ? "Aceptable" : "Exitoso"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
  