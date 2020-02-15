function randomWord() {	
	return fetch("<API URL HERE>", {method: 'GET', mode: 'cors', headers: {'Content-Type': 'application/json'}})		
}

export { randomWord };
