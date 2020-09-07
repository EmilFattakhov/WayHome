# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.delete_all
Comment.delete_all
User.delete_all
Tag.delete_all
Location.delete_all

NUM_PETS = 10
NUM_USERS = 10
NUM_TAGS = 10
PASSWORD = 'supersecret'
NUM_LOCATIONS = 5

super_user = User.create(
    first_name: "Emil",
    last_name: "Fattakhov",
    email: "ef@ef.ef",
    password: PASSWORD, 
    is_admin: true
)

NUM_TAGS.times do 
    Tag.create(
        name: Faker::Vehicle.make
    )
end



tags = Tag.all

NUM_USERS.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: PASSWORD
    )
end

users = User.all


NUM_PETS.times do
    created_at = Faker::Date.backward(days: 365)
    p = Pet.create(
        name: Faker::FunnyName,
        description: Faker::ChuckNorris.fact,
        animal: Faker::FunnyName,
        age: Faker::FunnyName,
        sex: Faker::FunnyName,
        breed: Faker::FunnyName,
        colour: Faker::FunnyName,
        location_lost: Faker::Address.city,
        distinctive_features: Faker::FunnyName,
        flag: Faker::FunnyName, 
        time_lost: created_at,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )

    if p.valid?
        p.comments = rand(0..15).times.map do
            Comment.new(
                title: Faker::GreekPhilosophers.quote,
                body: Faker::ChuckNorris.fact,
                user: users.sample
            )
        end
        p.tags = tags.shuffle.slice(0, rand(tags.count))
    end
end

pets = Pet.all
comments = Comment.all

NUM_LOCATIONS.times do
    Location.create(
        long: Faker::Vehicle.make,
        lat: Faker::FunnyName,
        user: users.sample,
        pet: pets.sample
    )
end

locations = Location.all



puts Cowsay.say("Generated #{users.count} users", :tux)
puts Cowsay.say("Generated #{pets.count} pets", :bunny)
puts Cowsay.say("Generated #{comments.count} comments", :sheep)
puts Cowsay.say("Generated #{locations.count} locations", :bunny)
