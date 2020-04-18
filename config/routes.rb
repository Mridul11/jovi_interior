Rails.application.routes.draw do
  resources :floor_plans 
  get 'show_json_data', :to => "floor_plans#show_json_data"
  devise_for :users, :controllers => {:registrations => "registrations"}
  root 'public#index'  
end
