class CalendarsController < ApplicationController
  before_action :set_user

  def index
    @calendars = Calendar.all
  end
  
  def new
    @calendar = Calendar.new(calendar_params)
  end

  def show
    @calendar = Calendar.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @calendar.to_json }
    end
  end

  def update
    @calendar = Calendar.find(params[:id])
    if @calendar.update(calendar_params)
      render json: @calendar
    else
      render json: @calendar.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @calendar = Calendar.find(params[:id])
    @calendar.destroy
    head :no_content
  end
  
  def create
    @calendar = Calendar.new(event_params)
    @calendar.user_id = current_user.id
    
    if @calendar.save
      redirect_to calendars_path
    else
      render :index
    end
  end
  
  private

  def set_user
    if current_user.nil?
      redirect_to tops_path
    else
      @user = current_user
    end
  end
  
  def calendar_params
    params.require(:calendar).permit(:title, :description, :start_date, :end_date, :location, :color_id)
  end

  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date, :location, :color_id)
  end
end
