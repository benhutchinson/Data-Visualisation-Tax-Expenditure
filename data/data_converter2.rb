require 'CSV'
require 'json'


data = {}



CSV.foreach('new2.csv') do |row|
  if row[2] == ' Amount'

  elsif data.keys.include?row[0]
    data[row[0]][:spend] += row[2].to_i
    data[row[0]][:subdepartments] << {:name => row[1], :spend => row[2].to_i}
  else
    data[row[0]] = {:department => row[0], 
      :spend => row[2].to_i, 
      :subdepartments => [{
        :name => row[1], :spend => row[2].to_i
        }]}
  end
end

data.each do |key, value|
  puts value.to_json
end
