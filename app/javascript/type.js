document.addEventListener("DOMContentLoaded", function() {
  const candidatesContainer2 = document.getElementById("candidates-container2");
  const kitchenTypeSelect = document.createElement("select");
  const nameInput = document.createElement("input");
  const saveButton = document.createElement("button");

  const kitchenTypes = [
    { id: 2, name: '冷蔵庫' },
    { id: 3, name: '大型冷蔵庫' },
    { id: 4, name: '棚' },
    { id: 5, name: '段ボール' }
  ];

  ("click", function() {
    kitchenTypeSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "---";
    kitchenTypeSelect.appendChild(defaultOption);

    kitchenTypes.forEach(function(kitchenType) {
      let option = document.createElement("option");
      option.value = kitchenType.id;
      option.textContent = kitchenType.name;
      kitchenTypeSelect.appendChild(option);
    });

    candidatesContainer2.innerHTML = "";
    candidatesContainer2.appendChild(kitchenTypeSelect);
    candidatesContainer2.appendChild(nameInput);
    candidatesContainer2.appendChild(saveButton);
    candidatesContainer2.style.display = "block";
  });

  saveButton.addEventListener("click", function() {
    const kitchenTypeId = kitchenTypeSelect.value;
    const name = nameInput.value;
    saveCandidate(kitchenTypeId, name);
  });

  saveButton.textContent = "追加";

});

function saveCandidate(kitchenTypeId, name) {
  if (kitchenTypeId === "") {
    console.log("選択されたタイプがありません。");
    return;
  }
  if (kitchenTypeId === "1") {
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
        location.reload(); // ページをリロードする
      } else {
        console.log("保存中にエラーが発生しました。");
      }
    }
  };

  const data = {
    kitchen: {
      kitchen_type_id: kitchenTypeId,
      name: name
    }
  };

  xhr.send(JSON.stringify(data));

  function hideCandidatesContainer() {
    const candidatesContainer2 = document.getElementById("candidates-container2");
    candidatesContainer2.style.display = "none";
  }
}
