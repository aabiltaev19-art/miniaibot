const messages = document.getElementById("messages");
const input = document.getElementById("input");

function add(text, type) {
  const div = document.createElement("div");
  div.className = type;
  div.innerHTML = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function send() {
  const text = input.value.trim();
  if (!text) return;

  add(text, "user");

  setTimeout(() => {
    add(generateResponse(text), "bot");
  }, 600);

  input.value = "";
}

function generateResponse(text) {
  const t = text.toLowerCase();

  if (t.includes("привет")) return "Привет 👋 Чем могу помочь?";
  if (t.includes("как дела")) return "У меня всё отлично 😄 А у тебя?";
  if (t.includes("кто ты")) return "Я MiniAI — простой чат-бот, который отвечает на вопросы.";
  
  if (t.includes("html")) return "HTML — это язык разметки для создания сайтов.";
  if (t.includes("css")) return "CSS отвечает за внешний вид сайта.";
  if (t.includes("js") || t.includes("javascript")) return "JavaScript делает сайт интерактивным.";

  if (t.includes("совет")) return "Мой совет: учись регулярно и практикуйся каждый день 💡";
  if (t.includes("любовь")) return "Любовь — это когда хочется заботиться о человеке ❤️";

  if (t.includes("работа")) return "Важно выбрать работу, которая тебе нравится и развивает тебя.";
  
  return "Интересный вопрос 🤔 Попробуй переформулировать или уточнить, и я постараюсь помочь.";
}

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") send();
});
