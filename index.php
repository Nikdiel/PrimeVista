<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrimeVista</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/logo.ico">
</head>
<body>

    <?php include 'header.html'; ?>
    <div id="video">
        <div id="gray"></div>
        <video preload="auto" autoplay loop muted>
            <source src="img/output(compress-video-online.com).mp4" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
        <div class="text">
            <h1>PrimeVista</h1>
            <p>Взгляд в будущее успеха</p>
        </div>
        
    </div>
    


    <main id="main">
    
        <!-- MAIN HERO SECTION -->
        <section id="hero">
            <div class="hero-content">
                <h1>Добро пожаловать в нашу компанию!</h1>
                <p>Предоставляем лучшие решения для вашего бизнеса</p>
                <a href="#contact" class="cta-button">Связаться с нами</a>
            </div>
        </section>

        <!-- ABOUT SECTION -->
        <section id="about" class="section">
            <div class="container">
                <h2>О нашей компании</h2>
                <p> <b>PrimeVista</b> – это цифровая консалтинговая компания, которая помогает бизнесам любого масштаба адаптироваться к требованиям современного мира. Основные направления включают разработку ИТ-решений, маркетинговую стратегию и поддержку цифровой трансформации.</p>
            </div>
        </section>

        <!-- SERVICES SECTION -->
        <section id="services" class="section">
            <div class="container">
                <h2>Наши Услуги</h2>
                <div class="services" >
                    <div class="service" id="1">
                        <h3>Консалтинг</h3>
                        <p>Помогаем компаниям оптимизировать процессы и достигать бизнес-целей.</p>
                    </div>
                    <div class="service" id="2">
                        <h3>Разработка</h3>
                        <p>Предоставляем услуги по созданию программного обеспечения на заказ.</p>
                    </div>
                    <div class="service" id="3">
                        <h3>Поддержка</h3>
                        <p>Обеспечиваем техническую поддержку и обслуживание вашего IT-инфраструктуры.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="section">
            <div class="container">
                <h2>Контакты</h2>
                <p>Свяжитесь с нами для получения консультации или заказа услуг.</p>
                <form action="#" method="post">
                    <input type="text" placeholder="Ваше имя" required id="name">
                    <input type="email" placeholder="Ваш email" required id="email">
                    <textarea placeholder="Сообщение" required id="textarea"></textarea>
                    <button type="submit" id="btn">Отправить</button>
                </form>
            </div>
        </section>

    </main>
    

    <?php include 'footer.html'; ?>


    <script src="js/script.js"></script>
</body>
</html>

