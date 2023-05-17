Rails.application.routes.draw do
  devise_for :users
  get '/users/css/reset.css' => redirect('/assets/stylesheets/reset.css')
end