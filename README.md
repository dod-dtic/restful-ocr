# restful-ocr
A NodeJS project which will allow a client to post an image to the api and return the text from the image. 

## Installation 
### Prerequisites
* nodejs (>= 6.9.0) installed on your server
* npm installed on your server
* homebrew installed and functional (only if you intend to follow the steps below to install tesseract-ocr). (_note if you dont use a mac you will need to substitute for the appropriate package manager commands here_)

### restful-ocr
1. Download and unzip Source from github
2. CD into download directory
3. % npm install
4. Edit config/default.json (set images path, listening port, etc)


### tesseract-ocr (_recommended_)
1. % brew install leptonica --with-libtiff
2. % brew install imagemagick
3. % brew install tesseract --with-all-languages

## Configuration
Open the config/default.json file. 

## Operation
Start the application like you would any other node application by using the command _npm start_ from the application home directory. Alternatively you may use any [process manager](http://expressjs.com/en/advanced/pm.html)
__Note: I have been unable to get this working with PM2, there is a conflict with node-config__
I recommend using strongloop as I had no problems running the application under it, but thats just personal pref.

## Testing
Testing the webservice... 
1. Use a simple image containing text you want to ocr (eng_bw.jpg from tesseractjs website is my goto)
2. Start the restful-ocr server
3. Using curl post the image: `curl -F filedata=@/path/to/image/eng_bw.png "http://localhost:3000/api/upload"`

If everything is working properly you should see your text returned. Note that especially when using tesseractjs this may take some time.

## Packaging and Deployment
If you wish to package the application for easy deployment to a server, this can be done easily using gulp.

1. % npm install (This should already be done, but saying it again to be sure)
2. % node ./node_modules/gulp/bin/gulp.js

Thats it, there should now be a zip file located in the dist directory. You can unzip this on any server with nodejs installed and follow the Operation steps to run the webservice.
