Rails.application.routes.draw do
  devise_for :users
  root to: "mains#index"
  resources :tops, only: [:index]
  resources :main
  resources :kitchens do
    resources :items
  end
  resources :corridors do
    resources :items
  end
  resources :gardens do
    resources :items
  end
  resources :storages
  resources :calendars
  resources :notices, only: [:index]
end