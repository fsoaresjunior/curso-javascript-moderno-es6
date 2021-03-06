function sum(a, b) {
	return a + b;
}

// named export
// ter vários exports dentro de um arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves {sub} 
export function sub(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };

// método principal
// só pode ter um export default por arquivo
// importa com qualquer nome
// não precisa utilizar as chaves
export default sum;