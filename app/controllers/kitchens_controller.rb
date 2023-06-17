class KitchensController < ApplicationController
  before_action :set_user
  
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

  def update
    @kitchen = Kitchen.find(params[:id])
    if @kitchen.update(kitchen_params)
      redirect_to kitchen_items_path(@kitchen), notice: '更新されました。'
    else
      flash[:alert] = '更新に失敗しました。'
      redirect_to kitchen_items_path(@kitchen)
    end
  end

  def destroy
    @kitchen = Kitchen.find(params[:id])
    @kitchen.destroy
    redirect_to kitchens_url, notice: "関連するアイテムが削除されました。"
  end

  private

  def set_user
    if current_user.nil?
      redirect_to tops_path
    else
      @user = current_user
    end
  end

  def kitchen_params
    params.require(:kitchen).permit(:kitchen_type_id, :name)
  end
end
