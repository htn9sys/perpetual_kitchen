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

  def update
    @kitchen = Kitchen.find(params[:id])
    if @kitchen.update(kitchen_params)
      redirect_to kitchen_items_path(@kitchen), notice: 'キッチンが更新されました。'
    else
      flash[:alert] = 'キッチンの更新に失敗しました。'
      redirect_to kitchen_items_path(@kitchen)
    end
  end

  def destroy
    @kitchen = Kitchen.find(params[:id])
    @kitchen.destroy
    redirect_to kitchens_url, notice: "キッチンと関連するアイテムが削除されました。"
  end

  private

  def kitchen_params
    params.require(:kitchen).permit(:kitchen_type_id, :name)
  end
end
