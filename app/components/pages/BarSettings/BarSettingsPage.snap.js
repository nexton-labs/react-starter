// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `<BarSettingsPage /> component WHEN render with Bar data THEN should match the snapshot 1`
] = `
<Fragment>
  <Component />
  <div
    className="row"
  >
    <div
      className="col-md-6"
    >
      <Accessibility
        data={
          Object {
            "id": "1234",
          }
        }
        saveChanges={[Function]}
      />
      <Domain
        createDomain={[Function]}
        deleteDomain={[Function]}
      />
    </div>
    <div
      className="col-md-6 mb-4"
    >
      <Component
        data={
          Object {
            "id": "1234",
          }
        }
        saveChanges={[Function]}
      />
    </div>
  </div>
  <Component
    barId="1234"
  />
</Fragment>
`;

exports[
  `<BarSettingsPage /> component WHEN render without data THEN should match the snapshot 1`
] = `<Loading />`;
