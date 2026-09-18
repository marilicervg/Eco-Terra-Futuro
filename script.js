const areas = {
    florestas: {
        icon: "🌳",
        label: "ÁREA 01",
        title: "Florestas",
        text: "O desmatamento reduz habitats, ameaça a biodiversidade e interfere no equilíbrio dos ecossistemas."
    },

    agua: {
        icon: "💧",
        label: "ÁREA 02",
        title: "Água",
        text: "A poluição e o desperdício podem comprometer a disponibilidade e a qualidade da água."
    },

    oceanos: {
        icon: "🌊",
        label: "ÁREA 03",
        title: "Oceanos",
        text: "Resíduos e poluição afetam os ecossistemas marinhos e diversas espécies."
    },

    cidades: {
        icon: "🏙️",
        label: "ÁREA 04",
        title: "Cidades",
        text: "O crescimento urbano traz desafios relacionados à poluição, mobilidade, resíduos e áreas verdes."
    },

    energia: {
        icon: "⚡",
        label: "ÁREA 05",
        title: "Energia",
        text: "Fontes renováveis podem contribuir para uma matriz energética mais sustentável."
    },

    residuos: {
        icon: "♻️",
        label: "ÁREA 06",
        title: "Resíduos",
        text: "Reduzir, reutilizar e reciclar ajudam a diminuir o volume de resíduos descartados."
    }
};

function mostrarArea(area) {

    const info = areas[area];

    document.getElementById("infoIcon").textContent = info.icon;
    document.getElementById("infoLabel").textContent = info.label;
    document.getElementById("infoTitle").textContent = info.title;
    document.getElementById("infoText").textContent = info.text;

    document.getElementById("areaInfo").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function resposta(escolha) {

    const resultado = document.getElementById("resposta");

    if (escolha === "preservar") {
        resultado.textContent =
            "✓ Essa ação pode contribuir para recuperar a vegetação e proteger o ecossistema.";
    } else {
        resultado.textContent =
            "⚠ Ignorar o problema permite que os impactos ambientais continuem aumentando.";
    }
}

const solucoes = {

    casa:
        "Economize água e energia, reduza desperdícios e separe corretamente os resíduos.",

    escola:
        "Reutilize materiais, evite desperdício de papel e incentive projetos de sustentabilidade.",

    cidade:
        "Valorize áreas verdes, transporte coletivo, mobilidade sustentável e descarte correto.",

    consumo:
        "Compre apenas o necessário, reutilize produtos e prefira opções que gerem menos resíduos."
};

function mostrarSolucao(tipo) {

    document.getElementById("solutionResult").textContent =
        solucoes[tipo];
}