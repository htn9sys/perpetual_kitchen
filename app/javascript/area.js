document.addEventListener("DOMContentLoaded", function() {
  const selectButton = document.getElementById("select-button");
  const candidatesContainer = document.getElementById("candidates-container");

  selectButton.addEventListener("click", function() {
    const candidates = [
      { name: "庭", path: "/gardens" },
      { name: "キッチン", path: "/kitchens" },
      { name: "廊下", path: "/corridors" },
      { name: "倉庫", path: "/storages" }
    ];

    let candidatesHTML = "";
    candidates.forEach(function(candidate) {
      candidatesHTML += `<div class="candidate" data-path="${candidate.path}">${candidate.name}</div>`;
    });

    candidatesContainer.innerHTML = candidatesHTML;

    const candidateElements = document.querySelectorAll(".candidate");
    candidateElements.forEach(function(candidateElement) {
      candidateElement.addEventListener("click", function() {
        const path = candidateElement.getAttribute("data-path");
        window.location.href = path;
      });
    });

    candidatesContainer.style.display = "block";
  });

  document.addEventListener("click", function(event) {
    const target = event.target;
    const isSelectButton = target === selectButton;
    const isCandidateElement = candidatesContainer.contains(target);

    if (!isSelectButton && !isCandidateElement) {
      candidatesContainer.style.display = "none";
    }
  });
});
