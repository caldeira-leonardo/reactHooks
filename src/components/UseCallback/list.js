import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setitems] = useState([]);
  useEffect(() => {
    setitems(getItems(3));
    console.log("Updating items"); //TODO remove logs
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
}
