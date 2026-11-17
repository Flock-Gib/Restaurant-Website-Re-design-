const today = document.querySelector("[data-today]");

if (today) {
  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/New_York",
  }).format(new Date());
  const closingTime = day === "Saturday" || day === "Sunday" ? "2" : "1";
  today.textContent = `${day} · 7 AM–${closingTime} PM`;
}
