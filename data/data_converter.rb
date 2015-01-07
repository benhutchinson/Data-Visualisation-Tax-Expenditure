require 'CSV'


data = []
has = 

CSV.foreach('oscar.csv') do |row|
  for i in data
    has << i.keys[0]
  end
  if row[16].nil?

  elsif (kinda_json.keys.include?(row[4]))
    kinda_json[row[4]] = kinda_json[row[4]] + row[16].gsub(',','').to_i
  else
    data << {'Department' => row[4], 
      'total' => row[16].gsub(',','').to_i, 
      {
        'sub-department' => row[1], 
        'sub-total' => row[16].gsub(',','').to_i
        }}
  end
end




