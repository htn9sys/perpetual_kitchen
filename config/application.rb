require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PerpetualKitchen
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Add the following line to add the assets/stylesheets directory to the asset pipeline
    config.assets.paths << Rails.root.join('app', 'assets', 'stylesheets')
    config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
