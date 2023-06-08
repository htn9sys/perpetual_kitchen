class CorridorsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  
  def index
    @corridors = Corridor.all
  end

  def new
    @corridor = Corridor.new
  end

  def create
    @corridor = Corridor.new(corridor_params.merge(user_id: current_user.id))

    if @corridor.save
      redirect_to corridors_path
    else
      render :new
    end
  end

  def update
    @corridor = Corridor.find(params[:id])
    if @corridor.update(corridor_params)
      redirect_to corridor_items_path(@corridor), notice: 'キッチンが更新されました。'
    else
      flash[:alert] = 'キッチンの更新に失敗しました。'
      redirect_to corridor_items_path(@corridor)
    end
  end

  def destroy
    @corridor = Corridor.find(params[:id])
    @corridor.destroy
    redirect_to corridors_url, notice: "キッチンと関連するアイテムが削除されました。"
  end

  private

  def corridor_params
    params.require(:corridor).permit(:corridor_type_id, :name)
  end
end
