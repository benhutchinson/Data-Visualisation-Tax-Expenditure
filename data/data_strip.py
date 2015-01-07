import csv 

newcsv = []


# with open('oscar.csv') as csvfile:
#   data = csv.reader(csvfile)
#   for row in data:
#     if len(row) != 17:
#       pass
#     elif row[16] == 'Amount' or row[16] == '':
#       pass
#     elif (row[4] in kinda_json.keys()):
#       kinda_json[row[4]] += int(row[16].replace(',', ''))
#     else:
#       kinda_json[row[4]] = int(row[16].replace(',', ''))


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