// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[
  `<ErrorPage /> component WHEN render by default THEN should match the snapshot 1`
] = `
<div>
  <Alert
    closeAriaLabel="Close"
    color="danger light"
    fade={true}
    isOpen={true}
    tag="div"
    transition={
      Object {
        "appear": true,
        "baseClass": "fade",
        "baseClassActive": "show",
        "enter": true,
        "exit": true,
        "in": true,
        "mountOnEnter": false,
        "onEnter": [Function],
        "onEntered": [Function],
        "onEntering": [Function],
        "onExit": [Function],
        "onExited": [Function],
        "onExiting": [Function],
        "tag": "div",
        "timeout": 150,
        "unmountOnExit": true,
      }
    }
  >
    <h4
      className="alert-heading"
    >
      <p>
        Oh, no! We ran into an issue.
      </p>
    </h4>
  </Alert>
  <div
    className="error-container"
  >
    <p>
      A server error has occurred and we’re working to fix the problem!
    </p>
    <p>
      We will be up and running shortly.
    </p>
    <div>
      <Link
        to="/"
      >
        <Button
          className="mr-sm-2"
          color="primary"
          onClick={[Function]}
          tag="button"
        >
          Accept
        </Button>
      </Link>
    </div>
  </div>
</div>
`;
