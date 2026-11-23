// Checks every translation file against en.json. Run with: node scripts/check.mjs
// Fails if a file isn't valid JSON, or if its keys, key order or {placeholders} differ from en.json,
// or if any value is empty or not a string.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const SOURCE = 'en.json';
const LOCALE_FILE = /^[a-z]{2,3}(-[A-Z]{2})?\.json$/;

const placeholders = text => (text.match(/\{\w+\}/g) ?? []).sort().join(' ');

function read(file) {
    try {
        return JSON.parse(readFileSync(join(root, file), 'utf8'));
    } catch (error) {
        return error;
    }
}

const source = read(SOURCE);
if (source instanceof Error) {
    console.error(`${SOURCE}: not valid JSON (${source.message})`);
    process.exit(1);
}
const sourceKeys = Object.keys(source);

const errors = [];
const files = readdirSync(root).filter(file => file.endsWith('.json') && file !== SOURCE && !file.startsWith('.'));

for (const file of files) {
    if (!LOCALE_FILE.test(file)) {
        errors.push(`${file}: name it after an ISO 639-1 language code, e.g. fr.json or pt-BR.json`);
        continue;
    }
    const translation = read(file);
    if (translation instanceof Error) {
        errors.push(`${file}: not valid JSON (${translation.message})`);
        continue;
    }
    const keys = Object.keys(translation);

    for (const key of sourceKeys.filter(key => !(key in translation))) errors.push(`${file}: missing key "${key}"`);
    for (const key of keys.filter(key => !(key in source))) errors.push(`${file}: unknown key "${key}"`);

    const shared = keys.filter(key => key in source);
    const expectedOrder = sourceKeys.filter(key => key in translation);
    const outOfOrder = shared.findIndex((key, index) => key !== expectedOrder[index]);
    if (outOfOrder !== -1) errors.push(`${file}: keys are out of order from "${shared[outOfOrder]}"; keep the order of ${SOURCE}`);

    for (const key of shared) {
        const value = translation[key];
        if (typeof value !== 'string' || value.trim() === '') {
            errors.push(`${file}: "${key}" needs a translation`);
            continue;
        }
        if (placeholders(value) !== placeholders(source[key])) {
            errors.push(
                `${file}: "${key}" has placeholders [${placeholders(value)}] but ${SOURCE} has [${placeholders(source[key])}]`
            );
        }
    }
}

if (errors.length > 0) {
    console.error(errors.join('\n'));
    console.error(`\n${errors.length} problem(s) found.`);
    process.exit(1);
}
console.log(`${files.length} translation file(s) match ${SOURCE} (${sourceKeys.length} keys).`);
