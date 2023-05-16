import './App.css';
import { ComponentHijo } from './components/componenteHijo1/ComponentHijo';

function App() {
  return (
    <div className="parent">
      <h1>Componentes saludando</h1>
      <ComponentHijo texto={'Tobias'} />
      <ComponentHijo texto={'Lourdes'} />
      <ComponentHijo texto={'Luciano'} />
      <ComponentHijo texto={'Lucas'} />
      <ComponentHijo texto={'David'} />
      <ComponentHijo texto={'Camila'} />
    </div>
  );
}

export default App;
