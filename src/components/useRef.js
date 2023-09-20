import { useEffect, useRef, useState } from "react";

export default function UseRefComponent() {
  const [name, setName] = useState();
  const inputRef = useRef();
  const prevName = useRef();

  function focus() {
    inputRef.current.focus(); // quando você atualiza o ref ele não renderiza novamente a pagina
    inputRef.current.value = "Qualquer valor"; //como é feito com state por exemplo
  }

  useEffect(() => {
    prevName.current = name; //isso não causa uma renderização adicional
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name}, mas era {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
