class ItemsController < ApplicationController
  before_action :set_kitchen
  before_action :set_user

  def index
    @items = @kitchen.items.order(date: :asc)
    @item = Item.new
  end

  def create
    @item = @kitchen.items.build(item_params)
    @item.user = @user
  
    if @item.save
      redirect_to kitchen_items_path(@kitchen), notice: 'Item created successfully.'
    else
      flash.now[:alert] = 'Failed to create item.'
      @items = @kitchen.items.order(date: :asc)
      render 'index'
    end
  end

  private

  def set_kitchen
    @kitchen = Kitchen.find(params[:kitchen_id])
  end

  def set_user
    @user = current_user # ユーザーIDの取得方法に応じて修正してください
  end

  def item_params
    params.require(:item).permit(:name, :quantity, :unit_id, :date_type_id, :date, :description)
  end

  def kitchen_params
    params.require(:kitchen).permit(:name)
  end
end
