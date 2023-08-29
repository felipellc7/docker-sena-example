import logo_sena from "./logo-sena.png"

const App = () => {
  return (
    <div style={{display: "grid", placeItems: "center", width: "100%", height: "100vh", gap: "1rem"}}>
      <img src={logo_sena} alt="logo sena" width={300}/>
      <h4><a href="https://felipellerena.vercel.app/" target="_blank" rel="noreferrer">Felipe Llerena</a></h4>
      <h5>DESPLIEGUE DE APLICACIONES Y SERVICIOS EN CONTENEDORES DOCKER (2808733)</h5>
      <h6>2023</h6>
    </div>
  );
}
 
export default App;