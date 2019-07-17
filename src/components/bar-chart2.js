import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';

const xAxisData = [];
const data1 = [];
const data2 = [];
const data3 = [];
const data4 = [];

for (let i = 0; i < 10; i++) {
  xAxisData.push(`Class${i}`);
  data1.push((Math.random() * 2).toFixed(2));
  data2.push(-Math.random().toFixed(2));
  data3.push((Math.random() * 5).toFixed(2));
  data4.push((Math.random() + 0.3).toFixed(2));
}

const itemStyle = {
  normal: {
    color: '#E24D42'
  },
  emphasis: {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
  }
};
const itemStyle2 = {
  normal: {
    color: '#EF843C'
  },
  emphasis: {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
  }
};
const itemStyle3 = {
  normal: {
    color: '##EAB839'
  },
  emphasis: {
    barBorderWidth: 1,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
  }
};

class Comp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      option: {}
    };
  }

  initChart() {
    this.setState({
      loading: false,
      option: {
        // backgroundColor: '#212124',
        tooltip: {},
        xAxis: {
          data: xAxisData,
          name: 'X Axis',
          silent: false,
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
          axisLabel: {
            margin: 14,
            textStyle: {
              color: '#fff',
              paddingTop: 30,
              fontSize: 10
            }
          }
        },
        yAxis: {
          inverse: true,
          splitArea: { show: false },
          axisLabel: {
            margin: 14,
            textStyle: {
              color: '#fff',
              paddingTop: 30,
              fontSize: 10
            }
          }
        },
        grid: {
          left: 100
        },
        series: [
          {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle,
            data: data1
          },
          {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle2,
            data: data2
          },
          {
            name: 'bar3',
            type: 'bar',
            stack: 'two',
            itemStyle: itemStyle3,
            data: data3
          }
        ]
      }
    });
  }

  componentWillUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.initChart();
    }
  }

  async componentDidMount() {
    this.initChart();
  }

  render = () => (
    <div
      style={{
        height: 500,
        paddingTop: 50,
        paddingRight: 10
      }}
    >
      <ReactEcharts resizable loading={this.state.loading} option={this.state.option} />
    </div>
  );
}
const mapStateToProps = state => ({
  config_data: state.config
});
export default connect(mapStateToProps)(Comp);
