import { useMemo, useState, useCallback } from "react";
import List from "./list";

export default function UseCallbackComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    // por ser um objeto, os valores de refencia dele são sempre atualizados
    // mesmo que os valores sejam os mesmos, então é interessante usar o useMemo para que essa variavel
    // não seja atualizada a cada atualização de state da pagina
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const getItems = useCallback(
    (incrementor) => {
      // A principal diferença entre useMemo e useCallback é que
      // a variavel que está recebendo o hook, no caso do useCallback, ela está recebendo a função como um todo
      // e não somente o retorno, como é o que acontece com o useMemo

      // é interessante usar o callback quando uma função é criada e essa criação é muito lenta
      return [number + incrementor, number + 1, number + 2];
    },
    [number]
  );

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
      <List getItems={getItems} />
      <div style={themeStyles}>{"asd"}</div>
    </>
  );
}
