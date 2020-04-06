# HTML Syntax Highlighter
Generates syntax highlighted HTML for Heck code using [highlight.js](https://highlight.js).

You can manually generate static HTML to include in your blog or website using the [demo](https://heck-lang.github.io/heck-syntax-highlighter).

You can also dynamically highlight code by including highlight.js scripts:

```html
<!-- highlight.js script and stylesheet (more info at highlightjs.org) -->
<link rel="stylesheet" href="/path/to/styles/default.css">
<script src="/path/to/highlight.pack.js"></script>

<!-- heck syntax highlighter -->
<script src="https://heck-lang.github.io/heck-syntax-highlighter/heck-highlight.js">
  
<!-- automatically highlightes code on page load -->
<script>hljs.initHighlightingOnLoad();</script>

...

<!-- put heck code into a <pre><code> tag like so: -->
<pre><code class="language-heck">
insert heck code here!
</code></pre>
```
