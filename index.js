var track = document.getElementById('track');
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var idx = 0;
var total = slides.length;
var timer = null;

// 切换函数:跳到第 n 张
function go(n) {
    idx = (n + total) % total;
    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === idx);
    });
}

// 自动播放
function start() {
    timer = setInterval(function() {
        go(idx + 1);
    }, 3500);    // 每3.5秒切一张
}

function stop() {
    clearInterval(timer);
}

// 箭头点击
prev.addEventListener('click', function() {
    go(idx - 1);
    stop();
    start();
});

next.addEventListener('click', function() {
    go(idx + 1);
    stop();
    start();
});

// 圆点点击
dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() {
        go(i);
        stop();
        start();
    });
});

start();