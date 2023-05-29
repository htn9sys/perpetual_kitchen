document.addEventListener("DOMContentLoaded", function() {
  const selectButton2 = document.getElementById("select-button2");
  const candidatesContainer2 = document.getElementById("candidates-container2");
  const kitchenContainer = document.getElementById("kitchen-container");
  const slideContainerStorage = document.getElementById("slide-container-storage");
  let refrigeratorCount = 0;

  let candidates = [
    { name: "冷蔵庫", path: "/javascript/refrigerator.js" },
    { name: "大型冷蔵庫", path: "/javascript/large-refrigerator.js" },
    { name: "棚", path: "/javascript/shelf.js" },
    { name: "ダンボール", path: "/javascript/cardboard-box.js" }
  ];

  selectButton2.addEventListener("click", function() {
    let candidatesHTML = "";
    candidates.forEach(function(candidate) {
      candidatesHTML += `<div class="candidate" data-path="${candidate.path}">${candidate.name}</div>`;
    });

    candidatesContainer2.innerHTML = candidatesHTML;
    candidatesContainer2.style.display = "block";
  });

  document.addEventListener("click", function(event) {
    const target = event.target;
    const isSelectButton2 = target === selectButton2;
    const isCandidateElement2 = candidatesContainer2.contains(target);

    if (!isSelectButton2 && !isCandidateElement2) {
      candidatesContainer2.style.display = "none";
    }
  });

  kitchenContainer.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains("refrigerator")) {
      if (refrigeratorCount < 5) {
        refrigeratorCount++;
        const newRefrigerator = document.createElement("div");
        newRefrigerator.classList.add("refrigerator");
        newRefrigerator.textContent = "冷蔵庫 " + refrigeratorCount;
        slideContainerStorage.appendChild(newRefrigerator);
      }
    }
  });
});