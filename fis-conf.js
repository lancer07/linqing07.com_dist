fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('/js/*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('/css/*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('/images/*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('/*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});

fis.set('project.ignore', [
  'output/**',
  'book/**',
  'data/**',
  'demo/**',
  'experience/**',
  'lancer_js/**',
  'lancer_ui/**',
  'mobi/**',
  'soho/**',
  'node_modules/**',
  '.git/**',
  '.svn/**'
]);
