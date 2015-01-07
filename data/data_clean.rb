require 'CSV'
require 'json'


data = {}


CSV.foreach('new2.csv') do |row|
  if row[2] == ' Amount'

  elsif row[2].to_i < 0

  elsif data.keys.include?row[0]
    data[row[0]] += row[2].to_i
  else
    data[row[0]] = row[2].to_i
  end
end

nums = []

data.each do |key, value|
  nums << value
end

puts nums.sort[-10]