// Словарь: для каждого языка набор текстов по ключам из data-i18n
const translations = {
    uk: {
        title: "Мафія: Ігри Дорослих",
        nav_home: "Головна",
        nav_news: "Новини",
        nav_download: "Завантажити гру",
        h1: "Мафія: Ігри Дорослих",
        hero1: "Поринь у світ мафії, таємниць і небезпечних рішень!",
        hero2: "Обирай свою роль, розкривай таємниці та доведи, що саме ти керуєш грою!",
        about_title: "Про гру",
        about_text: "Мафія: Ігри Дорослих — онлайн-мафія, де кожна ніч може стати останньою. Місто засинає. Прокидається мафія.",
        about_text_1: "Багатокористувацька мафія для телефона та комп'ютера. Створіть кімнату, покличте друзів або знайдіть партію в лобі, і нехай переможе наймудріший. Або найчесніший.",
        about_title_1: "Як минає партія",
        about_text_night: "🌙 Ніч. Мафія таємно обирає жертву, а Комісар, Лікар та інші ролі використовують свої здібності.",
        adout_text_day: "☀️ День. Місто прокидається й дізнається, кого не стало. Починається обговорення: хто бреше, хто захищає своїх, хто надто мовчазний?",
        aboyt_text_voting: "⚖️ Голосування. Місто вирішує, кого вигнати. Помилка може коштувати мирним перемоги.",
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
        hitman_desc: "Щоночі вбиває обрану жертву. Мета: усунути всіх і залишитися єдиним, хто вижив.",
        gallery_title: "Скріншоти",
        footer_text: "© 2026 Мафія: Ігри Дорослих. Усі права захищено.",
        age_note: "18+ Гра містить жарти для дорослих і натяки. Відвертих сцен немає.",
        news_title: "Новини",
        dev_notice: "Гра перебуває в розробці. Доступу до неї поки що немає.",
        coming_soon: "Скоро",
        news_1_title: "Вхід у гру",
        news_1_text: "Ми зробили вхід в акаунт. Гра ще в розробці, тому доступу до неї поки що немає.",
        news_2_title: "Магазин у грі",
        news_2_text: "Ми додали в гру магазин. Він ще в розробці й поки недоступний для гравців.",
        news_3_title: "Ігровий процес",
        news_3_text: "Основний ігровий процес уже зроблено: кімнати, ролі та голосування. Скоро розповімо більше."
    },
    en: {
        title: "Mafia: Games for Adults",
        nav_home: "Home",
        nav_news: "News",
        nav_download: "Download the game",
        h1: "Mafia: Games for Adults",
        hero1: "Dive into a world of mafia, secrets and dangerous choices!",
        hero2: "Choose your role, uncover secrets and prove that you are the one in control of the game!",
        about_title: "About the game",
        about_text: "Mafia: Games for Adults is an online mafia game where every night can be the last. The city falls asleep. The mafia wakes up.",
        about_text_1: "Multiplayer mafia for phone and computer. Create a room, invite your friends or find a game in the lobby, and may the wisest win. Or the most honest.",
        about_title_1: "How a game unfolds",
        about_text_night: "🌙 Night. The mafia secretly chooses a victim, while the Detective, the Doctor and other roles use their abilities.",
        adout_text_day: "☀️ Day. The city wakes up and learns who is gone. The discussion begins: who is lying, who is covering for their own, who is too quiet?",
        aboyt_text_voting: "⚖️ Voting. The city decides who to banish. A mistake can cost the townspeople the victory.",
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
        tempter_desc: "Tempts a player, blocking their abilities.",
        hitman_name: "Hitman",
        hitman_desc: "Kills a chosen victim every night. Goal: eliminate everyone else and be the only survivor.",
        gallery_title: "Screenshots",
        footer_text: "© 2026 Mafia: Games for Adults. All rights reserved.",
        age_note: "18+ The game contains adult jokes and innuendo. No explicit scenes.",
        news_title: "News",
        dev_notice: "The game is under development. Access is not available yet.",
        coming_soon: "Coming soon",
        news_1_title: "Logging in",
        news_1_text: "We have built account login. The game is still in development, so there is no access to it yet.",
        news_2_title: "The in-game shop",
        news_2_text: "We have added a shop to the game. It is still in development and not yet available to players.",
        news_3_title: "Gameplay",
        news_3_text: "The core gameplay is already built: rooms, roles and voting. We will share more soon."
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
        about_text: "Mafia: Gry dla dorosłych to mafia online, w której każda noc może być ostatnia. Miasto zasypia. Mafia się budzi.",
        about_text_1: "Wieloosobowa mafia na telefon i komputer. Stwórz pokój, zaproś znajomych albo znajdź partię w lobby, a niech wygra najmądrzejszy. Albo najuczciwszy.",
        about_title_1: "Jak przebiega partia",
        about_text_night: "🌙 Noc. Mafia po cichu wybiera ofiarę, a Komisarz, Lekarz i inne role używają swoich zdolności.",
        adout_text_day: "☀️ Dzień. Miasto budzi się i dowiaduje, kogo zabrakło. Zaczyna się dyskusja: kto kłamie, kto broni swoich, kto jest zbyt milczący?",
        aboyt_text_voting: "⚖️ Głosowanie. Miasto decyduje, kogo wygnać. Pomyłka może kosztować mieszkańców zwycięstwo.",
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
        tempter_desc: "Kusi gracza, blokując jego zdolności.",
        hitman_name: "Płatny zabójca",
        hitman_desc: "Każdej nocy zabija wybraną ofiarę. Cel: wyeliminować wszystkich pozostałych i zostać jedynym ocalałym.",
        gallery_title: "Zrzuty ekranu",
        footer_text: "© 2026 Mafia: Gry dla dorosłych. Wszelkie prawa zastrzeżone.",
        age_note: "18+ Gra zawiera żarty i aluzje dla dorosłych. Brak dosłownych scen.",
        news_title: "Aktualności",
        dev_notice: "Gra jest w trakcie tworzenia. Dostęp do niej jest na razie niemożliwy.",
        coming_soon: "Wkrótce",
        news_1_title: "Logowanie do gry",
        news_1_text: "Zrobiliśmy logowanie do konta. Gra jest wciąż w produkcji, więc na razie nie ma do niej dostępu.",
        news_2_title: "Sklep w grze",
        news_2_text: "Dodaliśmy do gry sklep. Jest jeszcze w trakcie tworzenia i na razie niedostępny dla graczy.",
        news_3_title: "Rozgrywka",
        news_3_text: "Podstawowa rozgrywka jest już gotowa: pokoje, role i głosowanie. Wkrótce opowiemy więcej."
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
        about_text: "Mafia: Spiele für Erwachsene ist eine Online-Mafia, in der jede Nacht die letzte sein kann. Die Stadt schläft ein. Die Mafia erwacht.",
        about_text_1: "Mehrspieler-Mafia für Handy und Computer. Erstelle einen Raum, lade Freunde ein oder finde eine Partie in der Lobby, und möge der Klügste gewinnen. Oder der Ehrlichste.",
        about_title_1: "So läuft eine Partie ab",
        about_text_night: "🌙 Nacht. Die Mafia wählt heimlich ein Opfer, während der Kommissar, der Arzt und andere Rollen ihre Fähigkeiten einsetzen.",
        adout_text_day: "☀️ Tag. Die Stadt erwacht und erfährt, wer fehlt. Die Diskussion beginnt: Wer lügt, wer schützt die Seinen, wer ist zu still?",
        aboyt_text_voting: "⚖️ Abstimmung. Die Stadt entscheidet, wer verbannt wird. Ein Fehler kann die Bürger den Sieg kosten.",
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
        tempter_desc: "Verlockt einen Spieler und blockiert dessen Fähigkeiten.",
        hitman_name: "Auftragskiller",
        hitman_desc: "Tötet jede Nacht ein ausgewähltes Opfer. Ziel: alle anderen ausschalten und als einziger Überlebender übrig bleiben.",
        gallery_title: "Screenshots",
        footer_text: "© 2026 Mafia: Spiele für Erwachsene. Alle Rechte vorbehalten.",
        age_note: "18+ Das Spiel enthält Witze und Anspielungen für Erwachsene. Keine expliziten Szenen.",
        news_title: "Neuigkeiten",
        dev_notice: "Das Spiel befindet sich in Entwicklung. Ein Zugang ist noch nicht möglich.",
        coming_soon: "Demnächst",
        news_1_title: "Anmeldung im Spiel",
        news_1_text: "Wir haben die Kontoanmeldung umgesetzt. Das Spiel ist noch in Entwicklung, daher gibt es noch keinen Zugang.",
        news_2_title: "Der Shop im Spiel",
        news_2_text: "Wir haben dem Spiel einen Shop hinzugefügt. Er ist noch in Entwicklung und für Spieler noch nicht verfügbar.",
        news_3_title: "Spielablauf",
        news_3_text: "Der grundlegende Spielablauf steht bereits: Räume, Rollen und Abstimmung. Bald erzählen wir mehr."
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
        about_text: "Mafia: Juegos para adultos es una mafia en línea donde cada noche puede ser la última. La ciudad se duerme. La mafia despierta.",
        about_text_1: "Mafia multijugador para móvil y ordenador. Crea una sala, invita a tus amigos o busca una partida en el lobby, y que gane el más sabio. O el más honesto.",
        about_title_1: "Cómo transcurre una partida",
        about_text_night: "🌙 Noche. La mafia elige en secreto a una víctima, mientras el Comisario, el Médico y otros roles usan sus habilidades.",
        adout_text_day: "☀️ Día. La ciudad despierta y descubre quién ya no está. Comienza el debate: ¿quién miente, quién protege a los suyos, quién está demasiado callado?",
        aboyt_text_voting: "⚖️ Votación. La ciudad decide a quién expulsar. Un error puede costarles la victoria a los ciudadanos.",
        roles_title: "Roles",
        mafia_name: "Mafia",
        mafia_desc: "De noche elige a una víctima. Objetivo: eliminar a los ciudadanos.",
        peaceful_name: "Ciudadano",
        peaceful_desc: "De día busca a la mafia mediante votación.",
        doctor_name: "Médico",
        doctor_desc: "Cada noche salva a un jugador.",
        cop_name: "Comisario",
        cop_desc: "Comprueba si un jugador pertenece a la mafia.",
        tempter_name: "Tentador",
        tempter_desc: "Tienta al jugador, bloqueando sus habilidades.",
        hitman_name: "Sicario",
        hitman_desc: "Cada noche mata a una víctima elegida. Objetivo: eliminar a todos los demás y quedar como único superviviente.",
        gallery_title: "Capturas de pantalla",
        footer_text: "© 2026 Mafia: Juegos para adultos. Todos los derechos reservados.",
        age_note: "18+ El juego contiene bromas e insinuaciones para adultos. No hay escenas explícitas.",
        news_title: "Noticias",
        dev_notice: "El juego está en desarrollo. Todavía no hay acceso a él.",
        coming_soon: "Próximamente",
        news_1_title: "Inicio de sesión",
        news_1_text: "Hemos creado el inicio de sesión con cuenta. El juego sigue en desarrollo, así que aún no hay acceso.",
        news_2_title: "La tienda del juego",
        news_2_text: "Hemos añadido una tienda al juego. Aún está en desarrollo y todavía no está disponible para los jugadores.",
        news_3_title: "Jugabilidad",
        news_3_text: "La jugabilidad básica ya está lista: salas, roles y votación. Pronto contaremos más."
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
        about_text: "Mafia : Jeux pour adultes est une mafia en ligne où chaque nuit peut être la dernière. La ville s'endort. La mafia se réveille.",
        about_text_1: "Mafia multijoueur pour téléphone et ordinateur. Crée une salle, invite tes amis ou trouve une partie dans le lobby, et que le plus sage l'emporte. Ou le plus honnête.",
        about_title_1: "Comment se déroule une partie",
        about_text_night: "🌙 Nuit. La mafia choisit secrètement une victime, tandis que le Commissaire, le Médecin et les autres rôles utilisent leurs capacités.",
        adout_text_day: "☀️ Jour. La ville se réveille et apprend qui a disparu. La discussion commence : qui ment, qui protège les siens, qui est trop silencieux ?",
        aboyt_text_voting: "⚖️ Vote. La ville décide qui bannir. Une erreur peut coûter la victoire aux villageois.",
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
        tempter_desc: "Tente le joueur en bloquant ses capacités.",
        hitman_name: "Tueur à gages",
        hitman_desc: "Chaque nuit, il tue une victime choisie. Objectif : éliminer tous les autres et rester le seul survivant.",
        gallery_title: "Captures d'écran",
        footer_text: "© 2026 Mafia : Jeux pour adultes. Tous droits réservés.",
        age_note: "18+ Le jeu contient des blagues et des allusions pour adultes. Aucune scène explicite.",
        news_title: "Actualités",
        dev_notice: "Le jeu est en cours de développement. L'accès n'est pas encore disponible.",
        coming_soon: "Bientôt disponible",
        news_1_title: "Connexion au jeu",
        news_1_text: "Nous avons mis en place la connexion au compte. Le jeu est encore en développement, il n'y a donc pas encore d'accès.",
        news_2_title: "La boutique du jeu",
        news_2_text: "Nous avons ajouté une boutique au jeu. Elle est encore en développement et pas encore accessible aux joueurs.",
        news_3_title: "Déroulement du jeu",
        news_3_text: "Le gameplay de base est déjà prêt : salles, rôles et vote. Nous en dirons plus bientôt."
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
        about_text: "Mafia: Giochi per adulti è una mafia online in cui ogni notte può essere l'ultima. La città si addormenta. La mafia si risveglia.",
        about_text_1: "Mafia multigiocatore per telefono e computer. Crea una stanza, invita i tuoi amici o trova una partita nella lobby, e vinca il più saggio. O il più onesto.",
        about_title_1: "Come si svolge una partita",
        about_text_night: "🌙 Notte. La mafia sceglie in segreto una vittima, mentre il Commissario, il Dottore e gli altri ruoli usano le proprie abilità.",
        adout_text_day: "☀️ Giorno. La città si risveglia e scopre chi non c'è più. Inizia la discussione: chi mente, chi protegge i suoi, chi è troppo silenzioso?",
        aboyt_text_voting: "⚖️ Votazione. La città decide chi allontanare. Un errore può costare la vittoria ai cittadini.",
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
        tempter_desc: "Tenta il giocatore, bloccandone le abilità.",
        hitman_name: "Sicario",
        hitman_desc: "Ogni notte uccide una vittima scelta. Obiettivo: eliminare tutti gli altri e restare l'unico sopravvissuto.",
        gallery_title: "Screenshot",
        footer_text: "© 2026 Mafia: Giochi per adulti. Tutti i diritti riservati.",
        age_note: "18+ Il gioco contiene battute e allusioni per adulti. Nessuna scena esplicita.",
        news_title: "Notizie",
        dev_notice: "Il gioco è in fase di sviluppo. Per ora non è ancora possibile accedervi.",
        coming_soon: "Prossimamente",
        news_1_title: "Accesso al gioco",
        news_1_text: "Abbiamo realizzato l'accesso con account. Il gioco è ancora in sviluppo, quindi per ora non è possibile accedervi.",
        news_2_title: "Il negozio nel gioco",
        news_2_text: "Abbiamo aggiunto un negozio al gioco. È ancora in sviluppo e non ancora disponibile per i giocatori.",
        news_3_title: "Gameplay",
        news_3_text: "Il gameplay di base è già pronto: stanze, ruoli e votazione. Presto ne parleremo di più."
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

// ---------- Лайтбокс для скриншотов ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// На странице новостей лайтбокса нет, поэтому проверяем, что он существует
if (lightbox) {
    document.querySelectorAll(".gallery img").forEach(function (img) {
        img.addEventListener("click", function () {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add("active");
        });
    });

    // Закрыть по клику на фон
    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    // Закрыть по Esc
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") lightbox.classList.remove("active");
    });
}
