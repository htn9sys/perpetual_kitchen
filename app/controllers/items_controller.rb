class ItemsController < ApplicationController
  before_action :set_area
  before_action :set_user
  before_action :set_item, only: [:edit, :update, :destroy]

  def index
    if @kitchen
      @items = @kitchen.items.order(date: :asc)
    elsif @corridor
      @items = @corridor.items.order(date: :asc)
    elsif @garden
      @items = @garden.items.order(date: :asc)
    elsif @storage
      @items = @storage.items.order(date: :asc)
    else
      @items = Item.none
    end

    @item = Item.new
    @today = Date.today
    @one_week_ago = @today + 7.days
  end

  def create
    if @kitchen
      @item = @kitchen.items.build(item_params)
    elsif @corridor
      @item = @corridor.items.build(item_params)
    elsif @garden
      @item = @garden.items.build(item_params)
    elsif @storage
      @item = @storage.items.build(item_params)
    else
      flash.now[:alert] = 'Invalid request.'
      @items = Item.none
      render 'index' and return
    end
  
    @item.user = @user
  
    if @item.save
      if @kitchen
        redirect_to kitchen_items_path(@kitchen), notice: 'Item created successfully.'
      elsif @corridor
        redirect_to corridor_items_path(@corridor), notice: 'Item created successfully.'
      elsif @garden
        redirect_to garden_items_path(@garden), notice: 'Item created successfully.'
      elsif @garden
        redirect_to storage_items_path(@storage), notice: 'Item created successfully.'
      end
    else
      flash.now[:alert] = 'Failed to create item.'
      @items = @kitchen.items.order(date: :asc) if @kitchen
      @items = @corridor.items.order(date: :asc) if @corridor
      @items = @garden.items.order(date: :asc) if @garden
      @items = @storage.items.order(date: :asc) if @storage
      render 'index'
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      if @kitchen
        redirect_to kitchen_items_path(@kitchen), notice: 'Item updated successfully.'
      elsif @corridor
        redirect_to corridor_items_path(@corridor), notice: 'Item updated successfully.'
      elsif @garden
        redirect_to garden_items_path(@garden), notice: 'Item updated successfully.'
      elsif @garden
        redirect_to storage_items_path(@storage), notice: 'Item updated successfully.'
      end
    else
      flash.now[:alert] = 'Failed to update item.'
      render 'index'
    end
  end

  def destroy
    if @item.destroy
      if @kitchen
        redirect_to kitchen_items_path(@kitchen), notice: 'Item deleted successfully.'
      elsif @corridor
        redirect_to corridor_items_path(@corridor), notice: 'Item deleted successfully.'
      elsif @garden
        redirect_to garden_items_path(@garden), notice: 'Item deleted successfully.'
      elsif @garden
        redirect_to storage_items_path(@storage), notice: 'Item deleted successfully.'
      end
    else
      flash[:alert] = 'Failed to delete item.'
    end
  end

  private

  def set_area
    if params[:kitchen_id].present?
      @kitchen = Kitchen.find(params[:kitchen_id])
      @corridor = nil
      @garden = nil
      @storage = nil
    elsif params[:corridor_id].present?
      @corridor = Corridor.find(params[:corridor_id])
      @kitchen = nil
      @garden = nil
      @storage = nil
    elsif params[:garden_id].present?
      @garden = Garden.find(params[:garden_id])
      @kitchen = nil
      @corridor = nil
      @storage = nil
    elsif params[:storage_id].present?
      @storage = Storage.find(params[:storage_id])
      @kitchen = nil
      @corridor = nil
      @garden = nil
    else
      flash.now[:alert] = 'Invalid request.'
      @items = Item.none
      render 'index' and return
    end
  end

  def set_item
    if @kitchen
      @item = @kitchen.items.find(params[:id])
    elsif @corridor
      @item = @corridor.items.find(params[:id])
    elsif @garden
      @item = @garden.items.find(params[:id])
    elsif @storage
      @item = @storage.items.find(params[:id])
    end
  end

  def set_user
    @user = current_user
  end

  def item_params
    params.require(:item).permit(:name, :quantity, :unit_id, :date_type_id, :date, :description)
  end
end
