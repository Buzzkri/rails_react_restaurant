class Api::DishesController < ApplicationController
  before_action :set_menu
  before_action :set_dish only: [:update, :destroy]

  def index
    render json: Dish.all
  end

  def create
    dish.new(dish_params)
    if dish.save
      render json: dish
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    dish.update
    render json: item
  end

  def destroy
    dish.destroy
    render json: { message: "Dish Destroyed" }
  end

  private
  def dish_params
    params.require(:dish).permit(:name)
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_dish
    @dish = Dish.find(params[:id])
  end
end
