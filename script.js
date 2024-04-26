if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  document.body.classList.add("preloader");

  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("preloader");

      AOS.init();
    }, 3500);
  });
}

// Verifica se o navegador suporta scroll suave
if ("scrollBehavior" in document.documentElement.style) {
  // Se suporta, adiciona a classe 'smooth-scroll' ao body
  document.body.classList.add("smooth-scroll");
} else {
  // Se não suporta, adiciona a classe 'no-smooth-scroll' ao body
  document.body.classList.add("no-smooth-scroll");
}

// Função para verificar se o scroll suave é suportado
function scrollToTop() {
  if ("scrollBehavior" in document.documentElement.style) {
    // Se suporta, faz o scroll suave para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // Se não suporta, faz o scroll padrão para o topo
    window.scrollTo(0, 0);
  }
}
