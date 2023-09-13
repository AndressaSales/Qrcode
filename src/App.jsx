import { useState } from "react";
import QRCode from "react-qr-code";
import './App.css';
function App(){
    const [texto, setTexto] = useState('');

    return(
        <div className="conte">
            <QRCode value={texto} />
            <input type="text" 
                value={texto} onChange={(Element) => setTexto(Element.target.value)} 
                placeholder="Digite seu link...."/>
        </div>
    );
}
export default App;