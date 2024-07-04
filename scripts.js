alert("Welcome to Temitope's Personal Website");

function updateTime() {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000; // offset in milliseconds
    const watOffset = 3600000; // WAT is UTC+1
    const watTime = new Date(now.getTime() + utcOffset + watOffset);
    const watTimeString = watTime.toTimeString().split(' ')[0];
    const dayOfWeek = watTime.toLocaleString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeWAT"]').textContent = watTimeString;
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}

setInterval(updateTime, 1000);
updateTime();
