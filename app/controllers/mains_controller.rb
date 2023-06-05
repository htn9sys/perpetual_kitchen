class MainsController < ApplicationController
  before_action :authenticate_user!, except: [:index]

  def index
    unless user_signed_in?
      redirect_to tops_path
    end
  end
end
