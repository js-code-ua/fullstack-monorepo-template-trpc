import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { client } from "./rpc"

function App() {
    const [msg, setMsg] = useState<string>("Loading...");

    useEffect(() => {
        client.greeter.getHelloMessage
            .query({ firstName: 'John', lastName: 'Doe' })
            .then(({ data }) => setMsg(data))
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{msg}</p>
            </header>
        </div>
    );
}

export default App;
