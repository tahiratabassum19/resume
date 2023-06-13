import UploadButton from "./UploadButton";
import "./App.css";
import HamburgerMenu from "./HamburgerMenu";


function App() {
  return (
    <div>
      <HamburgerMenu />


      <h1 className="h1">BeyondParse</h1>
      <h2 className="subheader">Enter your resume here</h2>
      <UploadButton></UploadButton>

     
    <img
    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
    alt="Image description"
    className="left-image"
  />
  <p className="paragraph">Elevate Your Reusme & Recruiting To The Highest Quality Using Our Reliable Resume Parser</p>
  </div>
  );
}


export default App;
