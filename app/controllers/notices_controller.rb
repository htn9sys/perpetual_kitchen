class NoticesController < ApplicationController
  def index
    @items = Item.where("date <= ?", Date.today + 7.days)
    @today_calendar = Calendar.find_by(start_date: Date.today)
    @one_week_later_calendar = Calendar.find_by(start_date: Date.today + 7.days)
    @today = Date.today
    @one_week_later = Date.today + 7.days
  end
end