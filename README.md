# テーブル設計

## users テーブル

| Column             | Type   | Options                   |
| ------------------ | ------ | ------------------------- |
| nickname           | string | null: false,              |
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false,              |
| birth_date         | date   | null: false,              |

### Association

- has_many :items
- has_many :calendars
- has_many :kitchens
- has_many :corridors
- has_many :gardens
- has_many :storages

## items テーブル

| Column       | Type       | Options                        |
| ------------ | ---------- | ------------------------------ |
| name         | string     | null: false,                   |
| quantity     | integer    | null: false,                   |
| unit_id      | integer    | null: false,                   |
| date_type_id | integer    | null: false,                   |
| date         | date       | null: false,                   |
| description  | text       |                                |
| user         | references | null: false, foreign_key: true |
| kitchen      | references | foreign_key: true              |
| corridor     | references | foreign_key: true              |
| garden       | references | foreign_key: true              |
| storage      | references | foreign_key: true              |

### Association

- belongs_to :user
- belongs_to :kitchen
- belongs_to :corridor
- belongs_to :garden
- belongs_to :storage
- belongs_to :calendar

## kitchens テーブル
## corridors テーブル
## gardens テーブル
## storages テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| type_id  | integer    | null: false,                   |
| name     | string     | null: false,                   |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :items

## calendars テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| title       | string     | null: false,                   |
| description | string     |                                |
| start_date  | date       | null: false,                   |
| end_date    | date       | null: false,                   |
| location    | string     |                                |
| color_id    | integer    |                                |
| user        | references | null: false, foreign_key: true |

### Association

- belongs_to :user