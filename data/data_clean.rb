file = File.open('simple.json', 'rb')
content = file.read

puts content.gsub('\\"', '')




