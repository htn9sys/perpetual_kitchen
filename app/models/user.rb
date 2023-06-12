class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true, length: { maximum: 20 }
  validates :birth_date, presence: true
  validates :password, format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,}\z/i }, allow_blank: true

  def update_with_password(params, *options)
    current_password = params.delete(:current_password)
  
    if params[:password].blank?
      params.delete(:password)
      params.delete(:password_confirmation) if params[:password_confirmation].blank?
    end
  
    if current_password.present? && valid_password?(current_password)
      clean_up_passwords
      update(params, *options)
    else
      self.assign_attributes(params, *options)
      self.valid?
      self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
      false
    end
  end

  def password_required?
    super && !password_blank?
  end

  def password_blank?
    password.blank?
  end

  has_many :calendars
  has_many :kitchens
  has_many :corridors
  has_many :storages
  has_many :items
end
