# UIParserWebAppBasic

To run:

cd myapp && npm install
DEBUG=myapp:* npm start

If the above doesnt work, then;
1. Copy views/index.pug
2. Make a new folder
3. Enter in command window:
express --view=pug myapp
cd myapp && npm install
4. Overwrite the new myapp/viewsindex.pug with the old views/index.pug we copied
5. Enter in command window: DEBUG=myapp:* npm start

* used a Mac to run this, not sure if its the same on windows

When web page loads, just drag and drop a JSON UI file to the "Choose File" button or rectangle that says "Drag and Drop here" dpeending on what i've coded already. UI will auto parse and display
