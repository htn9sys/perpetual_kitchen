#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

※config/database.yml に追記(元のコメントに追加していく)

default: &default
  encoding: utf8
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

development:
  <<: *default
  adapter: mysql2
  username: root
  password:
  host: localhost
  database: ajax_app_development

test:
  <<: *default
  adapter: mysql2
  username: root
  password:
  host: localhost
  database: ajax_app_test

production:
  <<: *default
  adapter: postgresql
  url: <%= ENV['DATABASE_URL'] %>