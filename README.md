# Cryptlex Web Portals Translations

Translations of the Cryptlex **customer portal** and **reseller portal**: the web apps where your end users and resellers log in to view licenses, manage activations and download releases.

If the portal doesn't speak your users' language yet, or a translation reads wrong, you can fix it here with a pull request.

> [!CAUTION]
> **Never change the keys.** Change only the text to the right of the colon. Keys are how the portal finds each piece of text: a renamed, added, removed or reordered key breaks the import, and your pull request can't be merged. An automatic check rejects any file whose keys differ from `en.json`.

## Languages

| File | Language |
|---|---|
| [`en.json`](./en.json) | English (source) |
| [`de.json`](./de.json) | German |
| [`es.json`](./es.json) | Spanish |

`en.json` is the English source and is maintained by Cryptlex. Every other file has exactly the same keys, in the same order.

## The file format

Each file is one flat JSON object of `"key": "text"` pairs:

```json
{
    "license.key.label": "Clave de licencia",
    "common.toast.created": "{resource}: creación completada"
}
```

```text
"license.key.label": "Clave de licencia",
 └─── key ───────┘    └── text ───────┘
  never change        translate this
```

## Contributing

Fixes and new languages are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before you open a pull request: it has the rules for keys, placeholders and style, and how to check your file.

```sh
node scripts/check.mjs   # checks every translation file against en.json
```
