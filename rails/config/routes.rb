Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  get "/shelters", to: "shelters#index"
  get "/foodbanks", to: "foodbanks#index"
end
