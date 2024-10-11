import { useState } from "react";
import Cover from "./pages/Cover"
import MainPage from "./pages/MainPage";

function App() {
  const [cover, setCover] = useState(true);
  return cover ? (
    <Cover setCover={setCover} />
  ) : (
    <MainPage setCover={setCover} />
  );
}

export default App
