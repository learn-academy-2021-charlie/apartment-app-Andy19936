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

  describe "POST /create" do
    it 'creates an apartment' do
      apartment_params = {
        apartment: {
      street: 'A Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }

      # make a request
      post '/apartments', params: apartment_params
      new_apartment = Apartment.first
      expect(response).to have_http_status(200)
      expect(new_apartment.street).to eq 'A Street'
    end
  end

  describe "PATCH /update" do
    it 'updates a job' do
      # create the job
      apartment_params = {
        apartment: {
      street: 'A Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
      post '/apartments', params: apartment_params
      apartment = Apartment.first
      # update the Apartment
      updated_apartment_params = {
  apartment: {
      street: 'A Street',
      city: 'La Mesa',    # <-update
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
      patch "/apartments/#{apartment.id}", params: updated_apartment_params
      updated_apartment = Apartment.find(apartment.id)
      expect(response).to have_http_status(200)
      expect(updated_apartment.city).to eq 'La Mesa'
    end
  end

  describe "DELETE /destroy" do
    it 'destroys an apartment' do
      # create the apartment
      Apartment.create street: 'A Street',city: 'SD',state: 'CA',manager: 'Andy',email: 'andy@testing.com',price: '$10,000',bedrooms: 1,bathrooms: 0,pets: 'all pets welcome',user_id: user.id,img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png"
      # make a request
      apartment = Apartment.first
      delete "/apartments/#{apartment.id}"
      expect(response).to have_http_status(200)
      expect(Apartment.all.length).to eq 0
  
    end
  end
  
  it "doesn't create an apartment without a street" do
    apartment_params = {
    apartment: {
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['street']).to include "can't be blank"
    end

  it "doesn't create an apartment without a city" do
    apartment_params = {
    apartment: {
      street:'L Street',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['city']).to include "can't be blank"
    end
    
  it "doesn't create an apartment without a state" do
    apartment_params = {
    apartment: {
      street:'L Street',
      city: 'SD',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
      },
      }
        # Send the request to the  server
        post '/apartments', params: apartment_params
        # expect an error if the apartment_params does not have a street
        expect(response.status).to eq 422
        # Convert the JSON response into a Ruby Hash
        json = JSON.parse(response.body)
        # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
        expect(json['state']).to include "can't be blank"
        end

  it "doesn't create an apartment without a manager" do
    apartment_params = {
    apartment: {
      street:'L Street',
      city: 'SD',
      state: 'CA',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['manager']).to include "can't be blank"
    end

  it "doesn't create an apartment without an email" do
    apartment_params = {
      apartment: {
      street:'L Street',
      city: 'SD',
      state: 'CA',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['email']).to include "can't be blank"
    end
  
  it "doesn't create an apartment without a price" do
    apartment_params = {
    apartment: {
      street:'L Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['price']).to include "can't be blank"
    end
        
  it "doesn't create an apartment without  bedrooms" do
    apartment_params = {
    apartment: {
      street:'L Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['bedrooms']).to include "can't be blank"
    end

  it "doesn't create an apartment without a bathroom" do
    apartment_params = {
    apartment: {
      street: 'L street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['bathrooms']).to include "can't be blank"
    end

  it "doesn't create an apartment without pets" do
    apartment_params = {
    apartment: {
      steet: 'L Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png",
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['pets']).to include "can't be blank"
    end

  it "doesn't create an apartment without a street" do
    apartment_params = {
    apartment: {
      street: 'L Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      user_id: user.id
    },
  }
    # Send the request to the  server
    post '/apartments', params: apartment_params
    # expect an error if the apartment_params does not have a street
    expect(response.status).to eq 422
    # Convert the JSON response into a Ruby Hash
    json = JSON.parse(response.body)
    # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
    expect(json['img']).to include "can't be blank"
    end
end
