Rails.application.routes.draw do
  devise_for :users
  get '/users/sign_up', to: 'devise/registrations#new'
end