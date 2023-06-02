$(document).ready(function() {
  $(document).on('click', '.event-title', function() {
    const eventId = $(this).data('event-id');
    const detailElement = $('#event-detail');
    const clickedTitle = $(this);

    // クリックしたイベントタイトルが既に表示されている場合は非表示にする
    if (clickedTitle.hasClass('active')) {
      detailElement.hide();
      clickedTitle.removeClass('active');
      return;
    }

    // 非同期通信で詳細情報を取得
    $.ajax({
      url: '/calendars/' + eventId,
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        const eventData = response;

        // カラープルダウンの選択肢を生成する関数
        function generateColorOptions(selectedColorId) {
          const colors = [
            { id: 1, name: 'None' },
            { id: 2, name: 'Red' },
            { id: 3, name: 'Blue' },
            { id: 4, name: 'Green' },
            { id: 5, name: 'Yellow' },
            { id: 6, name: 'Pink' }
          ];

          let options = '';
          for (const color of colors) {
            const selected = (color.id === selectedColorId) ? 'selected' : '';
            options += `<option value="${color.id}" ${selected}>${color.name}</option>`;
          }

          return options;
        }

        // 詳細情報を反映（直接編集可能）
        detailElement.html(`
        <div class="input-container">
          <p>タイトル</p>
          <input type="text" name="title" value="${eventData.title}">
        </div>
        <div class="input-container">
          <p>説明</p>
          <input type="text" name="description" value="${eventData.description}">
        </div>
        <div class="input-container">
          <p>いつから</p>
          <input type="date" name="start_date" value="${eventData.start_date}">
        </div>
        <div class="input-container">
          <p>いつまで</p>
          <input type="date" name="end_date" value="${eventData.end_date}">
        </div>
        <div class="input-container">
          <p>場所</p>
          <input type="text" name="location" value="${eventData.location}">
        </div>
        <div class="input-container">
          <p>カラー</p>
          <select name="color">${generateColorOptions(eventData.color_id)}</select>
        </div>
        <div class="calendar-button-container">
          <button class="save-button">保存</button>
          <button class="delete-button">削除</button>
        </div>
      `);


        // クリックしたイベントタイトルを表示し、位置を調整する
        detailElement.css({
          top: clickedTitle.offset().top + clickedTitle.outerHeight(),
          left: clickedTitle.offset().left
        }).show();

        // すべてのイベントタイトルからactiveクラスを削除
        $('.event-title').removeClass('active');

        clickedTitle.addClass('active');
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });

  // 保存ボタンのクリックイベント
  $(document).on('click', '.save-button', function() {
    const eventId = $('.event-title.active').data('event-id');
    const detailElement = $('#event-detail');
    const clickedTitle = $('.event-title.active');
    const eventData = {
      title: detailElement.find('input[name="title"]').val(),
      description: detailElement.find('input[name="description"]').val(),
      start_date: detailElement.find('input[name="start_date"]').val(),
      end_date: detailElement.find('input[name="end_date"]').val(),
      location: detailElement.find('input[name="location"]').val(),
      color_id: detailElement.find('select[name="color"]').val()
    };

    // カレンダーを更新
    $.ajax({
      url: '/calendars/' + eventId,
      method: 'PATCH',
      dataType: 'json',
      data: { calendar: eventData },
      success: function(response) {
        // 更新成功時の処理
        const updatedData = response;

        // タイトルとカラーを即座に反映
        clickedTitle.text(updatedData.title);
        clickedTitle.removeClass().addClass(`event-title color-${updatedData.color_id}`);

        // 編集画面を非表示にする
        detailElement.hide();
        $('.event-title.active').removeClass('active');
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });

  // 削除ボタンのクリックイベント
  $(document).on('click', '.delete-button', function() {
    const eventId = $('.event-title.active').data('event-id');
    const detailElement = $('#event-detail');

    // カレンダーを削除
    $.ajax({
      url: '/calendars/' + eventId,
      method: 'DELETE',
      success: function() {
        // 削除成功時の処理
        detailElement.hide();
        $('.event-title.active').removeClass('active');
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
    });
  });
});
