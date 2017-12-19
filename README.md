# Crypto.ext
Check in realtime your actual cryptowallet value and the single cryptocurrency daily trend directly inside your Chrome browser.
Made with React.js
## How to install
Clone the directory with: 
```git
git clone https://github.com/DoodlePain/Crypto.ext.git
```
then run 
``` install
// switch to the directory

cd ./Crypto.ext

// and install the dependecies with

npm install
```
Go to https://console.firebase.google.com and create a project.
Choose a name and the location by your own than create it.
Click "Add firebase to your web application" and copy the text between 
"var config ={"
and
"firebase.initializeApp(config);"
and override the strings with your data inside ./src/components/utilities/firebase.js

Then , inside the root folder, build the package with 
``` build
npm run build
```
Last step is to copy the content of ./add directory directly into build.

Now you can easily import the ./build directory into your Chrome Browser
