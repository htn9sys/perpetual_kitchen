# アプリケーション名

perpetual kitchen

# アプリケーション概要

様々な食材の保管場所、期限を管理する事ができる

# URL

https://perpetual-kitchen.onrender.com

# テスト用アカウント

・Basic認証ID：htn9sys

・Basic認証パスワード：aR6NqHXw

・メールアドレス：test@test.com

・パスワード：techcamp1

## 利用方法

1.ユーザーログイン(もしくは新規登録)をする

2.食材を保管した場所をクリック

3.食材を保管する収納を追加

4.収納場所をクリック

5.購入した食材の名前、賞味期限等を登録する

6.お知らせページで期限やカレンダーの予定を確認する


## アプリケーションを作成した背景

冷凍庫の整理をしていたら1970年代のガラムマサラが発見された。よく使う食材や、毎日確認する冷蔵庫で賞味期限を切らしてしまうことは少ないが、頻繁に使用しない調味料や、冷蔵庫以外にしまい込んだ食材も管理できるようにしたいと思った。

# 洗い出した要件
https://docs.google.com/spreadsheets/d/1gWj2RvTVhL7BvIR-Bv1XapCrM23yR7AwYPl8Huyq9bo/edit#gid=1785908763

# 実装した機能についてのGIF、及びその説明
■ログイン

[![Image from Gyazo](https://i.gyazo.com/767e7df3cf2afd1a5b654a591a8e8e3a.gif)](https://gyazo.com/767e7df3cf2afd1a5b654a591a8e8e3a)

■各エリアへの移動

・例：キッチンの冷蔵庫を確認

[![Image from Gyazo](https://i.gyazo.com/2503b8e4a237eda16eef6709f889dfb3.gif)](https://gyazo.com/2503b8e4a237eda16eef6709f889dfb3)

■食材の追加(日付順にソート、1週間前～当日までは赤、当日以降は青)

[![Image from Gyazo](https://i.gyazo.com/b661ac79ba714213989343a33e7dce40.gif)](https://gyazo.com/b661ac79ba714213989343a33e7dce40)

■カレンダーで予定を登録

[![Image from Gyazo](https://i.gyazo.com/af42f7fdb8f42b74e634355855217350.gif)](https://gyazo.com/af42f7fdb8f42b74e634355855217350)

■お知らせ機能(期限切れ、期限まで1週間の食材をお知らせ/当日、1週間前の予定をお知らせ)

[![Image from Gyazo](https://i.gyazo.com/32ad8ab89194a60415d1d47a1a3df90c.gif)](https://gyazo.com/32ad8ab89194a60415d1d47a1a3df90c)


# 実装予定の機能

収納の種類を増やしたい

食材がどこにあるか、検索できるようにする

バリデーションを設定し、情報入力に漏れがある場合に登録せず、そのページにとどまり、アラートが出るようにする

# データベース設計

[![Image from Gyazo](https://i.gyazo.com/c5b9fd9ef53981f5bf1296db885045a5.png)](https://gyazo.com/c5b9fd9ef53981f5bf1296db885045a5)


# 画面遷移図

[![Image from Gyazo](https://i.gyazo.com/54f48c8c9762c3c30a239add64c617da.png)](https://gyazo.com/54f48c8c9762c3c30a239add64c617da)

# 開発環境

・フロントエンド(HTML/CSS/javascript/jQuery)

・バックエンド(Ruby/Ruby on Rails)

・インフラ

・テスト(未実装)

・テキストエディタ

・タスク管理

# ローカルでの動作方法
% git clone https://github.com/htn9sys/perpetual_kitchen.git

% cd perpetual_kitchen

% bundle install

% yarn install

# 工夫したポイント

食材管理は意外と面倒なものなので、ゲーム感覚で楽しく使用できるように動きのある収納を作成。

参考にしたのは脱出ゲーム。

見た目もこだわり、修正や削除が手間にならないよう、非同期通信を多めに組み込んだ。

[def]: https://gyazo.com/239af124ca8ff54ef3b253327fa6c7cf