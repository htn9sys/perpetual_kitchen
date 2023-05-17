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

## items テーブル

| Column       | Type       | Options                        |
| ------------ | ---------- | ------------------------------ |
| name         | string     | null: false,                   |
| type_id      | integer    | null: false,                   |
| list_id      | integer    | null: false,                   |
| quanity      | integer    | null: false,                   |
| unit_id      | integer    | null: false,                   |
| date_type_id | integer    | null: false,                   |
| date         | integer    | null: false,                   |
| notice_id    | integer    | null: false,                   |
| user         | references | null: false, foreign_key: true |
| kitchen      | references | null: false, foreign_key: true |
| calendar     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :kitchen
- belongs_to :calendar

## kitchens テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| type_id  | integer    | null: false,                   |
| shape_id | integer    | null: false,                   |
| color_id | integer    | null: false,                   |
| name_id  | integer    | null: false,                   |
| area_id  | integer    | null: false,                   |
| user     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :items

## calendars テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| title       | string     | null: false,                   |
| description | string     | null: false,                   |
| start_date  | date       | null: false,                   |
| end_date    | date       | null: false,                   |
| location    | string     |                                |
| color_id    | integer    | null: false,                   |
| user        | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :items