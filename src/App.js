import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout"
import "./App.css"

function App() {
  return <Layout/>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

export default App
