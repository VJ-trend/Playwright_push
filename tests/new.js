let count = 0;
let interval = setInterval(() => {
    console.log("❤️➡");
    count++;
    if (count === 5) clearInterval(interval); // Stop after 5 times
}, 1000);
