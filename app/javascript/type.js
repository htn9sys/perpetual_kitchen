document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button2");
  const candidatesContainer2 = document.getElementById("candidates-container2");

  let candidates = [
    { name: "冷蔵庫" },
    { name: "大型冷蔵庫" },
    { name: "棚" },
    { name: "ダンボール" }
  ];

  selectButton2.addEventListener("click", function() {
    let candidatesHTML = "";
    candidates.forEach(function(candidate, index) {
      candidatesHTML += `
        <div class="candidate">
          <span>${candidate.name}</span>
          <input type="text" class="name-input" placeholder="名前を入力" onchange="updateName(${index}, this.value)">
          <button class="save-button" onclick="saveCandidate(${index})">保存</button>
        </div>`;
    });

    candidatesContainer2.innerHTML = candidatesHTML;
    candidatesContainer2.style.display = "block";
  });
});

function updateName(index, value) {
  candidates[index].name = value;
}

function saveCandidate(index) {
  const candidate = candidates[index];
  // ここで保存処理を行う（例: Ajaxリクエストを送信してサーバーにデータを保存するなど）
  console.log(`保存された名前: ${candidate.name}`);
}