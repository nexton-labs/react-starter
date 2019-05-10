// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `<Accessibility /> component WHEN render by default THEN should match the snapshot 1`
] = `
<div
  className="p-4 mb-4 bg-white shadow-sm"
>
  <form>
    <div
      className="form-group d-flex"
    >
      <h3
        className="mr-auto"
      >
        Theme
      </h3>
      <div
        className="form-check form-check-inline"
      >
        <input
          checked={true}
          className="form-check-input"
          id="themeDark"
          name="theme"
          onChange={[Function]}
          type="radio"
          value="Dark"
        />
        <label
          className="form-check-label mr-3 round"
          htmlFor="themeDark"
        >
          Dark
        </label>
        <input
          checked={false}
          className="form-check-input"
          id="themeLight"
          name="theme"
          onChange={[Function]}
          type="radio"
          value="Light"
        />
        <label
          className="form-check-label round"
          htmlFor="themeLight"
        >
          Light
        </label>
      </div>
    </div>
    <div
      className="form-group"
    >
      <label
        htmlFor="skipTo"
      >
        Skip to
      </label>
      <input
        className="form-control"
        id="skipTo"
        maxLength={100}
        name="skipTo"
        onChange={[Function]}
        type="text"
        value=""
      />
    </div>
    <div
      className="form-group"
    >
      <label
        htmlFor="contactInfo"
      >
        Contact Information
      </label>
      <input
        className="form-control"
        id="contactEmail"
        maxLength={200}
        name="contactEmail"
        onChange={[Function]}
        type="email"
        value=""
      />
    </div>
    <div
      className="form-group"
    >
      <label
        htmlFor="a11yPortal"
      >
        Accessibility Portal
      </label>
      <input
        className="form-control"
        id="accPortal"
        maxLength={200}
        name="accPortal"
        onChange={[Function]}
        type="text"
        value=""
      />
    </div>
    <div
      className="d-flex align-items-end flex-column"
    >
      <button
        className="btn btn-primary ml-auto btn-save"
        onClick={[Function]}
        type="button"
      >
        SAVE
      </button>
    </div>
  </form>
</div>
`;
