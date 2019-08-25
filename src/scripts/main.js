const data = [55, 80, 11, 40, 50, 60, 20, 70];

const options = {
  axisHeight: '500',
  colors: ['Maroon', 'Blue', 'Salmon', 'DarkSeaGreen', 'Purple', 'DarkSlateGray', 'Crimson'],
  valuePosition: 'center',
  barSpacing: '40',
  barWidth: '30'
}

const element = document.querySelector('#root');
const header = document.querySelector('.header');

const axisWidth = defineWidth(data);
let textPosition = 0;




function drawBarChart(data, options, element) {
  renderCharts(data, options);
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
  const maxNumber = Math.max(...data);

  scaleNumber = (options.axisHeight/maxNumber)*0.95;

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


drawBarChart(data, options, element);
