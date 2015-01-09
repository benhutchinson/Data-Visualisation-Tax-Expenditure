require 'json'

string = File.open('api.json').read

jsn = JSON.parse(string)

for i in jsn["top_10"]
  puts i["department"]
end