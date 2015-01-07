import csv 

newcsv = []

with open('oscar.csv') as csvfile:
  data = csv.reader(csvfile)
  for row in data:
    if len(row) != 17:
      pass
    else:
      newcsv.append([row[4], row[1], row[16].replace(',', '')])

with open('new.csv', 'wb') as newfile:
  writer = csv.writer(newfile)
  for i in newcsv:
    writer.writerow(i)