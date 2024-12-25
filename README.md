# Ptag
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PTag</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
        }

        header {
            background-color: black;
            color: white;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
        }

        .hero {
            text-align: center;
            padding: 50px 20px;
            background-color: #f8f8f8;
        }

        .hero img {
            max-width: 200px;
        }

        .hero h1 {
            font-size: 2rem;
            margin: 20px 0;
        }

        .hero button {
            background-color: #FFA500;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
        }

        section {
            padding: 40px 20px;
        }

        .features {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .feature {
            flex: 1 1 200px;
            margin: 10px;
            text-align: center;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px;
        }

        .footer-links a {
            color: white;
            text-decoration: none;
            margin: 0 5px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<header>
    <div>PTag</div>
    <nav>
        <a href="#">特點</a>
        <a href="#">聯繫我們</a>
    </nav>
</header>

<div class="hero">
    <img src="" alt="PTag Logo">
    <h1>PTag Air</h1>
    <p>輕巧設計 全面守護</p>
    <button>立即購買</button>
</div>

<section>
    <h2>為何有 AI 眼疾篩查？</h2>
    <p>解釋有關 AI 眼疾篩查的價值與功能。</p>
</section>

<section class="features">
    <div class="feature">
        <h3>功能一</h3>
        <p>描述功能。</p>
    </div>
    <div class="feature">
        <h3>功能二</h3>
        <p>描述功能。</p>
    </div>
    <div class="feature">
        <h3>功能三</h3>
        <p>描述功能。</p>
    </div>
</section>

<footer>
    <div>聯絡我們: support@ptag.com.hk</div>
    <div class="footer-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
    </div>
</footer>

</body>
</html>
