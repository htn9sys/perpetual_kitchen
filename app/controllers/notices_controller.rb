class NoticesController < ApplicationController
  def index
    @items = Item.where("date <= ?", Date.today + 7.days)
    @today = Date.today
    @one_week_later = Date.today + 7.days

    @calendars = Calendar.where(start_date: [@today, @one_week_later])
    @today_calendars = @calendars.select { |calendar| calendar.start_date == @today }
    @one_week_later_calendars = @calendars.select { |calendar| calendar.start_date == @one_week_later }
  end
end