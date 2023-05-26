Rails.application.routes.draw do
  devise_for :users
  root to: "items#index"
  resources :items
  resources :kitchens
  resources :gardens
  resources :storages
  resources :corridors
end