// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `<EmbedWebWidget /> component WHEN render by default THEN should match the snapshot 1`
] = `
<div
  className="row"
>
  <div
    className="col-12 mb-4 p-4 bg-white rounded shadow-sm"
  >
    <h3>
      Embed Web Widget
    </h3>
    <div
      className="d-flex"
    >
      <p
        className="text-dark instructions"
      >
        Copy the following script and insert it into your website’s HTML source code between the &lt;head&gt; tags. The code must be inserted into every page where you want to display the A11Y BAR.
      </p>
      <CopyToClipboard
        onCopy={[Function]}
        text="<!-- Start of A11Y BAR widget script -->
<script id=\\"a11ybar\\" src=\\"https://d2m9yjg33t01fl.cloudfront.net/a11ybar.min.js?id=undefined\\"></script>
<!-- End of A11Y BAR widget script -->"
      >
        <button
          className="btn btn-sm btn-primary ml-auto h-50 btn-copy"
        >
          COPY
        </button>
      </CopyToClipboard>
    </div>
    <pre
      className="code"
      id="referenceScript"
    >
      <div>
        &lt;!— Start of A11Y BAR widget script —&gt;
      </div>
      <div>
        &lt;script id=“a11ybar” src=“
        https://d2m9yjg33t01fl.cloudfront.net/a11ybar.min.js?id=undefined
        ”&gt;&lt;/script&gt;
      </div>
      <div>
        &lt;!— End of A11Y BAR widget script —&gt;
      </div>
    </pre>
  </div>
</div>
`;
