// 存储回忆的数据
const memories = [
    {
        date: '2018年3月份的某一天',
        title: '我们的第一次相遇',
        description: '还记得初二下学期换班的那天下午，命运让我们在162班相遇。从那一刻起，命运的齿轮开始转动，我们的缘分也随之开始。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/%E8%9C%9C%E8%9C%82.png'
    },
    {
        date: '2022年3月',
        title: '燃起的火花',
        description: '谢谢你能在高考前3个月拉我一把，那一刻，我就知道你会是我生命中特别的人。从那时候开始，我们的火花欲燃愈烈，我们的感情也迅速升温。你微笑的样子像是一缕阳光，照亮了我平淡的生活。',
        image: 'https://source.unsplash.com/random/800x600/?valentines,love'
    },
    {
        date: '2022年6月18日',
        title: '我们在一起的日子',
        description: '在这个不平凡的日子里，我们畅聊到了凌晨，我最终对你说出了那句"我喜欢你"。无论未来如何，我都想一直牵着你的手，走过每一个日升月落。',
        image: 'https://source.unsplash.com/random/800x600/?night,stars'
    },
    {
        date: '2022年9月7日',
        title: '短暂的分离',
        description: '这一天是我开学的日子，当时你和我一起来到柳州站，送我进站，然后你又一个人扛着晕车坐公交车回家，我很心疼你，也舍不得和你分离。去到学校时，一切都是那么陌生，看到你送的花，这是我第一次收到花。我真的很想你，很想你，很想你。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2022-9-7.png'
    },
    {
        date: '2023年6月18日',
        title: '一周年纪念日',
        description: '这是我们在一起的第一个周年纪念日，在这一天，我们一起去吃了好吃的，一起吃了小蛋糕，一起按下我们的手掌印，以此来纪念我们的一周年。这一天，老天爷似乎知道我们过纪念日，所以一天内让我们看见了三场彩虹，真的很幸运，很幸福。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2023-6-18.png'
    },
    {
        date: '2023年10月28日',
        title: '山野里的小旅行',
        description: '这是我们第一次一起去旅行，俩人骑着一辆电动车，吹着自由的风，去了向往已久的阳朔。清晨工农桥上的日出、轻拂的微风，还有你洋溢着幸福的脸，这一切都成为了我心中最美的画面。后来的我们还一起去了很多地方旅游。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2023-10-28.png'
    },
    {
        date: '2023年11月12日',
        title: '江边烧烤',
        description: '在这无忧无虑的一天，我们一起去了龙门大桥江边烧烤，一起吃烧烤，一起吹着晚风，天黑后才收拾离开，我背着你过了那条小河。那天你靠在我肩膀上，吃着烧烤，聊着天，很幸福，一切都是那么美好。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2023-11-12.png'
    },
    {
        date: '2024年2月14日',
        title: '浪漫的情人节',
        description: '这是我们共度的第二个情人节，下班后老板请大家吃宵夜，和你一起吃的烧鸭粉，很好吃，这是我们的一场特别有意义的约会。我们一起在乐其兼职，为了彼此相互努力，这是我们的第一份兼职。虽然那一天工作很累，但是和你一起就很幸福。你靠在我肩上的温度，是我最珍贵的感觉。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-2-14.png'
    },
    {
        date: '2024年2月29日',
        title: '第一个金疙瘩',
        description: '经过我们反复的挑选，最终选择在大润发的周大福给你买了一枚金戒指，在老凤祥给你买了金吊坠。看到你笑起来的样子，我真的很开心，很幸福，能够靠我自己的努力给你买金戒指，金吊坠，后来的我又通过自己的努力给你买了金项链，只要你开心，我就觉得值得',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-2-29.png'
    },
    {
        date: '2024年6月18日',
        title: '二周年纪念日',
        description: '这是我们在一起两周年纪念日，在这一天，我们一起吃了小火锅，小蛋糕，我送了一个可爱的榴莲花给你，你很喜欢。有你在我身边，我真的很幸福，很开心。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-6-18.png'
    },
    {
        date: '2024年10月20日',
        title: '当导游的一天',
        description: '这一天，你妈妈和你妹妹，还有阿公阿婆来桂林玩，我们在象鼻山等他们。刚开始我非常紧张，后面我们带他们去了东西巷，靖江王府，日月双塔，逍遥楼。在日月双塔的时候你妈妈还帮我们拍了合照，两个人很拘谨并羞涩。后来晚上一起散步回去的时候，你妈妈还记录下了我们，每当我看到这张照片的时候都会很感动。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-10-20.png'
    },
    {
        date: '2024年12月4日',
        title: '火花999天',
        description: '这一天是我们火花燃起的第999天，我们一起去吃了椿记，互相送彼此纪念日礼物，一场幸福而浪漫的约会。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-12-4.png'
    },
    {
        date: '2024年12月25日',
        title: '圣诞节',
        description: '这一天，我们一起去万象城看"雪"，互相送了彼此圣诞节礼物。手机记录下我们一起看"雪"的画面，很浪漫，很幸福。',
        image: 'https://raw.kkgithub.com/Crazy-Beeeeee/Images/refs/heads/main/images/2024-12-25.png'
    }
];

// 创建回忆卡片
function createMemoryCards() {
    const container = document.querySelector('.container');
    
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        card.innerHTML = `
            <div class="memory-image-container">
                <img src="${memory.image}" alt="${memory.title}" class="memory-img">
            </div>
            <div class="memory-text">
                <div class="memory-date">${memory.date}</div>
                <h2 class="memory-title">${memory.title}</h2>
                <p class="memory-description">${memory.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 滚动时显示卡片的动画效果
function handleScroll() {
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85) {
            card.classList.add('visible');
        }
    });
}

// 计算在一起的时间
function updateCounter() {
    // 设置在一起的日期：2022年6月18日
    const startDate = new Date(2022, 5, 18); // 注意月份从0开始，所以6月是5
    const currentDate = new Date();
    
    // 计算时间差（毫秒）
    const timeDiff = currentDate - startDate;
    
    // 计算天数、小时数、分钟数和秒数
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    // 更新DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// 创建浮动爱心
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-container');
    const heartSymbols = ['❤', '💕', '💖', '💘', '💓', '💗', '💝'];
    const heartCount = 40; // 增加爱心数量，从20增加到40
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            createHeart(container, heartSymbols);
        }, i * 800); // 减少间隔时间，从1500ms减少到800ms
    }
    
    // 每15秒重新创建一批爱心
    setInterval(() => {
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                createHeart(container, heartSymbols);
            }, i * 800); // 同样减少间隔时间
        }
    }, 30000);
}

// 创建单个爱心
function createHeart(container, symbols) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // 随机选择爱心符号
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    heart.innerHTML = randomSymbol;
    
    // 随机位置和大小 - 增加最大尺寸
    const size = Math.random() * 35 + 10; // 10-45px (原来是10-40px)
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    
    // 随机动画时间 - 稍微加快动画速度
    const animationDuration = Math.random() * 8 + 8; // 8-16秒 (原来是10-20秒)
    heart.style.animationDuration = `${animationDuration}s`;
    
    // 保持同时有上下浮动的爱心
    if (Math.random() > 0.5) {
        heart.style.animationName = 'float-up';
        heart.style.bottom = '-50px';
    } else {
        heart.style.animationName = 'float-down';
        heart.style.top = '-50px';
    }
    
    // 添加到容器中
    container.appendChild(heart);
    
    // 动画结束后移除元素
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    createMemoryCards();
    
    // 初始检查一次，显示首屏内容
    handleScroll();
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    // 初始化计时器
    updateCounter();
    
    // 每秒更新一次计时器
    setInterval(updateCounter, 1000);
    
    // 初始化浮动爱心
    createFloatingHearts();
}); 
