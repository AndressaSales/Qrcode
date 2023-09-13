import React from "react";
import ReactDOM from "react-dom";
import App from './App';
class Conteiner extends React.Component{
    render(){
        return(
            <div>
                <App />
            </div>
        );
    }
}
ReactDOM.render(<Conteiner />, document.getElementById('root'));