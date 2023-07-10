let btn=document.getElementById('btn');
let output=document.getElementById('output');

let quotes=['“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney',
                'd“The secret of getting ahead is getting started.” —Mark Twain',
                '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz',
                '“Do what you feel in your heart to be right―for you’ll be criticized anyway.” ―Eleanor Roosevelt',
                '“Happiness is not something ready made. It comes from your own actions.” ―Dalai Lama XIV',
                '“You can either experience the pain of discipline or the pain of regret. The choice is yours.” —Himanshi',
                '“Your passion is waiting for your courage to catch up.” —Isabelle Lafleche',
                '“Magic is believing in yourself. If you can make that happen, you can make anything happen.” —Johann Wolfgang Von Goethe',
                '“If something is important enough, even if the odds are stacked against you, you should still do it.” —Elon Musk',
                '“Don’t be afraid to give up the good to go for the great.” —John D. Rockefeller',
                '“People who wonder if the glass is half empty or full miss the point. The glass is refillable.” —Ankit',
                '“No one is to blame for your future situation but yourself. If you want to be successful, then become ‘Successful.’” ―Jaymin Shah',
                '“Things may come to those who wait, but only the things left by those who hustle.” ―Abraham Lincoln',
                '“Work like there is someone working 24 hours a day to take it away from you.” ―Mark Cuban',
                '“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” ―Aristotle',
                '“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” ―Sheryl Sandberg'
];


btn.addEventListener('click',function(){
    var randq=quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML=randq;
})