class StoragesController < ApplicationController
  before_action :set_user
  
  def index
    @storages = Storage.all
  end

  def new
    @storage = Storage.new
  end

  def create
    @storage = Storage.new(storage_params.merge(user_id: current_user.id))

    if @storage.save
      redirect_to storages_path
    else
      render :new
    end
  end

  def update
    @storage = Storage.find(params[:id])
    if @storage.update(storage_params)
      redirect_to storage_items_path(@storage), notice: '更新されました。'
    else
      flash[:alert] = '更新に失敗しました。'
      redirect_to storage_items_path(@storage)
    end
  end

  def destroy
    @storage = Storage.find(params[:id])
    @storage.destroy
    redirect_to storages_url, notice: "関連するアイテムが削除されました。"
  end

  private

  def set_user
    if current_user.nil?
      redirect_to tops_path
    else
      @user = current_user
    end
  end

  def storage_params
    params.require(:storage).permit(:storage_type_id, :name)
  end
end
