import { Link } from 'react-router-dom';

export const bubblesCircle = ({
  parentClass,
  noOfBubbles,
  childClass,
  childHeight,
  questionType,
  value,
}) => {
  let div = 360 / noOfBubbles;
  let radius1 = (childHeight * (noOfBubbles / 2)) / 2 - 5;
  let parentdiv = document.getElementById(parentClass);
  parentdiv.style.height = childHeight * (noOfBubbles / 2 + 1) + 'px';
  parentdiv.style.width = childHeight * (noOfBubbles / 2 + 1) + 'px';

  var currentValue = value % 10;
  var parts = Math.floor(value / 10);

  var circleToBeFilled =
    questionType === 'dna'
      ? dnaCircle(value)
      : parts * 4 + partCount(currentValue);
  if (parentdiv) {
    for (var i = 1; i <= noOfBubbles; ++i) {
      var childdiv = document.createElement('div');
      var positionToBe = i - 11;
      if (i <= circleToBeFilled) {
        childdiv.className = `bg-${colorLoader(i * 5)} ${childClass}`;
      } else {
        childdiv.className = childClass;
      }
      childdiv.style.position = 'absolute';
      var y =
        Math.cos(div * positionToBe * (Math.PI / 180)) * radius1 + radius1;
      var x =
        Math.sin(div * positionToBe * (Math.PI / 180)) * radius1 + radius1;
      childdiv.style.top = y.toString() + 'px';
      childdiv.style.left = x.toString() + 'px';
      childdiv.style.height = childHeight + 'px';
      childdiv.style.width = childHeight + 'px';
      parentdiv.appendChild(childdiv);
    }
  }
};

export const camelCasetoNormal = (word) => {
  return word
    .split(/(?=[A-Z])/)
    .map((s) => s[0].toUpperCase() + s.slice(1) + ' ')
    .join('');
};

export const colorLoader = (value) => {
  switch (true) {
    case value > 0 && value <= 20:
      return 'primary-red';
    case value > 20 && value <= 40:
      return 'primary-orange';
    case value > 40 && value <= 60:
      return 'primary-yellow';
    case value > 60 && value <= 80:
      return 'primary-green-light';
    case value > 80 && value <= 100:
      return 'primary-green';
  }
};

export const colorText = (value) => {
  switch (true) {
    case value > 0 && value <= 12:
      return 'primary-red';
    case value > 12 && value <= 22:
      return 'primary-orange';
    case value > 22 && value <= 32:
      return 'primary-yellow';
    case value > 32 && value <= 42:
      return 'primary-green-light';
    case value > 42 && value <= 52:
      return 'primary-green';
  }
};

export const partCount = (value) => {
  switch (true) {
    case value >= 7:
      return 3;
    case value >= 5:
      return 2;
    case value >= 2:
      return 1;
    default:
      return 0;
  }
};

export const dnaCircle = (value) => {
  switch (true) {
    case value >= 35:
      return 20;
    case value >= 28:
      return 16;
    case value >= 21:
      return 12;
    case value >= 14:
      return 8;
    case value >= 7:
      return 4;
    default:
      return 0;
  }
};

export const ConditionalLink = ({ children, to, condition }) =>
  !!condition && to ? <Link to={to}>{children}</Link> : <>{children}</>;
