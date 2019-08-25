const data = [55, 80, 11, 40, 50, 60, 20, 70];

const options = {
  axisHeight: '500',
  colors: ['Maroon', 'Blue', 'Salmon', 'DarkSeaGreen', 'Purple', 'DarkSlateGray', 'Crimson'],
  valuePosition: 'center',
  barSpacing: '40',
  barWidth: '30',
  labels: [
    {'55': 'label1'},
    {'80': 'label2'},
    {'11': 'label3'},
    {'40': 'label4'},
    {'50': 'label5'},
    {'60': 'label6'},
    {'20': 'label7'},
    {'70': 'label8'}
  ]
}

const element = document.querySelector('#root');

const maxNumber = Math.max(...data);
const scaleNumber = (options.axisHeight/maxNumber)*0.95;

const axisWidth = defineWidth(data);

function drawBarChart(data, options, element) {
  renderCharts(data, options);
  renderLabels(data, options);
}

function renderAxis(element) {
 let axis =  $('<div></div>')
    .addClass('axis')
    .css({
      'width': `${axisWidth}px`,
      'height': `${options.axisHeight}px`
    })
    .appendTo(element);
    return axis;
}

function renderCharts(data, options) {
  const axis = renderAxis(element);

  const scaledArr = scaleArray(data, scaleNumber);

  scaledArr.map( (el, i) => {
    $('<div></div>')
      .addClass('bar')
      .css({
        'height':`${el}px`,
         'justify-content':
          `${options.valuePosition}` === 'top' ? 'flex-start' :
          `${options.valuePosition}` === 'center' ? 'space-evenly' :
          `${options.valuePosition}` === 'bottom' ? 'flex-end' : 'flex-end',
          'background-color': `${options.colors[i]}`
      })
      .text(data[i])
      .appendTo(axis);
  });
}

function defineWidth(data) {
  return (data.length + 1) * (Number(options.barSpacing) + Number(options.barWidth));
}

function scaleArray(arr, scaleNumber) {
  return arr.map(el => el*scaleNumber)
}

function renderLabels(data, options) {
  let names = [];
  let bars = $('.bar');
  let labels = $('<div></div>')
    .addClass('label')
    .text('Hellow')
    .appendTo(bars);

    for (let i = 0; i < data.length; i++) {
      if (data[i] == options.labels[i]) {
        names = [...names, options.labels.data[i]]
      }
    }
    console.log(names);

    for (let i = 0; i < bars.length; i++) {
      labels[i].style.top = `${bars[i].clientHeight + 10}px`;
      }
}


drawBarChart(data, options, element);
