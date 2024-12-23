<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrimeVista</title>
    <link rel="stylesheet" href="css/контакты.css">
    <link rel="icon" href="img/logo.ico">
</head>
<body>

    <?php include 'header.html'; ?>
    <main id="main">
        <div class="container">
            <h2>Контакты</h2>

            <div class="contact-info">
                <!-- Контактная информация -->
                <div id="1">
                    <h3>Наш адрес</h3>
                    <p id="p1">Алматы, ул. Ахметова, 22</p>
                </div>

                <div id="2">
                    <h3>Телефон</h3>
                    <p id="p2"> +7 (777) 123-45-67</p>
                </div>

                <div id="3">
                    <h3>Электронная почта</h3>
                    <p id="p3">info@company.com</p>
                </div>
            </div>

            <div class="contact-form" id="form">
                <h3>Свяжитесь с нами</h3>
                <form action="submit_form.php" method="POST">
                    <input type="text" name="name" placeholder="Ваше имя" required id="name">
                    <input type="email" name="email" placeholder="Ваш email" required id="email">
                    <textarea name="message" rows="5" placeholder="Ваше сообщение" required id="textarea"></textarea>
                    <button type="submit" id="btn">Отправить</button>
                </form>
            </div>

            <div class="map">
                <!-- Вставьте карту сюда, например, с Google Maps -->
                <iframe src="" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen></iframe>
            </div>
        </div>
    </main>

    <?php include 'footer.html'; ?>
    

    <script src="js/контакты.js"></script>
</body>
</html>