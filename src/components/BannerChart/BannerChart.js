import React, { Component } from 'react';
import * as d3 from 'd3';

import './BannerChart.scss';

function tweenDash() {
  const l = this.getTotalLength();
  const i = d3.interpolateString('0,' + l, l + ',' + l);
  return function(t) {
    return i(t);
  };
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 *
 */
const randData = (count, min, max) => {
  const data = [];
  let prevValue = 0;
  for (let i = 0; i < count; i++) {
    const dir = Math.random() > 0.7 ? -1 : 1;
    data.push({ id: i, value: Math.max(0, prevValue + randomIntFromInterval(min, max) * dir) });
    prevValue = data[i].value;
  }
  return data;
};

/**
 *
 */
function computeProps(props) {
  const { height, width } = props;
  console.log('computed');

  const colorScale = d3
    .scaleOrdinal()
    .range(['#00b092', '#3bb57b', '#62b860', '#88b843', '#aeb624', '#d6af03', '#ffa40d']);

  const lineCount = 10;
  const dataCount = 100;
  const dataMin = 0;
  const dataMax = 10;

  const data = d3.range(0, lineCount).map(() => randData(dataCount, dataMin, dataMax));

  // const data = randData(dataCount, dataMin, dataMax);

  const maxValues = data.map(d => d3.max(d, e => e.value));

  const yMax = d3.max(maxValues);

  const padding = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const xScale = d3
    .scaleLinear()
    .domain([0, dataCount])
    .range([0, plotWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, yMax])
    .range([plotHeight, 0]);

  const line = d3
    .line()
    .x(d => xScale(d.id))
    .y(d => yScale(d.value))
    .curve(d3.curveStepBefore);

  return { data, padding, plotHeight, plotWidth, line, xScale, yScale, colorScale };
}

/**
 * BannerChart
 */
class BannerChart extends Component {
  static defaultProps = {
    height: 400,
  };

  constructor(props) {
    super(props);
    this.computed = {};
  }

  /**
   * When the react component mounts, setup the d3 vis
   */
  componentDidMount() {
    this.setup();
    this.update();
  }

  /**
   * When the react component updates, update the d3 vis
   */
  componentDidUpdate() {
    this.update();
  }

  /**
   *
   */
  setup() {
    const cRoot = d3.select(this.root);

    this.g = cRoot.append('g');

    this.chart = this.g.append('g').classed('chart-group', true);
  }

  /**
   *
   */
  update() {
    this.computed = computeProps(this.props);
    const { padding } = this.computed;
    this.g.attr('transform', `translate(${padding.left} ${padding.top})`);

    this.updateChart();
  }

  updateChart() {
    const { data, line, colorScale, plotWidth } = this.computed;

    const linesBinding = this.g.selectAll('.line').data(data);
    function transition(path) {
      path
        .transition()
        .duration(5000)
        .delay((d, i) => i * 500)
        .attrTween('stroke-dasharray', tweenDash);
    }

    const linesEnter = linesBinding
      .enter()
      .append('path')
      .classed('line', true)
      .attr('fill', 'none')
      .attr('stroke-dasharray', `0,${plotWidth}`)
      .attr('stroke', (d, i) => colorScale(i))
      .attr('stroke-width', 3)
      .attr('d', line)
      .call(transition);

    const linesMerge = linesBinding.merge(linesEnter);
  }

  /**
   *
   */
  render() {
    const { height, width } = this.props;
    return (
      <div className="BannerChart">
        <svg
          className="chart"
          ref={node => {
            this.root = node;
          }}
          height={height}
          width={width}
        />
      </div>
    );
  }
}

export default BannerChart;
