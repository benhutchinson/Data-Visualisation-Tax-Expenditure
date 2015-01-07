require 'CSV'
require 'json'


data = {}


CSV.foreach('new2.csv') do |row|
  if row[2] == ' Amount'

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


jsn.each do |hash|
  puts hash.to_json
end