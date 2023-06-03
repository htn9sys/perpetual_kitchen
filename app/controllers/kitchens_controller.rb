class KitchensController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @kitchens = Kitchen.all
  end

  def new
    @kitchen = Kitchen.new
  end

  def create
    @kitchen = Kitchen.new(kitchen_params.merge(user_id: current_user.id))

    if @kitchen.save
      redirect_to kitchens_path
    else
      render :new
    end
  end

  def show
    @kitchen = Kitchen.find(params[:id])
  end

  private

  def kitchen_params
    params.require(:kitchen).permit(:type_id, :name)
  end
end
