Rails.application.routes.draw do

  namespace :api do 
    resources :menus do
      namespace :api do
        resources :dishes do
        end
      end
    end
  end

end
