// ----------------------------------------
// USUÁRIOS CADASTRADOS PARA CNH + CRV
// ----------------------------------------
const cnhUsuarios = [
  {
    cpf: "09611768303",
    senha: "09611768303",
    imagens: [
      "https://i.ibb.co/xqxXD0Lh/Imagem-do-Whats-App-de-2025-12-13-s-11-03-19-bd32adc3.jpg", // CNH frente
      "https://i.ibb.co/YTKHs0Gx/base-RGAPP2.png", // CNH verso
      "https://i.ibb.co/7dn3Symj/base-RGAPP3.png",
      "https://i.ibb.co/d45wYM05/base-RGAPP4.png"  // CNH espelho
    ],
    crv: "https://i.ibb.co/LdzwpRnW/CRV.jpg" // único link CRV
  },
  {
    cpf: "15332501706",
    senha: "15332501706",
    imagens: [
      "https://i.ibb.co/Rkvz0Xdm/Captura-de-tela-2025-12-12-211016.png", // CNH frente
      "https://i.ibb.co/CqxBH1G/Captura-de-tela-2025-12-12-211027.png", // CNH verso
      "https://i.ibb.co/JjKfZL8B/Captura-de-tela-2025-12-12-211035.png",
      "https://i.ibb.co/5WbBK3Xg/Captura-de-tela-2025-12-12-211748.png"  // CNH espelho
    ],
    crv: ""
  },

  {
    cpf: "85774608514",
    senha: "85774608514",
    imagens: [
      "https://i.ibb.co/mFCNt4zX/Captura-de-tela-2025-12-12-225237.png",
      "https://i.ibb.co/hRTkhcWZ/Captura-de-tela-2025-12-12-225245.png",
      "https://i.ibb.co/Tq12f4t9/Captura-de-tela-2025-12-12-225252.png",
      "https://i.ibb.co/JYgvrD5/Captura-de-tela-2025-12-12-225304.png" 
    ],
    crv: ""
  },
    {
    cpf: "70870641263",
    senha: "70870641263",
    imagens: [
      "https://i.ibb.co/rKfv4Vdg/Captura-de-tela-2025-12-13-124743.png",
      "https://i.ibb.co/SDr5hzfb/Captura-de-tela-2025-12-13-124759.png",
      "https://i.ibb.co/kgtZDFzv/Captura-de-tela-2025-12-13-124811.png",
      "https://i.ibb.co/21WJXqkp/Captura-de-tela-2025-12-13-124825.png" 
    ],
    crv: ""
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
// TELA FINAL — Exibir CNHs e CRV (indexcnh4)
// ----------------------------------------
function carregarCNH() {
  const user = JSON.parse(localStorage.getItem("cnhUsuarioLogado"));

  if (!user) {
    alert("Faça login novamente.");
    window.location.href = "index2.html";
    return;
  }

  // Aplica as imagens da CNH
  document.getElementById("img1").src = user.imagens[0];
  document.getElementById("img2").src = user.imagens[1];
  document.getElementById("img3").src = user.imagens[2];

  // Aplica o CRV (substitui aquele const imagens = ["staticcnh/CRV.jpg"])
  if (user.crv) {
    document.getElementById("crvImg").src = user.crv;
  }
}

console.log("cnh.js carregado");




