require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user)do
  User.create email: 'andy@test.com', password: 'testing', password_confirmation: 'testing'
end

  describe "GET /index" do
    it "gets a list of apartments" do
    Apartment.create street: 'A Street',city: 'SD',state: 'CA',manager: 'Andy',email: 'andy@testing.com',price: '$10,000',bedrooms: 1,bathrooms: 0,pets: 'all pets welcome',user_id: user.id,img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png"
    
  
    get '/apartments'
    apartments = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(apartments.length).to eq 1
    end
  end
end
