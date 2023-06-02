// date.js

// カレンダーの日付要素を取得
const dateElements = document.querySelectorAll('.day');

// 各日付ごとに処理を実行
dateElements.forEach(dateElement => {
  // 日付要素のデータ属性から対応するカラーボックスを取得
  const eventId = dateElement.dataset.eventId;
  const eventBox = document.querySelector(`.event-title[data-event-id="${eventId}"]`);

  // カラーボックスが存在する場合のみ処理を実行
  if (eventBox) {
    // カラーボックスを延長させる
    const endElement = dateElement.parentNode.parentNode.lastChild.firstChild;
    if (endElement && endElement.classList.contains('event-title')) {
      const eventTitleExtend = document.createElement('div');
      eventTitleExtend.classList.add('event-title-extend');
      eventBox.appendChild(eventTitleExtend);
    }
  }
});
