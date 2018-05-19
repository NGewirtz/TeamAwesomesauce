Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index, :create, :show]
  end

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index]
  end
end
