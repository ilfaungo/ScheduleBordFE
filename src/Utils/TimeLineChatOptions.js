import {parseDate, getWeekRange} from '../Utils/DateUtils'

const options = {
    chart: {
        height: 350,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
         /* var a = Moment(val[0])
          var b = Moment(val[1])
          var diff = b.diff(a, 'days')
          return diff + (diff > 1 ? ' days' : ' day')*/
        }
      },
     
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      colors: [
        function({ value, seriesIndex, w }) {
          if (value < 5000) {
            return '#FF0000'
          } else {
            return '#02DFDE'
          }
        }
      ],
      tooltip: {
        custom: function(opts, seriesIndex, dataPointIndex) {
            let note = opts.ctx.w.config.series[opts.seriesIndex].data[
                opts.dataPointIndex
              ].description;
              if(note !== undefined){
                return '<div class="arrow_box">' +
                '<span>' + note + '</span>' +
                '</div>'
              }else{  
                  let date1 = opts.ctx.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]['y'][0];
                  let date2 = opts.ctx.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]['y'][1];
                return '<div class="arrow_box">' +
              '<span>' + parseDate(date1) + " - " + parseDate(date2) + '</span>' +
              '</div>'
              }
        }
      },
      xaxis: {
        type: 'datetime'
      },
      legend: {
        position: 'top'
      },
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center', 
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
    }
}


export default options;