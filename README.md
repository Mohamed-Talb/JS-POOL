# JAVASCRIPT POOL - ZONE 01

This repository contains EXERCISES and SOLUTIONS for the JS POOL. It is structured to help students PRACTICE JAVASCRIPT concepts and test their code efficiently. All exercises are organized to match the POOL workflow.

## KNOWLEDGE
I documented all **JAVASCRIPT CONCEPTS** and **NODE.JS CONCEPTS** from the pool in **NOTION** for easy reference:

* **JS**: [Notion JS Overview](https://remarkable-chamomile-1f6.notion.site/JS-26a5bd1e909a8054965ae6a86eaf8f0f?source=copy_link)
* **NODE.JS** (last day): [Notion Node.js Overview](https://remarkable-chamomile-1f6.notion.site/NODE-JS-3215bd1e909a80ec93e3eab84fcdd6ce?source=copy_link)

These Notion pages summarize key ideas, examples, and best practices to help you review efficiently.

## INSTRUCTIONS
### **REPOSITORY STRUCTURE**

```text
POOL-EXERCICES/
POOL-SOLUTIONS/
TEST
```


### **POOL-EXERCICES**

Each EXERCISE has a README.md explaining the TASK. Instructions include requirements, examples, and expected outputs.

**NOTE** For a more efficient experience: 
* Open the exercise README in VSCode and press **Ctrl+Shift+V** to view the Markdown preview.
* Ctrl+Click on links to navigate directly.
* Always read instructions carefully before coding.


### **POOL-SOLUTIONS**

This FOLDER stores your JS SOLUTIONS corresponding to exercises. Use the same folder and file names as in POOL-EXERCICES to simplify TESTING. Keep code CLEAN and readable.

### **TEST**

The TESTER validates your SOLUTIONS automatically. It supports both STANDARD JS exercises and DOM-based exercises. DOM exercises require PUPPETEER and a local HTTP SERVER.

#### **REQUIREMENTS**

* NODE.JS v14+
* NPM
* CHROMIUM dependencies (handled automatically by PUPPETEER)

#### **PUPPETEER**
Install Puppeteer to enable DOM-based tests:

```bash
cd TESTS
npm install puppeteer
```

#### **RUNNING TESTS**

Standard usage:

```bash
cd TESTS
node test.mjs <solution-path> <exercise-name>
```

Example:

```bash
node test.mjs ~/piscine-js/1-Loop how-2-js
```

* `<solution-path>` → Path to POOL-SOLUTIONS
* `<exercise-name>` → Exercise folder & file name (without `.js`)

DOM exercises ending with `-dom` start a local HTTP SERVER and run browser-based assertions automatically.