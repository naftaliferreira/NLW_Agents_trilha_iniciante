const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form');

const perguntarAI = async (question, game, apiKey) => {
    const model = "gemini-2.0-flash"; // trocar nome do modelo Gemini quando for necessário usar versão mais atualizada
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?=${apiKey}`;
    const pergunta = ``;

    const contents = [{
       parts: [{
        text: pergunta
       }] 
    }];

    // Chamada API
    const response = await fetch(geminiURL, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }
    })
}

const enviarFormulario = (event) => {
    event.preventDefault();
    const apiKey = apiKeyInput.value;
    const game = gameSelect.value;
    const question = questionInput.value;

    console.log({apiKey, game, question})

    if(apiKey == '' || game == '' || question == '') {
        alert('Por favor, preencha todos os campos');
        return 
    } 

    askButton.disabled = true;
    askButton.textContent = 'Perguntando...'
    askButton.classList.add('loading');

    try {
        // perguntar para a IA
        perguntarAI();

    } catch(error) {
        console.log('Erro: ', error)

    } finally {
        askButton.disabled = false;
        askButton.textContent = 'Perguntar';
        askButton.classList.remove('loading');
    }
}
form.addEventListener('submit', enviarFormulario)

perguntarAI(question, game, apiKey);
