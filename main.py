a = open('python/Datatypes/str.html')
b = a.read()
c = b.splitlines()
u = c[:13112]
l = c[13112:]
#.split('  <div tabindex="-1" id="notebook" class="border-box-sizing">')[1]
#  <div tabindex="-1" id="notebook" class="border-box-sizing">
us = ''
for i in u:
	us+=i+'\n' 

ls = ''
for i in l:
	ls+=i+'\n'

print('  <div tabindex="-1" id="notebook" class="border-box-sizing">'+'\n'+ls.split('  <div tabindex="-1" id="notebook" class="border-box-sizing">')[1])
 