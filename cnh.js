// ----------------------------------------
// USUÁRIOS CADASTRADOS PARA CNH
// ----------------------------------------
const cnhUsuarios = [
  {
    cpf: "12345678900",
    senha: "12345678900",
    imagens: [
      "https://i.ibb.co/FqgFLywt/base-RGAPP1.png", // CNH frente
      "https://i.ibb.co/YTKHs0Gx/base-RGAPP2.png", // CNH verso
      "https://i.ibb.co/7dn3Symj/base-RGAPP3.png",
      "https://i.ibb.co/d45wYM05/base-RGAPP4.png"  // CNH espelho
    ]
  },
    {
    cpf: "15332501706",
    senha: "15332501706",
    imagens: [
      "https://i.ibb.co/Rkvz0Xdm/Captura-de-tela-2025-12-12-211016.png", // CNH frente
      "https://i.ibb.co/CqxBH1G/Captura-de-tela-2025-12-12-211027.png", // CNH verso
      "https://i.ibb.co/JjKfZL8B/Captura-de-tela-2025-12-12-211035.png",
      "https://i.ibb.co/5WbBK3Xg/Captura-de-tela-2025-12-12-211748.png"  // CNH espelho
    ]
  },
  {
    cpf: "11122233344",
    senha: "456",
    imagens: [
      "https://i.imgur.com/DDDDD.png",
      "https://i.imgur.com/EEEEE.png",
      "https://i.imgur.com/CCCCC.png",
      "https://i.imgur.com/CCCCC.png" 
    ]
  },
    {
    cpf: "70693907266",
    senha: "70693907266",
    imagens: [
      "https://i.ibb.co/pvMpzSqf/70693907266-cnh-1.png",
      "https://i.ibb.co/tPC98JNj/70693907266-cnh-2.png",
      "https://i.ibb.co/RkQ6svW6/70693907266-cnh-4.png",
      "https://i.ibb.co/yc3fCv3v/qr-code.png" 
    ]
  }
];


// ----------------------------------------
// LOGIN — TELA 1 (index2): Validar CPF
// ----------------------------------------
function entrarCpf() {
  let cpfInput = document.getElementById("cpf").value.trim();
  cpfInput = cpfInput.replace(/\D/g, ""); // deixa só números

  const user = cnhUsuarios.find(u => u.cpf === cpfInput);

  if (!user) {
    alert("CPF não encontrado!");
    return;
  }

  localStorage.setItem("cnhCpfTemp", cpfInput);
  window.location.href = "indexcnh3.html";
}




// ----------------------------------------
// LOGIN — TELA 2 (index3): Validar SENHA
// ----------------------------------------
function entrarSenha() {
  const senhaInput = document.getElementById("senha").value.trim();
  const cpfTemp = localStorage.getItem("cnhCpfTemp");

  if (!cpfTemp) {
    alert("Erro: CPF perdido. Comece novamente.");
    window.location.href = "indexcnh2.html";
    return;
  }

  const user = cnhUsuarios.find(
    u => u.cpf === cpfTemp && u.senha === senhaInput
  );

  if (!user) {
    alert("Senha incorreta!");
    return;
  }

  // Salva usuário logado completo
  localStorage.setItem("cnhUsuarioLogado", JSON.stringify(user));

  // Vai para a tela do meio
  window.location.href = "indexcnhtelameio.html";
}



// ----------------------------------------
// TELA DO MEIO — Abrir CNH (card)
// ----------------------------------------
function abrirCNH() {
  window.location.href = "indexcnh4.html";
}



// ----------------------------------------
// TELA FINAL — Exibir as CNHs (indexcnh4)
// ----------------------------------------
function carregarCNH() {
  const user = JSON.parse(localStorage.getItem("cnhUsuarioLogado"));

  if (!user) {
    alert("Faça login novamente.");
    window.location.href = "index2.html";
    return;
  }

  // Aplica as imagens
  document.getElementById("img1").src = user.imagens[0];
  document.getElementById("img2").src = user.imagens[1];
  document.getElementById("img3").src = user.imagens[2];
}
console.log("cnh.js carregado");



