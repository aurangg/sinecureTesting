import logo from "./logo.svg";
import "./App.css";
import Spline from "@splinetool/react-spline";
function App() {
  return (
    <section style={{ backgroundColor: "#151515", height: "100vh" }}>
      <div
        className="container-fluid"
        style={{ position: "relative", height: "100%" }}
      >
        <div className="row" style={{ height: "100%" }}>
          <div className="col-4">
            <div className="heading-align">
              <h1 className="heading">Welcome!</h1>
            </div>
          </div>
          <div className="col-8">
            <Spline scene="https://prod.spline.design/wj5uP1gcl20KJPaM/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
