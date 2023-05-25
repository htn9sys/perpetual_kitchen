Rails.application.routes.draw do
  devise_for :users
  resources :kitchens
  resources :gardens
  resources :storages
  resources :corridors
end