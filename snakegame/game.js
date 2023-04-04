// Создаем Phaser-игру
var game = new Phaser.Game(400, 400, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// Предзагрузка необходимых ресурсов
function preload() {
    game.load.image('snake', '../assets/snake.png');
}

// Создание элементов игры
var snake;
var score = 0;
var scoreText;
function create() {
    // Создание змеи
    snake = game.add.sprite(200, 200, 'snake');
    snake.anchor.set(0.5);

    // Добавление текста со счетом
    scoreText = game.add.text(10, 10, 'Score: 0', { font: '20px Arial', fill: '#000' });
}

// Обновление игры
function update() {
    // Движение змеи
    snake.x += 1;

    // Обновление счета
    scoreText.text = 'Score: ' + score;
}
