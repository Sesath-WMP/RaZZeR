const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imports = content.match(/from\s+['"]([^'"]+)['"]/g) || [];
  imports.forEach(imp => {
    const importPathMatch = imp.match(/from\s+['"]([^'"]+)['"]/);
    if (!importPathMatch) return;
    const importPath = importPathMatch[1];
    if (importPath.startsWith('.')) {
      const dir = path.dirname(file);
      const target = path.resolve(dir, importPath);
      // check if exists case sensitively
      const targetDir = path.dirname(target);
      const targetName = path.basename(target);
      try {
        const actualFiles = fs.readdirSync(targetDir);
        if (!actualFiles.includes(targetName) && !actualFiles.includes(targetName + '.ts') && !actualFiles.includes(targetName + '.tsx') && !actualFiles.includes(targetName + '.css')) {
           // Also check if it's a directory (index.tsx)
           if (actualFiles.includes(targetName)) {
               // exists
           } else {
               console.log('Case mismatch or missing: ' + file + ' -> ' + importPath);
           }
        }
      } catch (e) {
         console.log('Dir missing: ' + file + ' -> ' + importPath);
      }
    }
  });
});
console.log('Check complete.');
