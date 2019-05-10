import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faWindowClose,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../../../resources/constants";

const Domain = ({ data, createDomain, deleteDomain }) => {
  const [domain, setDomain] = useState("");

  const updateDomain = e => {
    setDomain(e.target.value);
  };

  const handleCreateDomain = () => {
    createDomain({ domain });
    setDomain("");
  };

  const handleDeleteDomain = domainId => {
    deleteDomain(domainId);
  };

  return (
    <div className="p-4 mb-4 bg-white shadow-sm">
      <form>
        <label>Add Domain / Subdomain</label>
        <div className="d-flex mb-4">
          <input
            type="text"
            className="mr-2"
            value={domain}
            onChange={updateDomain}
          />
          <input
            type="button"
            maxLength={150}
            value="ADD"
            onClick={handleCreateDomain}
          />
        </div>
      </form>
      <h3>Whitelisted Domains</h3>
      <ul className="domain">
        {data &&
          data.map(domain => {
            return (
              <li key={domain.id}>
                {domain.isFailingToReach ? (
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    color={COLORS.RED}
                  />
                ) : (
                  <FontAwesomeIcon icon={faCheckCircle} color={COLORS.GREEN} />
                )}
                <span> {domain.domain} </span>
                <a onClick={() => handleDeleteDomain(domain.id)}>
                  <FontAwesomeIcon
                    icon={faWindowClose}
                    color={COLORS.BLUE}
                    className="right"
                  />
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Domain.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      domain: PropTypes.string,
      visitorsNum: PropTypes.number,
      failuresNum: PropTypes.number,
      isFailingToReach: PropTypes.bool
    })
  ),
  createDomain: PropTypes.func,
  deleteDomain: PropTypes.func
};

export default Domain;
