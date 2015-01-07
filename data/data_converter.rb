require 'CSV'
require 'json'


data = {}


CSV.foreach('new2.csv') do |row|
  if row[2] == ' Amount'

  elsif row[2].to_i < 33251960

  elsif data.keys.include?row[0]
    data[row[0]] += row[2].to_i
  else
    data[row[0]] = row[2].to_i
  end
end

jsn = []

data.each do |key, value|
  jsn << {:department =>key, :spend => value}
end

doc = []

jsn.each do |hash|
  doc << hash.to_json
end

puts doc.to_json