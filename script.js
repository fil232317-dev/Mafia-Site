// Словарь: для каждого языка набор текстов по ключам из data-i18n
const translations = {
    uk: {
        title: "Мафія: Ігри Дорослих ",
        nav_home: "Головна",
        nav_news: "Новини",
        nav_download: "Завантажити гру",
        h1: "Мафія: Ігри Дорослих",
        hero1: "Поринь у світ мафії, таємниць і небезпечних рішень!",
        hero2: "Обирай свою роль, розкривай таємниці та доведи, що саме ти керуєш грою!",
        about_title: "Про гру",
        about_text: "Мафія: Ігри Дорослих — онлайн-мафія, де кожна ніч може стати останньою. Місто засинає. Прокидається мафія.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Ролі",
        mafia_name: "Мафія",
        mafia_desc: "Вночі обирає жертву. Мета: знищити мирних.",
        peaceful_name: "Мирний житель",
        peaceful_desc: "Шукає мафію голосуванням вдень.",
        doctor_name: "Лікар",
        doctor_desc: "Щоночі рятує одного гравця.",
        cop_name: "Комісар",
        cop_desc: "Перевіряє, чи є гравець мафією.",
        tempter_name: "Спокусник",
        tempter_desc: "Спокушає гравця, блокуючи його здібності.",
        hitman_name: "Кіллер",
        hitman_desc:"Щоночі вбиває обрану жертву. Мета: усунути усіх залишитися єдиним вижившим.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."

    },
    en: {
        title: "Mafia: Games for Adults",
        nav_home: "Home",
        nav_news: "News",
        nav_download: "Download the game",
        h1: "Mafia: Games for Adults",
        hero1: "Dive into a world of mafia, secrets and dangerous choices!",
        hero2: "Choose your role, uncover the secrets and prove that you are the one in control of the game!",
        about_title: "About the game",
        about_text: "Mafia: Adult Games is an online mafia where every night can be the last. The city falls asleep. The mafia is waking up.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Roles",
        mafia_name: "Mafia",
        mafia_desc: "Chooses a victim at night. Goal: eliminate the townspeople.",
        peaceful_name: "Civilian",
        peaceful_desc: "Hunts for the mafia by voting during the day.",
        doctor_name: "Doctor",
        doctor_desc: "Saves one player every night.",
        cop_name: "Detective",
        cop_desc: "Checks whether a player is mafia.",
        tempter_name: "Tempter",
        tempter_desc: "Tempts the player, blocking their abilities",
        hitman_name: "Hitman",
        hitman_desc:"Every night, it kills a chosen victim. Goal: eliminate everyone else and remain the sole survivor.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."   
    },
    pl: {
        title: "Mafia: Gry dla dorosłych",
        nav_home: "Strona główna",
        nav_news: "Aktualności",
        nav_download: "Pobierz grę",
        h1: "Mafia: Gry dla dorosłych",
        hero1: "Zanurz się w świat mafii, tajemnic i niebezpiecznych decyzji!",
        hero2: "Wybierz swoją rolę, odkrywaj sekrety i udowodnij, że to ty rządzisz grą!",
        about_title: "O grze",
        about_text: "Mafia online z czatem: zbierz znajomych, rozdajcie role i znajdź mafię, zanim ona znajdzie ciebie.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Role",
        mafia_name: "Mafia",
        mafia_desc: "W nocy wybiera ofiarę. Cel: wyeliminować mieszkańców.",
        peaceful_name: "Mieszkaniec",
        peaceful_desc: "W dzień szuka mafii w drodze głosowania.",
        doctor_name: "Lekarz",
        doctor_desc: "Każdej nocy ratuje jednego gracza.",
        cop_name: "Komisarz",
        cop_desc: "Sprawdza, czy gracz należy do mafii.",
        tempter_name: "Kusiciel",
        tempter_desc: "Kusi gracza, blokując jego zdolności",
        hitman_name: "Wynajęty morderca",
        hitman_desc:"Każdej nocy zabija wybraną ofiarę. Cel: wyeliminować wszystkich pozostałych i pozostać jedynym ocalałym.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
    },
    de: {
        title: "Mafia: Spiele für Erwachsene",
        nav_home: "Startseite",
        nav_news: "Neuigkeiten",
        nav_download: "Spiel herunterladen",
        h1: "Mafia: Spiele für Erwachsene",
        hero1: "Tauche ein in die Welt der Mafia, der Geheimnisse und gefährlichen Entscheidungen!",
        hero2: "Wähle deine Rolle, lüfte Geheimnisse und beweise, dass du das Spiel kontrollierst!",
        about_title: "Über das Spiel",
        about_text: "Online-Mafia mit Chat: Versammle deine Freunde, verteilt die Rollen und finde die Mafia, bevor sie dich findet.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Rollen",
        mafia_name: "Mafia",
        mafia_desc: "Wählt nachts ein Opfer aus. Ziel: die Bürger ausschalten.",
        peaceful_name: "Bürger",
        peaceful_desc: "Sucht tagsüber per Abstimmung nach der Mafia.",
        doctor_name: "Arzt",
        doctor_desc: "Rettet jede Nacht einen Spieler.",
        cop_name: "Kommissar",
        cop_desc: "Prüft, ob ein Spieler zur Mafia gehört.",
        tempter_name: "Versucher",
        tempter_desc: "Verlockt den Spieler und blockiert dessen Fähigkeiten.",
        hitman_name: "Hitman",
        hitman_desc:"Jede Nacht tötet es ein ausgewähltes Opfer. Ziel: alle anderen ausschalten und als einziger Überlebender zurückbleiben.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
    },
    es: {
        title: "Mafia: Juegos para adultos",
        nav_home: "Inicio",
        nav_news: "Noticias",
        nav_download: "Descargar el juego",
        h1: "Mafia: Juegos para adultos",
        hero1: "¡Sumérgete en el mundo de la mafia, los secretos y las decisiones peligrosas!",
        hero2: "¡Elige tu rol, descubre los secretos y demuestra que eres tú quien controla el juego!",
        about_title: "Sobre el juego",
        about_text: "Mafia en línea con chat: reúne a tus amigos, repartid los roles y encuentra a la mafia antes de que ella te encuentre a ti.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Roles",
        mafia_name: "Mafia",
        mafia_desc: "De noche elige a una víctima. Objetivo: eliminar a los ciudadanos.",
        peaceful_name: "Ciudadano",
        peaceful_desc: "De día busca a la mafia mediante votación.",
        doctor_name: "Médico",
        doctor_desc: "Cada noche salva a un jugador.",
        cop_name: "Comisario",
        cop_desc: "Comprueba si un jugador pertenece a la mafia.",
        tempter_name: "Ahvatleja",
        tempter_desc: "Ahvatleb mängijat, blokeerides tema võimed",
        hitman_name: "Palgamõrvar",
        hitman_desc:"Igal ööl tapab see valitud ohvri. Eesmärk: kõrvaldada kõik teised ja jääda ainsaks ellujäänuks.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
    },
    fr: {
        title: "Mafia : Jeux pour adultes",
        nav_home: "Accueil",
        nav_news: "Actualités",
        nav_download: "Télécharger le jeu",
        h1: "Mafia : Jeux pour adultes",
        hero1: "Plonge dans l'univers de la mafia, des secrets et des décisions dangereuses !",
        hero2: "Choisis ton rôle, découvre les secrets et prouve que c'est toi qui contrôles la partie !",
        about_title: "À propos du jeu",
        about_text: "Mafia en ligne avec chat : rassemble tes amis, répartissez les rôles et trouve la mafia avant qu'elle ne te trouve.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Rôles",
        mafia_name: "Mafia",
        mafia_desc: "La nuit, elle choisit une victime. Objectif : éliminer les villageois.",
        peaceful_name: "Villageois",
        peaceful_desc: "Cherche la mafia en votant pendant la journée.",
        doctor_name: "Médecin",
        doctor_desc: "Sauve un joueur chaque nuit.",
        cop_name: "Commissaire",
        cop_desc: "Vérifie si un joueur appartient à la mafia.",
        tempter_name: "Tentateur",
        tempter_desc: "Tente le joueur, en bloquant ses capacités",
        hitman_name: "Tueur à gages",
        hitman_desc:"Chaque nuit, il tue une victime désignée. Objectif : éliminer tous les autres et rester le seul survivant.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
    },
    it: {
        title: "Mafia: Giochi per adulti",
        nav_home: "Home",
        nav_news: "Notizie",
        nav_download: "Scarica il gioco",
        h1: "Mafia: Giochi per adulti",
        hero1: "Immergiti nel mondo della mafia, dei segreti e delle decisioni pericolose!",
        hero2: "Scegli il tuo ruolo, scopri i segreti e dimostra di essere tu a controllare il gioco!",
        about_title: "Il gioco",
        about_text: "Mafia online con chat: riunisci i tuoi amici, distribuite i ruoli e trova la mafia prima che trovi te.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1:"Як минає партія",
        about_text_night: " Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: " День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting:" Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
        roles_title: "Ruoli",
        mafia_name: "Mafia",
        mafia_desc: "Di notte sceglie una vittima. Obiettivo: eliminare i cittadini.",
        peaceful_name: "Cittadino",
        peaceful_desc: "Di giorno cerca la mafia votando.",
        doctor_name: "Dottore",
        doctor_desc: "Ogni notte salva un giocatore.",
        cop_name: "Commissario",
        cop_desc: "Controlla se un giocatore è mafioso.",
        tempter_name: "Tentatore",
        tempter_desc: "Tenta il giocatore, bloccandone le abilità",
        hitman_name: "Sicario",
        hitman_desc:"Ogni notte, uccide una vittima prescelta. Obiettivo: eliminare tutti gli altri e rimanere l'unico sopravvissuto.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Розуму. Усі права захищено."
    }
};

const select = document.getElementById("lang-select");

// Меняет язык всей страницы
function setLanguage(lang) {
    const texts = translations[lang];
    if (!texts) return; // такого языка нет в словаре

    // 1. находим все элементы с data-i18n и подставляем перевод
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.dataset.i18n;
        if (texts[key]) {
            element.textContent = texts[key];
        }
    });

    // 2. название вкладки и язык страницы
    document.title = texts.title;
    document.documentElement.lang = lang;

    // 3. запоминаем выбор и синхронизируем список
    localStorage.setItem("lang", lang);
    select.value = lang;
}

// Когда игрок выбрал язык в списке
select.addEventListener("change", function () {
    setLanguage(select.value);
});

// При загрузке страницы: берём сохранённый язык или украинский
const savedLang = localStorage.getItem("lang");
setLanguage(savedLang || "uk");