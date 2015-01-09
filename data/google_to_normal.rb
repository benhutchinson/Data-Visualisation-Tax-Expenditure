require 'json'

string = File.open('top_15_google_format.json').read

jsn = JSON.parse(string)

data = []

for i in jsn["rows"]
  data << {"department" => i["c"][0]["v"], "spend" => i["c"][1]["v"]}
end

for j in data
  puts j.to_json
end