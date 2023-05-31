Rails.application.routes.draw do
  devise_for :users
  root to: "items#index"
  resources :tops, only: [:index]
  resources :items
  resources :kitchens
  resources :gardens
  resources :storages
  resources :corridors
  resources :calendars
end