pub = '../public/json/'

file = File.open(pub + 'simple.json', 'rb')
content = file.read

puts content.gsub('\\"', '')



