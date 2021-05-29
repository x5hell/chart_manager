let min_price_data = d.data.map(function (item) {
  return [item.t, item.p_min]
});
let max_price_data = d.data.map(function (item) {
  return [item.t, item.p_max]
});
{
  xAxis: { type: 'time', min: 'dataMin', max: 'dataMax'},
  yAxis: [
      { type: 'value', min: 'dataMin', max: 'dataMax'},
      { type: 'value', min: 'dataMin', max: 'dataMax'}
  ],
  series: [
    {
      type: 'line',
      data: min_price_data
    },
    {
      type: 'line',
      data: max_price_data
    }
  ],
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  dataZoom: [
    {type: 'inside', start: 0, end: 20},
    {start: 0, end: 20}
  ],
  toolbox: {
    feature: {
      myTool1: {
        show: true,
        title: 'custom extension method 1',
        icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        onclick: function (){
            alert('myToolHandler1')
        }
      },
      myTool2: {
        show: true,
        title: 'custom extension method',
        icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        onclick: function (){
          alert('myToolHandler2')
        }
      }
    }
  }
};
