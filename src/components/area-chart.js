import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { connect } from 'react-redux';

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
        grid: {
          left: '1%',
          right: '5%',
          bottom: '5%',
          top: '4%',
          height: 230,
          containLabel: true
        },
        xAxis: {
          data: this.props.dataAxis,
          boundaryGap: false,
          axisLabel: {
            margin: 10,
            // rotate: 45,
            // inside: true,
            textStyle: {
              color: '#fff',
              paddingTop: 30,
              fontSize: 9
            }
          },
          //   axisTick: {
          //     show: false
          //   },
          //   axisLine: {
          //     show: false
          //   }
          z: 10
        },
        yAxis: {
          boundaryGap: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: value => {
              if (value > 1000000) {
                return `${value / 1000000} M`;
              }
              if (value > 1000) {
                return `${value / 1000} K`;
              }
              return value;
            },
            textStyle: {
              color: '#999',
              fontSize: 9
            }
          }
        },
        // dataZoom: [
        //   {
        //     type: 'slider',
        //     start: 65,
        //     end: 100
        //   }
        // ],
        series: [
          {
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
              color: '#6fc0e9'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.props.config_data.theme === 'dark' ? '#2ea6e2' : '#2ea6e2'
                },
                {
                  offset: 1,
                  color: this.props.config_data.theme === 'dark' ? 'transparent' : '#001529'
                }
              ])
            },
            data: this.props.data
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
        height: 300,
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
