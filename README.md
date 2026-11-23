# Cryptlex Portal Translations

Translations of the Cryptlex **customer portal** and **reseller portal**: the web apps your end users and resellers log in to, to view licenses, manage activations and download releases.

If the portal doesn't speak your users' language yet, or a translation reads wrong, you can fix it here with a pull request.

## Languages

| File | Language |
|---|---|
| [`en.json`](./en.json) | English (source) |
| [`de.json`](./de.json) | German |
| [`es.json`](./es.json) | Spanish |

`en.json` is the source of truth. Every other file has exactly the same keys.

## Contributing

### Fix a translation

1. Find the key in the language file, e.g. `de.json`.
2. Change only the text to the right of the colon.
3. Open a pull request that says what was wrong and why the new text is better.

### Add a language

1. Copy `en.json` to a new file named after the language's [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), e.g. `fr.json` or `pt.json`.
2. Translate every value. Don't leave any English text: we can't import a file with missing or empty entries.
3. Open a pull request.

We review every pull request before it ships in the portals.

## Rules

### Keys

Don't change, add, remove or reorder keys. Change only the text values.

```json
"license.key.label": "Clave de licencia",
```

### Placeholders

Text in curly braces, such as `{count}` or `{resource}`, is filled in by the portal.

- Copy each placeholder exactly, including the English word inside the braces.
- You may move it anywhere in the sentence: `{resource} created` → `{resource} erstellt`.
- Keep every placeholder the English text has, and don't add new ones.

| Placeholder | Becomes |
|---|---|
| `{count}`, `{min}`, `{max}`, `{length}`, `{used}`, `{limit}`, `{from}`, `{to}`, `{total}` | A number |
| `{resource}`, `{resources}` | The name of a thing, already translated, e.g. "License" |
| `{date}` | A date, already formatted for the reader's language |
| `{time}` | A relative time, e.g. "3 days ago" |
| `{duration}`, `{interval}` | A length of time, e.g. "7 days" or "1 year" |
| `{id}`, `{key}`, `{email}` | A value from the user's data, e.g. an ID or license key |

### Where the text appears

The last part of each key says where the text appears:

| Key ends in | Appears as | Keep it |
|---|---|---|
| `label` | Field name, column header, menu option | Short |
| `title` | Page, dialog or section heading | Short |
| `pageTitle` | Browser tab title | Short |
| `action.…` | Button or link | Short; starts with a verb where your language allows |
| `description`, `hint` | Helper text under a field or in a tooltip | A full sentence |
| `error.…` | Error message | A full sentence that says what to do |
| `toast.…` | Short notification after an action | Brief |

Buttons, labels and column headers have limited space, so keep them about as long as the English.

### Style

- **Readers are end users and resellers**, not licensing experts. Use plain everyday words and address the reader directly, using the polite or informal form that's usual for business software in your language.
- **Capitalization:** English uses Title Case for labels, buttons and headings. Use your language's normal convention instead.
- **Punctuation:** where the English sentence ends with a period, end yours with your language's equivalent. Labels, titles and buttons have no final period.
- **Keep unchanged:** abbreviations such as ID, API, URL, SSO and IP, and product or company names.
- **One term per concept.** Translate these the same way everywhere:

| English | Meaning |
|---|---|
| license / license key | The right to use the software, and the code that proves it |
| activation | One device using a license |
| device | A computer or machine the software runs on |
| expiration date | The date a license stops working |
| license server | The server that lends floating licenses to devices |
| log in / log out | Signing in to and out of the portal |

If an English text is unclear, or you're not sure where it appears, ask in your pull request rather than guessing.
