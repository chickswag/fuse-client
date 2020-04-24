import React from "react";
import ReactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/react-fontawesome"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const element = <h1> <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />Hello world</h1>
ReactDom.render(element, document.getElementById('root'))
