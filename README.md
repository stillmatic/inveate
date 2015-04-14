# inveate

chua@wharton.upenn.edu

static site built with harp. simple 'agency' style website served from json and md files. 
in the (distant) future i'd like to move off of harp; should be reasonably easy to call terraform natively to do the preprocessing that we really need it to

* should be easily editable by programmming novices
* should have a nice look and 'just work'
* minimize external dependencies, harp has enough built in 

```
npm install -g harp
cd inv
harp server --port 9000
```

to compile and deploy
```
harp compile
```
(rsync stuff goes here)