import "./App.css";
import UseStateHook from "./components/useState";
import UseEffectHook from "./components/useEffect";
import ThemeProvider from "./components/UseContext/useContext";
import UseContextComponent from "./components/UseContext/useContextComponent";
import UseRefComponent from "./components/useRef";
import UseMemoComponent from "./components/useMemo";
import { useState } from "react";
import UseCallbackComponent from "./components/UseCallback/useCallback";
import UseReducerComponent from "./components/UseReducer/useReducer";

function App() {
  const [showData] = useState(false);
  return (
    <ThemeProvider>
      {showData && (
        <>
          <UseStateHook />

          <UseEffectHook />

          <UseContextComponent />

          <UseRefComponent />

          <UseMemoComponent />

          <UseCallbackComponent />
        </>
      )}
      <UseReducerComponent />
    </ThemeProvider>
  );
}

export default App;
