import Cards from "./Cards"

export default function Deck({play, virar}) {
    const questionsNumber = ["Pergunta 1","Pergunta 2","Pergunta 3","Pergunta 4","Pergunta 5","Pergunta 6","Pergunta 7","Pergunta 8",]
    const questionAndAnswer = [
        {Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript"},
        {Q: "O React é __", R: "uma biblioteca JavaScript para construção de interfaces"},
        {Q: "Componentes devem iniciar com __", R: "letra maiúscula"},
        {Q: "Podemos colocar __ dentro do JSX", R: "expressões"},
        {Q: "O ReactDOM nos ajuda __", R: "interagindo com a DOM para colocar componentes React na mesma"},
        {Q: "Usamos o npm para __", R: "gerenciar os pacotes necessários e suas dependências"},
        {Q: "Usamos props para __", R: "passar diferentes informações para componentes"},
        {Q: "Usamos estado (state) para __", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    return(
        <>
            {questionsNumber.map((question, i) => 
                <Cards key={i} question={question} questionAndAnswer={questionAndAnswer} i={i} play={play} virar={virar}></Cards>)
            }
        </>
    )
}
