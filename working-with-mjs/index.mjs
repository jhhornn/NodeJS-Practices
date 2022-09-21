import { readFile } from 'fs/promises';

let templates = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
    title: 'Learn Node.js',
    body: 'This is a final HTML'
}

for (const [k, v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}