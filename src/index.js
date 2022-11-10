import React from "react";
import  ReactDOM  from "react-dom/client";
import Home from "./pages";


const root = ReactDOM.createRoot(document.getElementById('root'))

function Tabla2() {
    document.write("<center>")
        document.write("<h1> Tablas de multiplicar </h1>")
        document.write("<h2> 2 </h2>")
        document.write("<br></br>")
        document.write("<table  border=1 WIDTH=50%>");
            for(var i = 1; i<10; i++){
                var multi = 2 * i;
                document.write('<tr>');
                document.write('<td>' + 2 + "</td>");
                document.write("<td> x </td>");
                document.write('<td>' + i + "</td>");
                document.write("<td> = </td>");
                document.write('<td>' + multi + "</td>");
                document.write('</tr>');
            }
        document.write("</table>");
        document.write("</center>")
        document.write("<a href=Tabla3.js>Siguiente</a>")
  
}

root.render(
    <Home />
)