const data = [10, 20, 30, 40, 50, 60, 70, 70];

const options = {
  width: '300',
  height: '300'
}

const element = document.querySelector('#root');


const axisHeight = 500;
const axisWidth = defineWidth(data);




function drawBarChart(data, options, element) {
  renderCharts(data);
}

function renderAxis(element) {
 let axis =  $('<div></div>')
    .addClass('axis')
    .css('width', `${axisWidth}px`)
    .appendTo(element);
    return axis;
}

function renderCharts(data) {
  const axis = renderAxis(element);
  const maxNumber = Math.max(...data);
  const minNumber = Math.min(...data);

  scaleNumber = (axisHeight/maxNumber)*0.95;

  const scaledArr = scaleArray(data, scaleNumber);

  scaledArr.map( (el, i) => {
    $('<div></div>')
      .addClass('bar')
      .css('height',`${el}px`)
      .appendTo(axis);
  })
  console.log(maxNumber);
  console.log(minNumber);
}

function defineWidth(data) {
  return (data.length + 1) * 80;
}

function scaleArray(arr, scaleNumber) {
  return arr.map(el => el*scaleNumber)
}

drawBarChart(data, options, element);
