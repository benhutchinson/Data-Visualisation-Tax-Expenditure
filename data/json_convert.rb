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
other = 0

jsn.each do |i|
  if i["spend"].to_i > 18550000
    count += 1
    rows << "{\"c\":[{\"v\":\"#{i["department"]}\",\"f\":null},{\"v\":#{i["spend"]},\"f\":null}]}" + ','
  else
    other += i["spend"].to_i
  end 
end
rows <<"{\"c\":[{\"v\":\"Other\",\"f\":null},{\"v\":#{other},\"f\":null}]}"

puts head
puts rows
puts foot

# puts count