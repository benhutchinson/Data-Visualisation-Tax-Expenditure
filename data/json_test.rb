require 'json'

string = File.open('json/api.json').read

jsn = JSON.parse(string)

for i in jsn.keys
  for j in jsn[i]
    puts j["department"]
    puts j["spend"]
  end
end