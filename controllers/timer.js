function timer(req, res) {
  const startTime = new Date();

  function updateTimer() {
    const now = new Date();
    const escapedTime = now - startTime;

    let min = Math.floor((escapedTime / (1000 * 60)) % 60);
    let sec = Math.floor((escapedTime / 1000) % 60);
    let mil = Math.floor((escapedTime % 1000) / 10);

    min <= 9 ? (min = `0` + min) : (min = min);
    sec <= 9 ? (sec = `0` + sec) : (sec = sec);
    mil <= 9 ? (mil = `0` + mil) : (mil = mil);
  }

  let interval = setInterval(updateTimer, 10);
  res.json({ message: `Timer`, timer: `time` });
}

module.exports = timer;
