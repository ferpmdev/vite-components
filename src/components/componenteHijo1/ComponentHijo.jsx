import style from './styles.css';

export const ComponentHijo = ({ texto }) => {
  console.log(texto);
  return (
    <div className="ch">
      <h2>Hola {texto}</h2>
    </div>
  );
};
