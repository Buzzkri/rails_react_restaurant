class Api::MenusController < ApplicationController

    def index
      render json: Menu.all
    end
  
    def create
      menu.new(menu_params)
      if menu.save
        render json: menu
      else
        render json: { errors: item.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      menu.update
      render json: item
    end
  
    def destroy
      menu.destroy
      render json: { message: "Item Destroyed" }
    end
  
    private
    def menu_params
      params.require(:menu).permit(:name)
    end

    def set_menu
      @menu = Menu.find(params[:id])
    end
    
end
