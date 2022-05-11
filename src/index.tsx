import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import { AppWrapper } from "./components/AppWrapper";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
    <BrowserRouter>
        <AppWrapper />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
