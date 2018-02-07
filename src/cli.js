#!/usr/bin/env node

var envinfo = require('./envinfo.js');
var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['console', 'fullTree', 'duplicates'],
});

argv.console = true;

if (argv.help || argv._.indexOf('help') > -1) {
  console.log(`
  USAGE:

    \`envinfo\` || \`npx envinfo\`

  OPTIONS:

    --system            Print general system info such as OS, CPU, Memory and Shell
    --browsers          Get version numbers of installed web browsers
    --IDEs              Get version numbers of installed IDEs
    --languages         Get version numbers of installed languages such as Java, Python, PHP, etc
    --binaries          Get version numbers of node, npm, watchman, etc
    --packages          Get version numbers of locally installed npm packages
    --globalPackages    Get version numbers of globally installed npm packages

    --duplicates        Mark duplicate npm packages inside parentheses eg. (2.1.4)
    --fullTree          Traverse entire node_modules dependency tree, not just top level

    --markdown          Print output in markdown format
    --json              Print output in JSON format
    --console           Print to console (defaults to on for CLI usage, off for programmatic usage)
    --clipboard         Copy output to your system clipboard
  `);
  process.exit(0);
}

envinfo.envinfo(argv);
