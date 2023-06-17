class CorridorsController < ApplicationController
  before_action :set_user
  
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
      redirect_to corridor_items_path(@corridor), notice: '更新されました。'
    else
      flash[:alert] = '更新に失敗しました。'
      redirect_to corridor_items_path(@corridor)
    end
  end

  def destroy
    @corridor = Corridor.find(params[:id])
    @corridor.destroy
    redirect_to corridors_url, notice: "関連するアイテムが削除されました。"
  end

  private

  def set_user
    if current_user.nil?
      redirect_to tops_path
    else
      @user = current_user
    end
  end

  def corridor_params
    params.require(:corridor).permit(:corridor_type_id, :name)
  end
end
