import os

os.chdir('./blog')

files = os.listdir('./')

for file in files:
	print(file,"changing ... ")

	data = open(file,'r')
	lines = data.read()
	data.close()
	lines = lines.split('\n')
	for i in range(len(lines)):
		if lines[i] == '<!-- This is where you should add -->':
			lines[i]="""\n                     <div id="navbarMenuHeroA" class="navbar-menu">
           <div class="navbar-end">
                <a id="texttovoice" class="navbar-item  "  href="../games/index.html"><span class="icon is-small"><i class="fas fa-gamepad"></i></span><span> &nbsp;Games</span>  </a>
            </div>
          </div>"""
			lines[i]+="\n\n<!-- This is where you should add -->"

	print(lines)

	data = open(file,'w')
	data.write('')
	data.close()

	data = open(file,'a')
	for i in range(len(lines)):
		data.write(str(lines[i])+str("\n"))
	data.close()

	print(file,"changed")


print("DOne")