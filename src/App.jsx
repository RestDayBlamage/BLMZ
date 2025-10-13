import LiquidEther from "./components/LiquidEther";
import "./App.css";
import blmz from "./icons/blmz.png";

function App() {
  return (
    <>
      {/* LiquidEther jako tło na całą stronę */}
      <LiquidEther
        colors={['#ff3cac', '#3cefff', '#f9e487']}
        mouseForce={60}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Nawigacja */}
      <nav className="navbar" style={{ position: 'relative', zIndex: 1 }}>
        <img src={blmz} alt="Logo BLMZ" className="logo" />
        <h1 className="title">MAIN 7.0</h1>
      </nav>

    </>
  );
}

export default App;
