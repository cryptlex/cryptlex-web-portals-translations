# Contributing to Cryptlex Web Portals Translations

Thank you for helping translate the Cryptlex customer and reseller portals. Read the [rules](#rules) before you start.

> [!CAUTION]
> **Never change the keys.** Change only the text to the right of the colon. A renamed, added, removed or reordered key breaks the import, and the automatic check rejects the pull request.

## Fix a translation

1. Fork this repository.
2. In the language file, e.g. `de.json`, change only the text of the entries you're fixing.
3. Open a pull request that says what was wrong and why the new text is better.

## Add a language

1. Fork this repository.
2. Copy `en.json` to a new file named after the language's [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), e.g. `fr.json`, or with a region for a regional variant, e.g. `pt-BR.json`.
3. Translate every value. Keep every key and its order.
4. Open a pull request.

## Check your file before you open a pull request

With [Node.js](https://nodejs.org) 22 or later installed, run:

```sh
node scripts/check.mjs
```

It reports every missing, unknown or out-of-order key, every empty value and every placeholder that doesn't match `en.json`. The same check runs automatically on each pull request, and a pull request that fails it can't be merged.

## What happens next

We review every pull request. Once it's merged, the translation ships in the customer and reseller portals with the next release.

If an English text is unclear, or you're not sure where it appears, ask in your pull request rather than guessing.

## Rules

### 1. Keys: never change them

| ✅ Do | ❌ Don't |
|---|---|
| Change the text to the right of the colon | Rename, translate or retype a key |
| Keep every key from `en.json` | Delete a key, even if you think it's unused |
| Keep keys in the same order as `en.json` | Add a key, or move keys around |
| Translate every value | Leave a value empty or in English |
| Edit a language file such as `de.json` | Edit `en.json` |

If an English text has a typo or is unclear, say so in your pull request or open an issue. Don't edit `en.json`.

### 2. Placeholders: keep them exactly

Text in curly braces, such as `{count}` or `{resource}`, is filled in by the portal.

- Copy each placeholder exactly, including the English word inside the braces. `{count}` stays `{count}`, never `{anzahl}` or `{ count }`.
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

### 3. Fit the text to where it appears

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

Some keys have a `customerPortal` variant, such as `activation.hostname.label` ("Hostname") and `activation.hostname.customerPortal.label` ("Device Name"). The customer portal version is for end users, so it uses everyday words instead of licensing terms.

### 4. Style

- **Readers are end users and resellers**, not licensing experts. Use plain everyday words and address the reader directly, using the polite or informal form that's usual for business software in your language.
- **Capitalization:** English uses Title Case for labels, buttons and headings ("Expiration Date"). Use your language's normal convention instead.
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
