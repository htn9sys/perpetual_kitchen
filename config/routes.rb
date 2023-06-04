Rails.application.routes.draw do
  devise_for :users
  root to: "items#index"
  resources :tops, only: [:index]
  resources :items
  resources :kitchens do
    resources :kitchen_items, only: [:show]
  end
  resources :gardens
  resources :storages
  resources :corridors
  resources :calendars
end