Rails.application.routes.draw do
  devise_for :users
  root to: "mains#index"
  resources :tops, only: [:index]
  resources :main
  resources :kitchens do
    resources :items
  end
  resources :gardens
  resources :storages
  resources :corridors
  resources :calendars
end