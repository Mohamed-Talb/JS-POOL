# JS Tests

JavaScript tests that use **Node.js** to validate JS and DOM exercises.


## Requirements

* **Node.js v14+**
* **npm**
* **Chromium dependencies** (handled automatically by puppeteer)


## Installation

```bash
# Clone the repo
git clone https://github.com/01-edu/public.git

# Go to the JS tests directory
cd public/js/tests

# Install puppeteer (required for DOM tests)
npm install puppeteer
```

## Running tests

### Standard usage

```bash
node test.mjs <solution-path> <exercise-name>
```

Example:

```bash
node test.mjs ~/piscine-js/1-Loop how-2-js
```

* `<solution-path>` → path to your solution Folder repository
* `<exercise-name>` → exercise folder & file name (without `.js`)

## DOM exercises

Exercises ending with `-dom` automatically:

* Start a local HTTP server
* Launch **puppeteer**
* Run browser-based assertions

> Puppeteer is required for these tests.