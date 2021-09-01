users = [
    {
        email: 'andy@testing.com',
        password: 'testing',
        password_confirmation: 'testing'
    }
]

users.each do |attribute|
    User.create attribute
end

apartments =[
    {
      street: 'A Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$10,000',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'all pets welcome',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png"
    },

    {
      street: 'B Street',
      city: 'SD',
      state: 'CA',
      manager: 'Andy',
      email: 'andy@testing.com',
      price: '$9,999',
      bedrooms: 1,
      bathrooms: 0,
      pets: 'no sea snails',
      img:"https://static.tvtropes.org/pmwiki/pub/images/squidbox.png"
    }
  ]
  
  first_user = User.where(email: 'andy@testing.com').first
  
  apartments.each do |attribute|
    first_user.apartments.create attribute
  end