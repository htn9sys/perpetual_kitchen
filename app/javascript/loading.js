document.addEventListener('DOMContentLoaded', function() {
  var loadingScreen = document.getElementById('loading-screen');

  // ページのロードが完了したらローディング画面を非表示にする
  window.addEventListener('load', function() {
    setTimeout(function() {
      loadingScreen.style.display = 'none';
    }, 1000); 
  });

  // ページ遷移時にローディング画面を表示する
  document.addEventListener('ajax:beforeSend', function() {
    loadingScreen.style.display = 'flex';
  });
});
