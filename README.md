# startpage.react

this is basicly a fork of https://github.com/crshd/startpage.rwrt 

I rebuild the project using react to create the link sections and clock components. 
sry no search bar in this implementation. 

## how to use it

edit your sections and links in the settings.js file

run npm install and browserify to build a bundle.js file

```
    npm install

    browserify main.js -t [ babelify --presets [ es2015 react ] ] | -o bundle.js
```

upload 
```
    index.html
    style.css
    bundle.js
    settings.js
```

to your webhost.