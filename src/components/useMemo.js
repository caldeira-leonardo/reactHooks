import { useEffect, useMemo, useState } from "react";

export default function UseMemoComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number); // só irá rodar essa função quando for necessário, nesse caso, quando o number for alterado.
    // assim a aplicação não fica totalmente lenda, somente esse componente é lento.

    // o use memo pega parte da memoria para salvar os valores antigos, se for usado de maneira errada
    // pode causar lentidão no codigo.

    // é melhor usar quando a aplicação tem uma função que é lenta e para não atrasar o resto da aplicação
    // essa função é chamada no use memo, assim somente ela será lenta e não toda o componente.
  }, [number]);

  const themeStyles = useMemo(() => {
    // por ser um objeto, os valores de refencia dele são sempre atualizados
    // mesmo que os valores sejam os mesmos, então é interessante usar o useMemo para que essa variavel
    // não seja atualizada a cada atualização de state da pagina
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("thema alterou"); //TODO remove logs
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Muda Tema
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("chamando a funcção de slow");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
