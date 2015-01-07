import csv 

vhash = {}
newcsv = []

with open('new.csv') as csvfile:
  data = csv.reader(csvfile)
  for row in data:
    


with open('new2.csv', 'wb') as newfile:
  writer = csv.writer(newfile)
  for i in newcsv:
    writer.writerow(i)

    elif (row[4] in kinda_json.keys()):
      kinda_json[row[4]] += int(row[16].replace(',', ''))
    else:
      kinda_json[row[4]] = int(row[16].replace(',', ''))