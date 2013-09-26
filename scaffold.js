var fs=require('fs');
var argv=process.argv;
var app=argv;
app.shift();app.shift();
var appname=app[0];
var path=require('path');
var getgiturl=function() {
	var url=fs.readFileSync(appname+'/.git/config','utf8');//.match(/url = (.*?)\n/);
	url=url.substr(url.indexOf('url ='),100);
	url=url.replace(/\r\n/g,'\n').substring(6,url.indexOf('\n'));
	return url;
}
var die=function() {
	console.log.apply(this,arguments)
	process.exit(1);
}

if (!appname) die('node initapp newappname');
if (!fs.existsSync(appname)) die('folder not exists');
if (!fs.existsSync(appname+'/.git')) die('not a git repo');


var giturl=getgiturl();
//if (fs.existsSync(appname+'/package.json')) die(giturl,'is not a brand new repo');

var walk = function(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) {
			if (file.substring(file.length-4)!='test') {
				results = results.concat(walk(file))
			} else {
				console.log('skip '+file)
			}
        } 
        else results.push(file)
    })
    return results
}
fs.mkdirParent = function(dirPath, mode, callback) {
  //Call the standard fs.mkdir
  fs.mkdir(dirPath, mode, function(error) {
    //When it fail in this way, do the custom steps
    if (error && error.errno === 34) {
      //Create all the parents recursively
      fs.mkdirParent(path.dirname(dirPath), mode, callback);
      //And then the directory
      fs.mkdirParent(dirPath, mode, callback);
    }
    //Manually run the callback since we used our own callback to do all these
    callback && callback(error);
  });
};
var textext=['.js','.json','.html','.css','.command','.cmd','.sh'];
var replaceid=function(source) {
	var raw=fs.readFileSync(source);
	var ext=source.substring(source.lastIndexOf('.'));
	
	if (textext.indexOf(ext)==-1) {
		console.log('skip non text file',source)
		return raw;
	}
	var raw=fs.readFileSync(source,'utf8');
	var arr=raw.replace(/\r\n/g,'\n').split('\n');
	for (var i in arr) {
		arr[i]=arr[i].replace(/%scaffold%/g,appname);
		if (source.indexOf('package.json')>-1) {
			arr[i]=arr[i].replace(/%git%/g,giturl);
		}
	}
	return arr.join('\n');
}
var copyfile=function(source) {
	if (source.indexOf('%scaffold%')==-1) return;
	var stats = fs.lstatSync(source);
	var target=source.replace(/%scaffold%/g,appname);
	var targetpath=target;
	var arr=null;
	if (!stats.isDirectory()) {
		arr=replaceid(source);
		targetpath=path.dirname(target);
	}	
	
	fs.mkdirParent(targetpath,function(err){
	 		if (stats.isDirectory()) return;
	 		console.log('copying',target)
			fs.writeFileSync(target,arr,'utf8');	
	});
	

	if (stats.isDirectory()) {
		var sourcefiles=walk(source);
		for (var i in sourcefiles) copyfile(sourcefiles[i]);
	}

}

console.log('create scaffold for git',giturl)
var deploy=require('./%scaffold%/deploy');
for (var i in deploy) {
	for (var j in deploy[i]) {
		copyfile(deploy[i][j]);
	}
}
copyfile('%scaffold%/deploy.json');