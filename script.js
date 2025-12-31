// 다크모드
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 계산기
function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "숫자를 입력하세요.";
    return;
  }

  document.getElementById("result").innerText =
    "결과: " + (num1 + num2);
}

// 투두리스트
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.innerText = text;

  li.addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}
