class GardensController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @gardens = Garden.all
  end

  def new
    @garden = Garden.new
  end

  def create
    @garden = Garden.new(garden_params.merge(user_id: current_user.id))

    if @garden.save
      redirect_to gardens_path
    else
      render :new
    end
  end

  def update
    @garden = Garden.find(params[:id])
    if @garden.update(garden_params)
      redirect_to garden_items_path(@garden), notice: 'キッチンが更新されました。'
    else
      flash[:alert] = 'キッチンの更新に失敗しました。'
      redirect_to garden_items_path(@garden)
    end
  end

  def destroy
    @garden = Garden.find(params[:id])
    @garden.destroy
    redirect_to gardens_url, notice: "キッチンと関連するアイテムが削除されました。"
  end

  private

  def garden_params
    params.require(:garden).permit(:garden_type_id, :name)
  end
end
