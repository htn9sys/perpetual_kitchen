document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button5");
  const candidatesContainerStorage = document.getElementById("candidates-container_storage");
  const storageTypeSelect = document.createElement("select");
  const nameInput = document.createElement("input");
  const saveButton = document.createElement("button");

  const storageTypes = [
    { id: 2, name: '冷蔵庫' },
    { id: 3, name: '大型冷蔵庫' },
    { id: 4, name: '棚' },
    { id: 5, name: '段ボール' }
  ];

  selectButton2.addEventListener("click", function() {
    storageTypeSelect.innerHTML = "";
    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "---";
    storageTypeSelect.appendChild(defaultOption);

    storageTypes.forEach(function(storageType) {
      let option = document.createElement("option");
      option.value = storageType.id;
      option.textContent = storageType.name;
      storageTypeSelect.appendChild(option);
    });

    candidatesContainerStorage.innerHTML = "";
    candidatesContainerStorage.appendChild(storageTypeSelect);
    candidatesContainerStorage.appendChild(nameInput);
    candidatesContainerStorage.appendChild(saveButton);
    candidatesContainerStorage.style.display = "block";
  });

  saveButton.addEventListener("click", function() {
    const storageTypeId = storageTypeSelect.value;
    const name = nameInput.value;
    saveCandidate(storageTypeId, name);
  });

  saveButton.textContent = "追加";

});

function saveCandidate(storageTypeId, name) {
  if (storageTypeId === "") {
    console.log("選択されたタイプがありません。");
    return;
  }
  if (storageTypeId === "1") {
    console.log("選択できないタイプです。");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/storages", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  xhr.setRequestHeader("X-CSRF-Token", token);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("保存が成功しました。");
        hideCandidatesContainer();
        // location.reload();
        window.location.href = "/new_page";
      } else {
        console.log("保存中にエラーが発生しました。");
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