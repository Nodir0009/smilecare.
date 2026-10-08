// ==========================================
// МОБИЛЬНОЕ МЕНЮ
// ==========================================

function toggleMenu() {

    const nav = document.getElementById("nav");

    nav.classList.toggle("active");

}


// ==========================================
// ЗАКРЫТИЕ МЕНЮ ПОСЛЕ НАЖАТИЯ
// ==========================================

document.querySelectorAll(".nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("nav").classList.remove("active");

    });

});


// ==========================================
// ПОИСК ПО ПРАЙСУ
// ==========================================

function searchPrices() {

    const input = document.getElementById("priceSearch");

    const searchText = input.value.toLowerCase();

    const rows = document.querySelectorAll(".price-row");


    rows.forEach(function(row) {

        const text = row.innerText.toLowerCase();

        if (text.includes(searchText)) {

            row.style.display = "flex";

        } else {

            row.style.display = "none";

        }

    });

}


// ==========================================
// ЗАПИСЬ ЧЕРЕЗ WHATSAPP
// ==========================================

const form = document.getElementById("appointmentForm");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const service =
        document.getElementById("service").value;

    const comment =
        document.getElementById("comment").value.trim();


    // ======================================
    // ВАЖНО:
    // ЗАМЕНИ НОМЕР НА РЕАЛЬНЫЙ WHATSAPP
    // ======================================

    const whatsappNumber = "996553807949";


    const message =
        "🦷 НОВАЯ ЗАПИСЬ В SMILECARE\n\n" +

        "👤 Имя: " + name + "\n" +

        "📞 Телефон: " + phone + "\n" +

        "🦷 Услуга: " + service + "\n" +

        "💬 Комментарий: " +
        (comment || "Нет комментария") +

        "\n\n" +

        "Пациент хочет записаться на приём.";


    const encodedMessage =
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodedMessage;


    window.open(
        whatsappURL,
        "_blank"
    );


    form.reset();

});


// ==========================================
// АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ
// ==========================================

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(
        ".service-card, .doctor-card, .contact-card"
    )
    .forEach(function(element) {

        observer.observe(element);

    });