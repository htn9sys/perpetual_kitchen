document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button2");
  const candidatesContainer2 = document.getElementById("candidates-container2");
  const typeSelect = document.createElement("select");
  const nameInput = document.createElement("input");
  const saveButton = document.createElement("button");

  const types = [
    { id: 2, name: '冷蔵庫' },
    { id: 3, name: '大型冷蔵庫' },
    { id: 4, name: '棚' },
    { id: 5, name: '段ボール' }
  ];

  selectButton2.addEventListener("click", function() {
    typeSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "---";
    typeSelect.appendChild(defaultOption);

    types.forEach(function(type) {
      let option = document.createElement("option");
      option.value = type.id;
      option.textContent = type.name;
      typeSelect.appendChild(option);
    });

    candidatesContainer2.innerHTML = "";
    candidatesContainer2.appendChild(typeSelect);
    candidatesContainer2.appendChild(nameInput);
    candidatesContainer2.appendChild(saveButton);
    candidatesContainer2.style.display = "block";
  });

  saveButton.addEventListener("click", function() {
    const typeId = typeSelect.value;
    const name = nameInput.value;
    saveCandidate(typeId, name);
  });

  saveButton.textContent = "追加";

});

function saveCandidate(typeId, name) {
  if (typeId === "") {
    console.log("選択されたタイプがありません。");
    return;
  }
  if (typeId === "1") {
    console.log("選択できないタイプです。");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/kitchens", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  // CSRFトークンをリクエストヘッダに追加する
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  xhr.setRequestHeader("X-CSRF-Token", token);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("保存が成功しました。");
        hideCandidatesContainer(); // 保存成功時に吹き出しを非表示にする
      } else {
        console.log("保存中にエラーが発生しました。");
      }
    }
  };

  const data = {
    kitchen: {
      type_id: typeId,
      name: name
    }
  };

  xhr.send(JSON.stringify(data));

  function hideCandidatesContainer() {
    const candidatesContainer2 = document.getElementById("candidates-container2");
    candidatesContainer2.style.display = "none";
  }
}