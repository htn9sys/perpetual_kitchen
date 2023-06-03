// カレンダーの日付要素を取得
const dateElements = document.querySelectorAll('.day');

// 各日付ごとに処理を実行
dateElements.forEach(dateElement => {
  // 日付要素のデータ属性から対応するイベント要素を取得
  const eventId = dateElement.dataset.eventId;
  const eventBox = document.querySelector(`.event-title[data-event-id="${eventId}"]`);

  // イベント要素が存在する場合のみ処理を実行
  if (eventBox) {
    // イベントの期間を計算
    const startCell = dateElement.parentNode.parentNode;
    const startOffset = Array.prototype.indexOf.call(startCell.parentNode.children, startCell);
    const eventExtend = document.createElement('div');
    eventExtend.classList.add('event-extend');
    eventExtend.style.left = startOffset * startCell.offsetWidth + 'px';
    eventBox.appendChild(eventExtend);

    // イベントの終了日以降の要素にクラスを追加
    const endDate = eventBox.dataset.endDate;
    if (endDate) {
      const endDateObj = new Date(endDate);
      const endCell = Array.from(dateElements).find(el => el.textContent === endDateObj.getDate().toString()).parentNode.parentNode;
      let currentCell = startCell.nextElementSibling;
      while (currentCell && currentCell !== endCell) {
        const eventExtend = currentCell.querySelector('.event-extend');
        if (eventExtend) {
          eventExtend.classList.add('active');
        }
        currentCell = currentCell.nextElementSibling;
      }
    }
  }
});
