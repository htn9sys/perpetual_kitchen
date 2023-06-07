class GardensController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    # 日付の範囲を定義
    start_date = Date.today - 7.days
    end_date = Date.today

    # アイテムの日付情報を取得
    @items = Item.where(date: start_date..end_date).includes(:kitchen, :date_type)
    @calendar = Calendar.find_by(date: end_date)
  end
end
