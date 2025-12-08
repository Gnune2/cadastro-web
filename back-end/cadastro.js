//link do servidor node express
const BACKEND_URL = "http://localhost:3000/cadastro";
document.addEventListener("DOMContentLoaded", () => {
    const cadastroForm = document.getElementById("cadastro-form");
    //função quando o usuário clicar no botão submit
    cadastroForm.addEventListener("submit", async (event) => {
        // evita que a página recarregue e perca os dados do formulário
        event.preventDefault();
        // le os dados do formulário com a função FormData e vincula a uma variavel
        const formData = new FormData(cadastroForm);
        const userData = {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        //feedback para o usuário que os dados estão sendo processados
        const submitButton = cadastroForm.querySelector('button[type="submit"]')
        submitButton.textContent = "A processar...";
        submitButton.disabled = true;
        try {
            const response = await fetch(BACKEND_URL,{
                method: "POST",
                headers: {
                    //informa para o backend que o body é json
                    "Content-Type": "application/json",
                },
                //transforma
                body: JSON.stringify(userData),
            });
            const result = await response.json();
            //mensagem para o usuário
            if (response.ok){
                //sim eu coloquei o emoji pra ficar mais legal
                alert('✅ Sucesso! ' + result.massage + "\nAgora faça o login")
                // Redirecionar para a página de login após o cadastro
                window.location.href = '/front-end/html/login.html';
            }else{
                lert('❌ Erro no Cadastro: ' + (result.error || 'Ocorreu um erro desconhecido.'));
            }
        } catch (error) {
            // erro na conexao
            console.error('Erro de conexão ou requisição:', error);
            alert('🚨 Falha ao conectar ao servidor. Verifique se o backend está a correr (http://localhost:3000).');
        } finally {
            //Restaura o Botão, independentemente do sucesso ou falha
            submitButton.textContent = 'Cadastrar';
            submitButton.disabled = false;
        }
    })
})