const fs = require('fs');
const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMDb Clone - Stranger Things</title>
    <link rel="stylesheet" href="dist/css/global.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
    <header class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">IMDb Clone</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Movies</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">TV Shows</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Celebrities</a></li>
                    <li class="nav-item"><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#searchModal">Search</button></li>
                </ul>
            </div>
        </div>
    </header>
    <main class="container mt-5">
        <section class="hero text-white text-center p-5" style="background: url('src/assets/images/hero.jpg') center/cover;">
            <h1 class="hero__title">Stranger Things</h1>
            <p class="hero__subtitle">Drama, Horror, Mystery | TV Series (2016- )</p>
            <button class="btn btn-warning">Watch Trailer</button>
        </section>
        <section class="details mt-5 p-4 bg-light">
            <h2>Detalhes</h2>
            <p>Stranger Things se passa nos anos 80 e acompanha um grupo de crianças que investiga eventos sobrenaturais em sua cidade.</p>
        </section>
    </main>
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2025 IMDb Clone. Todos os direitos reservados.</p>
    </footer>

    <!-- Modal de Busca -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="searchModalLabel">Buscar Filmes e Séries</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" placeholder="Digite o nome do filme ou série">
                </div>
            </div>
        </div>
    </div>

    <script src="dist/js/main.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

fs.writeFileSync('src/index.html', htmlContent);
console.log('index.html atualizado com sucesso!');

// Criar arquivos SCSS básicos
const scssFiles = {
    'src/scss/_variables.scss': `$primary-color: #ffc107;\n$secondary-color: #343a40;\n$text-color: #fff;\n$font-stack: 'Arial, sans-serif';` ,
    'src/scss/_search.scss': `.modal-content {\n    transition: transform 0.3s ease-in-out;\n}\n.modal.fade .modal-dialog {\n    transform: scale(0.8);\n}\n.modal.show .modal-dialog {\n    transform: scale(1);\n}` ,
    'src/scss/_details.scss': `.details {\n    border-left: 5px solid $primary-color;\n    padding: 1.5rem;\n    animation: fadeIn 0.5s ease-in-out;\n}\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}`
};

for (const [filePath, content] of Object.entries(scssFiles)) {
    fs.writeFileSync(filePath, content);
    console.log(`${filePath} criado com sucesso!`);
}