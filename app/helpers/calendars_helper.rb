module CalendarsHelper
  def day_classes(day)
    classes = ['day', "wday-#{day.wday}"]
    classes << 'past' if day < Date.today
    classes << 'today' if day == Date.today
    classes << 'future' if day > Date.today
    classes << 'current-month' if day.month == start_date.month
    classes << 'prev-month' if day.month < start_date.month
    classes << 'next-month' if day.month > start_date.month
    classes
  end

  def sorted_calendars
    @sorted_calendars ||= begin
      calendars = Calendar.where(start_date: start_date.beginning_of_month..start_date.end_of_month)
      calendars.group_by(&:start_date)
    end
  end

  def color_code_for(color_id)
    color = Color.find_by(id: color_id)
    color.present? ? color.code : '#ffffff'
  end
end
