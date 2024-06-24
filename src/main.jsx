import React from "react";
import ReactDOM from "react-dom/client";
import {Routers} from "./routes/routers.jsx";
import {CounterCellsProvider} from "./context/CounterCellsContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterCellsProvider>
            <Routers/>
        </CounterCellsProvider>
    </React.StrictMode>,
)
