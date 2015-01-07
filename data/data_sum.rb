require 'CSV'

totals = Hash.new(0)

File.open('new.csv') do |file|
  while line = file.gets
    split_line = line.split(",")
    departments = split_line[0..-2].join(",")
    total = split_line.last.to_i
    totals[departments] += total
  end
end

totals.each do |dept,total|
  puts "#{dept}, #{total}"
end
