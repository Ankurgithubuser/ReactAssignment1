import "./App.css";
import Button from "./Button.js";


function App() {
    return (
        <Button text="Click me!" onClick={() => console.log("Button clicked")} />


    );
}

export default App;