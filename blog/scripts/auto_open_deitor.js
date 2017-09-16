var spawn = require('child_process').exec;

hexo.on('new', function(data){
  spawn('start  "D:\MarkdownPad\MarkdownPad2.exe" ' + data.path);
});
