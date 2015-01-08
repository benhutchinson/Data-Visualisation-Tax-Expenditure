require 'json'

string = File.open('simple.json').read

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
count = 0

jsn.each do |i|
  if i["spend"].to_i > 32051960
    count += 1
    rows << "{\"c\":[{\"v\":\"#{i["department"]}\",\"f\":null},{\"v\":#{i["spend"]},\"f\":null}]}" + ','
  end 
end

puts head
puts rows
puts foot

# puts count