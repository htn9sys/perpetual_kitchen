class ApplicationController < ActionController::Base
  before_action :basic_auth
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  private

  def basic_auth
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV["BASIC_AUTH_PK_USER"] && password == ENV["BASIC_AUTH_PK_PASSWORD"]
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname, :birth_date])
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname, :email, :birth_date, :current_password])
  end

  def current_password_valid?
    return unless password.present? || password_confirmation.present?

    unless valid_password?(current_password)
      errors.add(:current_password, 'が正しくありません')
    end
  end
end