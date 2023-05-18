process.argv.sort();
for (let i=0; i<process.argv.length;i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, 1000*process.argv[i]);
}

