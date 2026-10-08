import {readFile,mkdir,writeFile,readdir} from 'node:fs/promises';
const source=await readFile('dist/index.html','utf8');
for(const entry of await readdir('src/projects',{withFileTypes:true})){
 if(!entry.isDirectory())continue;
 const {brand}=await import(`../src/projects/${entry.name}/brand.ts`);
 const html=source.replace('<title>Twenty Web Studies</title>',`<title>${brand.name} | ${brand.tagline}</title>`).replace('Twenty independent website designs and brand identities.',brand.purpose.replaceAll('"','&quot;'));
 for(const route of [entry.name,`${entry.name}/brand`]){await mkdir(`dist/${route}`,{recursive:true});await writeFile(`dist/${route}/index.html`,html)}
}
await writeFile('dist/404.html',source);
await writeFile('dist/.nojekyll','');
