document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button3");
  const candidatesContainerCorridor = document.getElementById("candidates-container_corridor");
  const corridorTypeSelect = document.createElement("select");
  const nameInput = document.createElement("input");
  const saveButton = document.createElement("button");

  const corridorTypes = [
    { id: 2, name: '冷蔵庫' },
    { id: 3, name: '大型冷蔵庫' },
    { id: 4, name: '棚' },
    { id: 5, name: '段ボール' }
  ];

  selectButton2.addEventListener("click", function() {
    corridorTypeSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "---";
    corridorTypeSelect.appendChild(defaultOption);

    corridorTypes.forEach(function(corridorType) {
      let option = document.createElement("option");
      option.value = corridorType.id;
      option.textContent = corridorType.name;
      corridorTypeSelect.appendChild(option);
    });

    candidatesContainerCorridor.innerHTML = "";
    candidatesContainerCorridor.appendChild(corridorTypeSelect);
    candidatesContainerCorridor.appendChild(nameInput);
    candidatesContainerCorridor.appendChild(saveButton);
    candidatesContainerCorridor.style.display = "block";
  });

  saveButton.addEventListener("click", function() {
    const corridorTypeId = corridorTypeSelect.value;
    const name = nameInput.value;
    saveCandidate(corridorTypeId, name);
  });

  saveButton.textContent = "追加";

});

function saveCandidate(storageTypeId, name) {
  if (storageTypeId === "") {
    alert("選択されたタイプがありません。");
    return;
  }
  if (storageTypeId === "1") {
    alert("選択できないタイプです。");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/storages", true);
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
        const response = JSON.parse(xhr.responseText);
        const errors = response.errors;
        const errorMessage = "入力情報が不足しています: " + errors.join(", ");
        alert(errorMessage);
      }
    }
  };

  const data = {
    corridor: {
      corridor_type_id: corridorTypeId,
      name: name
    }
  };

  xhr.send(JSON.stringify(data));

  function hideCandidatesContainer() {
    const candidatesContainerCorridor = document.getElementById("candidates-container_corridor");
    candidatesContainerCorridor.style.display = "none";
  }
}