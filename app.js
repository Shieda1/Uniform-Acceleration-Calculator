// https://calculator.swiftutors.com/uniform-acceleration-calculator.html

// calculators doesnot work

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const uniformAccelerationRadio = document.getElementById('uniformAccelerationRadio');
const distanceTravelledRadio = document.getElementById('distanceTravelledRadio');
const initialVelocityRadio = document.getElementById('initialVelocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');
const timePeriodRadio = document.getElementById('timePeriodRadio');

let uniformAcceleration;
let initialVelocity = v1;
let finalVelocity = v2;
let timePeriod = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

uniformAccelerationRadio.addEventListener('click', function() {
  variable1.textContent = '(v0) Initial Velocity (m/s)';
  variable2.textContent = '(v) Final Velocity (m/s)';
  variable3.textContent = '(t) Time Period (s)';
  initialVelocity = v1;
  finalVelocity = v2;
  timePeriod = v3;
  result.textContent = '';
});

distanceTravelledRadio.addEventListener('click', function() {
  variable1.textContent = '(v0) Initial Velocity (m/s)';
  variable2.textContent = '(v) Final Velocity (m/s)';
  variable3.textContent = '(t) Time Period (s)';
  initialVelocity = v1;
  finalVelocity = v2;
  timePeriod = v3;
  result.textContent = '';
});

initialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Uniform Acceleration (m/s²)';
  variable2.textContent = '(v) Final Velocity (m/s)';
  variable3.textContent = '(t) Time Period (s)';
  uniformAcceleration = v1;
  finalVelocity = v2;
  timePeriod = v3;
  result.textContent = '';
});

finalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Uniform Acceleration (m/s²)';
  variable2.textContent = '(v0) Initial Velocity (m/s)';
  variable3.textContent = '(t) Time Period (s)';
  uniformAcceleration = v1;
  initialVelocity = v2;
  timePeriod = v3;
  result.textContent = '';
});

timePeriodRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Uniform Acceleration (m/s²)';
  variable2.textContent = '(v0) Initial Velocity (m/s)';
  variable3.textContent = '(v) Final Velocity (m/s)';
  uniformAcceleration = v1;
  initialVelocity = v2;
  finalVelocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(uniformAccelerationRadio.checked)
    result.textContent = `Uniform Acceleration = ${computeUniformAcceleration().toFixed(2)} m/s²`;

  else if(distanceTravelledRadio.checked)
    result.textContent = `Distance Travelled = ${computeDistanceTravelled().toFixed(2)} km`;

  else if(initialVelocityRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)} m/s`;

  else if(finalVelocityRadio.checked)
    result.textContent = `Final Velocity = ${computeFinalVelocity().toFixed(2)} m/s`;

  else if(timePeriodRadio.checked)
    result.textContent = `Time Period = ${computeTimePeriod().toFixed(2)} s`;
})

// calculation

function computeUniformAcceleration() {
  return Number(finalVelocity.value) - (Number(initialVelocity.value) / Number(timePeriod.value));
}

function computeDistanceTravelled() {
  return Number(initialVelocity.value) * Number(timePeriod.value) + 0.5 * computeUniformAcceleration() * Math.pow(Number(timePeriod.value), 2);
}

function computeInitialVelocity() {
  return (Number(finalVelocity.value) - Number(uniformAcceleration.value)) * Number(timePeriod.value);
}

function computeFinalVelocity() {
  return Number(uniformAcceleration.value) + (Number(initialVelocity.value) / Number(timePeriod.value));
}

function computeTimePeriod() {
  return 1 / ((Number(finalVelocity.value) - Number(uniformAcceleration.value)) / Number(initialVelocity.value));
}