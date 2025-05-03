$(document).ready(function () {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size based on screen size
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight * 0.6;

    canvas.width = 500px
    canvas.height = 1000px
    let score = 0;
    let gameOver = false;
    let playerSpeed = 7;
    let playerWidth = 50;
    let playerHeight = 50;
    let bullets = [];
    let aliens = [];
    let alienSpeed = 1;
    
    // Player object
    let player = {
        x: canvas.width / 2 - playerWidth / 2,
        y: canvas.height - playerHeight - 10,
        width: playerWidth,
        height: playerHeight,
        color: '#00F',
        dx: 0,
        dy: 0
    };

    // Draw player
    function drawPlayer() {
        ctx.fillStyle = player.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    // Control player movement
    $(document).keydown(function (e) {
        if (e.key === 'ArrowLeft') player.dx = -playerSpeed;
        if (e.key === 'ArrowRight') player.dx = playerSpeed;
        if (e.key === ' ') shootBullet();
    });

    $(document).keyup(function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') player.dx = 0;
    });

    // Shoot Bullet
    function shootBullet() {
        if (!gameOver) {
            let bullet = {
                x: player.x + player.width / 2 - 5,
                y: player.y,
                width: 5,
                height: 20,
                color: '#F00',
                dy: -5
            };
            bullets.push(bullet);
        }
    }

    // Draw bullets
    function drawBullets() {
        for (let i = 0; i < bullets.length; i++) {
            let bullet = bullets[i];
            bullet.y += bullet.dy;
            ctx.fillStyle = bullet.color;
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        }
    }

    // Draw Aliens
    function drawAliens() {
        if (Math.random() < 0.02) {
            let alien = {
                x: Math.random() * canvas.width,
                y: -30,
                width: 30,
                height: 30,
                color: '#F00',
                dy: alienSpeed
            };
            aliens.push(alien);
        }
        
        for (let i = 0; i < aliens.length; i++) {
            let alien = aliens[i];
            alien.y += alien.dy;
            ctx.fillStyle = alien.color;
            ctx.fillRect(alien.x, alien.y, alien.width, alien.height);

            // Check for collisions with bullets
            for (let j = 0; j < bullets.length; j++) {
                let bullet = bullets[j];
                if (
                    bullet.x < alien.x + alien.width &&
                    bullet.x + bullet.width > alien.x &&
                    bullet.y < alien.y + alien.height &&
                    bullet.y + bullet.height > alien.y
                ) {
                    // Remove bullet and alien
                    bullets.splice(j, 1);
                    aliens.splice(i, 1);
                    score += 10;
                    updateScore();
                    break;
                }
            }

            // If alien hits the bottom
            if (alien.y > canvas.height) {
                gameOver = true;
                showGameOver();
            }
        }
    }

    // Update score on screen
    function updateScore() {
        $('#score').text(`Score: ${score}`);
    }

    // Game Over Screen
    function showGameOver() {
        $('#finalScore').text(score);
        $('#gameOverModal').modal('show');
    }

    // Restart game
    $('#restartGame').click(function () {
        location.reload();
    });

    // Update game state
    function updateGame() {
        if (!gameOver) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            player.x += player.dx;
            if (player.x < 0) player.x = 0;
            if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;

            drawPlayer();
            drawBullets();
            drawAliens();
            requestAnimationFrame(updateGame);
        }
    }

    // Start game
    updateGame();
});
