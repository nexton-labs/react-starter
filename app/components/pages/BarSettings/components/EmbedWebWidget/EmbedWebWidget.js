import React, { useState } from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Notification from "../../../../common/Notification/Notification";

import {
  HOST_URL,
  SCRIPT_URL,
  NOTIFICATION_TYPES,
  NOTIFICATION_TIMEOUT
} from "../../../../../resources/constants";

const EmbedWebWidget = ({ barId }) => {
  const [notification, showNotification] = useState(false);
  const scriptURL = `${HOST_URL}/${SCRIPT_URL}?id=${barId}`;

  const script = `<!-- Start of A11Y BAR widget script -->
<script id="a11ybar" src="${scriptURL}"></script>
<!-- End of A11Y BAR widget script -->`;

  const handleCopyToClipboard = () => {
    showNotification(true);

    setTimeout(() => {
      showNotification(false);
    }, NOTIFICATION_TIMEOUT);
  };

  return (
    <div className="row">
      <div className="col-12 mb-4 p-4 bg-white rounded shadow-sm">
        <h3>Embed Web Widget</h3>
        {notification && (
          <Notification message={"Copied!"} type={NOTIFICATION_TYPES.SUCCESS} />
        )}
        <div className="d-flex">
          <p className="text-dark instructions">
            Copy the following script and insert it into your website’s HTML
            source code between the &lt;head&gt; tags. The code must be inserted
            into every page where you want to display the A11Y BAR.
          </p>
          <CopyToClipboard text={script} onCopy={handleCopyToClipboard}>
            <button className="btn btn-sm btn-primary ml-auto h-50 btn-copy">
              COPY
            </button>
          </CopyToClipboard>
        </div>
        <pre className="code" id="referenceScript">
          <div>&lt;!— Start of A11Y BAR widget script —&gt;</div>
          <div>
            &lt;script id=“a11ybar” src=“{scriptURL}”&gt;&lt;/script&gt;
          </div>
          <div>&lt;!— End of A11Y BAR widget script —&gt;</div>
        </pre>
      </div>
    </div>
  );
};

EmbedWebWidget.propTypes = {
  barId: PropTypes.string
};

export default React.memo(EmbedWebWidget);
