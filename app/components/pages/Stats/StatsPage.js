import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import * as barsActions from "../../../actions/barsActions";

import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Loading from "../../../components/common/loading/Loading";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";

import {
  GRAPH_TITLE_DATE_FORMAT,
  GRAPH_DATE_REFERENCE_FORMAT,
  GRAPH_NOT_DATA
} from "../../../resources/constants";

export const StatsPage = ({ bar, barsActions }) => {
  useEffect(() => {
    barsActions.getBarByCurrentUser();

    if (bar.data.id) {
      barsActions.getBarStats(bar.data.id);
    }
  }, [bar.data.id, barsActions]);

  const getFormattedReference = reference => {
    return moment(reference).format(GRAPH_DATE_REFERENCE_FORMAT);
  };

  if (!bar || !bar.data || !bar.data.stats || bar.isFetching)
    return <Loading />;
  const data = bar.data.stats && bar.data.stats.stats;
  const existData = data && data.length > 0;

  let references = bar.data.stats && bar.data.stats.referenceData;

  let monthlyAvg;
  let weeklyAvg;
  let dailyAvg;
  if (bar.data.stats) {
    monthlyAvg = bar.data.stats.monthlyAvg;
    weeklyAvg = bar.data.stats.weeklyAvg;
    dailyAvg = bar.data.stats.dailyAvg;
  }

  return (
    <div className="container-fluid" role="main">
      <div className="row d-flex">
        <SectionTitle title="Stats" />
      </div>
      <div className="col-md-12 p-4 mb-4 bg-white" style={{ height: "700px" }}>
        <div className="row d-flex">
          <div className="mr-auto">
            <h4>Bar views to Date</h4>
            <p className="graph-date">
              {moment().format(GRAPH_TITLE_DATE_FORMAT)}
            </p>
          </div>
          <div className="views text-right">
            <h5>MONTHLY</h5>
            <p>{`${monthlyAvg} views`}</p>
          </div>
          <div className="ml-4 views text-right">
            <h5>WEEKLY</h5>
            <p>{`${weeklyAvg} views`}</p>
          </div>
          <div className="ml-4 views text-right">
            <h5>DAILY</h5>
            <p>{`${dailyAvg} views`}</p>
          </div>
        </div>
        {!existData && <div className="graph-not-data">{GRAPH_NOT_DATA}</div>}
        {existData && (
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{ top: 30, right: 0, left: -60, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="statsDate" ticks={[""]} />
              <YAxis ticks={[""]} />
              <Tooltip formatter={value => [value, "Views"]} />
              <Area
                type="monotone"
                dataKey="viewNum"
                stroke="#8E98AC"
                fill="#0032A8"
              />
              {references &&
                references.map((reference, i) => {
                  if (i > 0) {
                    return (
                      <ReferenceLine
                        key={reference}
                        x={reference}
                        isFront={true}
                        label={{
                          position: "insideTopLeft",
                          value: `${getFormattedReference(reference)}`,
                          fill: "#13203D",
                          fontSize: 12
                        }}
                        stroke="#13203D"
                      />
                    );
                  }
                })}
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

StatsPage.propTypes = {
  bar: PropTypes.object,
  barsActions: PropTypes.object
};

const mapStatesToProps = state => ({
  bar: state.bar
});

const mapDispatchToProps = dispatch => ({
  barsActions: bindActionCreators(barsActions, dispatch)
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(StatsPage);
