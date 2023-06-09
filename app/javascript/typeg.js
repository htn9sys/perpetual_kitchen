document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button4");
  const candidatesContainerGarden = document.getElementById("candidates-container_garden");
  const gardenTypeSelect = document.createElement("select");
  const nameInput = document.createElement("input");
  const saveButton = document.createElement("button");

  const gardenTypes = [
    { id: 2, name: '冷蔵庫' },
    { id: 3, name: '大型冷蔵庫' },
    { id: 4, name: '棚' },
    { id: 5, name: '段ボール' }
  ];

  selectButton2.addEventListener("click", function() {
    gardenTypeSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "---";
    gardenTypeSelect.appendChild(defaultOption);

    gardenTypes.forEach(function(gardenType) {
      let option = document.createElement("option");
      option.value = gardenType.id;
      option.textContent = gardenType.name;
      gardenTypeSelect.appendChild(option);
    });

    candidatesContainerGarden.innerHTML = "";
    candidatesContainerGarden.appendChild(gardenTypeSelect);
    candidatesContainerGarden.appendChild(nameInput);
    candidatesContainerGarden.appendChild(saveButton);
    candidatesContainerGarden.style.display = "block";
  });

  saveButton.addEventListener("click", function() {
    const gardenTypeId = gardenTypeSelect.value;
    const name = nameInput.value;
    saveCandidate(gardenTypeId, name);
  });

  saveButton.textContent = "追加";

});

function saveCandidate(gardenTypeId, name) {
  if (gardenTypeId === "") {
    console.log("選択されたタイプがありません。");
    return;
  }
  if (gardenTypeId === "1") {
    console.log("選択できないタイプです。");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/gardens", true);
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
    garden: {
      garden_type_id: gardenTypeId,
      name: name
    }
  };

  xhr.send(JSON.stringify(data));

  function hideCandidatesContainer() {
    const candidatesContainerGarden = document.getElementById("candidates-container_garden");
    candidatesContainerGarden.style.display = "none";
  }
}
