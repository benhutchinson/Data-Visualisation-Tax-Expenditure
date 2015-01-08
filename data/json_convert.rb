require 'json'

string = File.open('2simple.json').read

jsn = JSON.parse(string)

head = "{
  \"cols\": [
  {\"id\":\"\",\"label\":\"Department\",\"pattern\":\"\",\"type\":\"string\"},
  {\"id\":\"\",\"label\":\"Expense\",\"pattern\":\"\",\"type\":\"number\"}
  ],
  \"rows\": ["
foot = "]
}"

rows = []

jsn.each do |i|
  if i["spend"] > 0
    rows << "{\"c\":[{\"v\":\"#{i["department"]}\",\"f\":null},{\"v\":#{i["spend"]},\"f\":null}]}" + ','
  end 
end

puts head
puts rows
puts foot