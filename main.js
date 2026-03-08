const WHATSAPP = "5511970816182";

const products = {

    tendasTradicionais: {
        title: "Tendas tradicionais",
        text: "Escolha o tamanho ideal para seu evento.",
        options: [
            { name: "TENDA 2X2 PIRAMIDAL", desc: "Sem lateral", img: "assets/2X2 PIRAMIDAL.png", badge: true },
            { name: "TENDA 3X3 SANFONADA", desc: "Sem lateral", img: "assets/3X3-SANFONADA.jpeg", },
            { name: "TENDA 3X3 CHAPEU DE BRUXA", desc: "Sem lateral", img: "assets/TENDA 3X3 CHAPEU DE BRUXA.png" },
            { name: "TENDA 4X4 PIRAMIDAL", desc: "Sem lateral", img: "assets/4x4-piramidal.jpeg", badge: true },
            { name: "TENDA 4X4 CHAPEU DE BRUXA", desc: "Sem lateral", img: "assets/TENDA 4X4 CHAPEU DE BRUXA.png", },
            { name: "TENDA 5X5 CHAPEU DE BRUXA", desc: "Sem lateral", img: "assets/TENDAS 5X5 CHAPEU DE BRUXA.png" },
            { name: "TENDA 10X10", desc: "Sem lateral", img: "assets/tendas-10x10.jpeg" }
        ]
    },

    tendasBalcao: {
        title: "Tendas com balcão",
        text: "Espaço funcional para atendimento.",
        options: [
            { name: "TENDA 2X2 COM BALCÃO ", desc: "Ideal para vendas", img: "assets/TENDA 2X2 SANFONADA COM BALCÃO.png" },
            { name: "TENDA 3X3 COM BALCÃO ", desc: "Ideal para vendas", img: "assets/TENDA 3X3 SANFONADA COM BALCÃO.png" },
            { name: "TENDA 4X4 CHAPEU DE BRUXA COM BALCÃO ", desc: "Ideal para vendas", img: "assets/TENDA 4X4 SANFONADA COM BALCÃO.png" },
            { name: "TENDA 5X5 CHAPEU DE BRUXA COM BALCÃO ", desc: "Ideal para vendas", img: "assets/TENDA 5X5 SANFONADA COM BALCÃO.png" },
        ]
    },

    tendasLateral: {
        title: "Tendas com lateral",
        text: "Proteção contra vento e chuva.",
        options: [
            { name: "TENDA 2x2 SANFONADA", desc: "Fechamento lateral", img: "assets/2X2 COM LATERAL.jpeg", badge: true },
            { name: "TENDA 3x3 CHAPEU DE BRUXA", desc: "Fechamento lateral", img: "assets/3X3 COM LATERAL.jpg", badge: true },
            { name: "TENDA 3x3 PIRAMIDAL", desc: "Fechamento lateral", img: "assets/3X3 COM LATERAL.png" },
            { name: "TENDA 4x4 CHAPEU DE BRUXA", desc: "Fechamento lateral", img: "assets/4X4 COM LATERAL.jpg" },

            { name: "TENDA 4x4 CHAPEU DE BRUXA", desc: "Fechamento lateral", img: "assets/TENDA 4X4 PIRAMIDAL COM FECHAMENTO.png" },
            { name: "TENDA 5X5 CHAPEU DE BRUXA", desc: "Fechamento lateral", img: "assets/5x5 COM LATERAL.png " }

        ]
    },




    barraquinhas: {
        title: "Barraquinhas",
        text: "Ideal para feiras e eventos.",
        options: [
            { name: "BARRAQUINHA MADEIRA TETO BRANCO", desc: "Resistente", img: "assets/barraquinhas-madeira.jpeg" },
            { name: "BARRAQUINHA MADEIRA TETO VERMELHO", desc: "Resistente", img: "assets/barraquinhas-madeira-vermelha.jpeg" }
        ]
    },



    inflaveis: {
        title: "Infláveis e outros",
        text: "Diversão para crianças.",
        options: [
            { name: "TOBOGA COLORIDO", desc: "5m(C) x 3m (L) x 4,50m (A)", img: "assets/BRINQUEDOS-INFALVEIS.jpeg" },
            { name: "PISCINA DE BOLINHA", desc: "Para eventos infantis", img: "assets/piscina-de-bolinha.jpeg" },
            { name: "MESA DE PIMBOLIM", desc: "Para todos os tipos de eventos", img: "assets/mesa-de-pimbolim.jpeg" },
            { name: "MESA DE SINUCA", desc: "Para todos os tipos de eventos", img: "assets/mesa-de-sinuca.jpg" },
            { name: "AIR GAME ADULTO ", desc: "Para todos os tipos de eventos", img: "assets/AIRGAMEADULTO.png" },
            { name: "FLIPERAMA", desc: "Para todos os tipos de eventos", img: "assets/fliperama_recortado.png" },
            { name: "BASQUETE ELETRONICO", desc: "Para todos os tipos de eventos", img: "assets/basquete_recortado.png" },
            { name: "TOMBO LEGAL", desc: "Para todos os tipos de eventos", img: "assets/tombo_legal_recortado.png" },
            { name: "Cama elástica 1,88mts", desc: "Para todos os tipos de eventos", img: "assets/cama_elastica_recortada.png" },
            { name: "Cama elástica 2,44mts", desc: "Para todos os tipos de eventos", img: "assets/cama_elastica_244_recortada.png" },
            { name: "Pula pula castelo", desc: "Para todos os tipos de eventos", img: "assets/pula_pula_castelo_recortado.png" },
            { name: "Kid play centopéia", desc: "Para todos os tipos de eventos", img: "assets/kid_play_centopeia_recortado.png" },
            { name: "CHUTE A GOL", desc: "Para todos os tipos de eventos", img: "assets/chute_a_gol_recortado.png" },
            { name: "TOUROS MECANICOS", desc: "Para todos os tipos de eventos", img: "assets/touro_mecanico_3_opcoes.png" },
            { name: "LUTA DE COTONETES", desc: "Para todos os tipos de eventos", img: "assets/luta_cotonetes_recortado.png" },
            { name: "Futebol de sabão fechado 8x4", desc: "Para todos os tipos de eventos", img: "assets/futebol_sabao_recortado.png" },
            { name: "Futebol de sabão 8x4", desc: "Para todos os tipos de eventos", img: "assets/futebol_sabao_recortado2.png" },
            { name: "Futebol de sabão 10m", desc: "Para todos os tipos de eventos", img: "assets/futebol_sabao_10m_recortado.png" },
            { name: "Climatizador de Ar", desc: "Para todos os tipos de eventos", img: "assets/umidificador de ar.png" }


        ]
    }

};

const expand = document.getElementById("catalogExpand");
const options = document.getElementById("expandOptions");
const title = document.getElementById("expandTitle");
const text = document.getElementById("expandText");

document.querySelectorAll(".catalog-link").forEach(btn => {
    btn.addEventListener("click", () => {

        // 👉 se for botão direto Whats
        if (btn.classList.contains("direct-whats")) {
            sendWhats(btn.dataset.name);
            return;
        }

        const data = products[btn.dataset.product];
        if (!data) return;

        title.innerText = data.title;
        text.innerText = data.text;

        options.innerHTML = data.options.map(opt => `
          <div class="option-card" data-name="${opt.name}">
            ${opt.badge ? `<div class="option-badge">Mais pedido</div>` : ""}
            <img src="${opt.img}">
            <div class="option-card-info">
              <h4>${opt.name}</h4>
              <span>${opt.desc}</span>
            </div>
          </div>
        `).join("");

        document.querySelectorAll(".option-card").forEach(card => {
            card.onclick = () => sendWhats(card.dataset.name);
        });

        expand.classList.add("active");
        expand.scrollIntoView({ behavior: "smooth" });

    });
});

function sendWhats(product) {
    const msg = encodeURIComponent(
        `Olá! Vi no site da Brinq+ e gostaria de um orçamento para: ${product}. Pode me ajudar?`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
}
document.querySelector(".expand-close").onclick = () => {
    expand.classList.remove("active");
    expand.scrollIntoView({ behavior: "smooth" });
};

expand.onclick = e => {
    if (e.target === expand) expand.classList.remove("active");
};
const track = document.getElementById("galleryTrack");
const prev = document.getElementById("galleryPrev");
const next = document.getElementById("galleryNext");

let scrollAmount = 0;
const scrollStep = 400; // largura do slide

next.addEventListener("click", () => {
    scrollAmount += scrollStep;

    if (scrollAmount > track.scrollWidth - track.clientWidth) {
        scrollAmount = track.scrollWidth - track.clientWidth;
    }

    track.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
});

prev.addEventListener("click", () => {
    scrollAmount -= scrollStep;

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }

    track.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
});