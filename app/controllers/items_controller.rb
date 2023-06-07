class ItemsController < ApplicationController
  before_action :set_kitchen
  before_action :set_user
  before_action :set_item, only: [:edit, :update, :destroy]

  def index
    @items = @kitchen.items.order(date: :asc)
    @item = Item.new

    @today = Date.today
    @one_week_ago = @today + 7.days
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

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to kitchen_items_path(@kitchen), notice: 'Item updated successfully.'
    else
      flash.now[:alert] = 'Failed to update item.'
      render 'index'
    end
  end

  def destroy
    @item.destroy
    redirect_to kitchen_items_path(@kitchen), notice: 'Item deleted successfully.'
  end

  private

  def set_kitchen
    @kitchen = Kitchen.find(params[:kitchen_id])
  end

  def set_item
    @item = @kitchen.items.find(params[:id])
  end

  def set_user
    @user = current_user
  end

  def item_params
    params.require(:item).permit(:name, :quantity, :unit_id, :date_type_id, :date, :description)
  end
end