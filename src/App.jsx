import React from 'react';
import DataTable from './components/DataTable'; // Verifique o caminho do arquivo

function App() {
  const data = [
    { id: 1, nome: "Ana", idade: 28 },
    { id: 2, nome: "Bruno", idade: 34 },
    { id: 3, nome: "Carlos", idade: 25 },
    { id: 4, nome: "Diana", idade: 29 },
    { id: 5, nome: "Eduardo", idade: 40 },
  ];

  return (
    <div>
      <h1>Exemplo de Tabela</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
