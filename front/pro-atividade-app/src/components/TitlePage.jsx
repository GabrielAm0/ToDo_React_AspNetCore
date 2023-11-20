import React from 'react'
import {Button} from "react-bootstrap";

export default function TitlePage({titulo, children}) {
	return ( 
		<div className="d-flex justify-content-between align-content-endmt-2 pb-3 border-bottom border-dark">
			<h1 className="p-0 m-0">{titulo}</h1>
			{children}
		</div>
	)
}
