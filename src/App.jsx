import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="container">
      <div className="card-component">
        <img className="qr-image" src={qr} alt="qr-code-image" />
        <div className="card-header">
          <h3>Improve your front-end skills by building projects</h3>
        </div>
        <div className="card-description">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
