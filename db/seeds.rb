# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Poll.count == 0 
	Poll.create!(question: "40 anos de vida sem envelhecimento")
	Poll.create!(question: "R$ 2 milhoões")
end