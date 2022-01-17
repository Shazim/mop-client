import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import React from 'react';

function Categories() {
  const styles = [
    { id: 1, title: 'abstract' },
    { id: 2, title: 'Architectural' },
    { id: 3, title: 'Astro' },
    { id: 4, title: 'B&W' },
    { id: 5, title: 'Cityscape' },
    { id: 6, title: 'Composite' },
    { id: 7, title: 'Drone' },
    { id: 8, title: 'Double Exposure' },
    { id: 9, title: 'fashion' },
    { id: 10, title: 'FINE ART' },
    { id: 11, title: 'Infrared' },
    { id: 12, title: 'Landscape' },
    { id: 13, title: 'long Exposure' },
    { id: 14, title: 'Macro' },
    { id: 15, title: 'journalism' },
    { id: 16, title: 'Portraiture' },
    { id: 17, title: 'Seascape' },
    { id: 18, title: 'Sports' },
    { id: 19, title: 'Still Life' },
    { id: 20, title: 'Street' },
    { id: 21, title: 'Underwater' },
    { id: 22, title: 'Wildlife' },
  ];

  const colors = [
    { id: 1, title: 'Red' },
    { id: 2, title: 'green' },
    { id: 3, title: 'blue' },
    { id: 4, title: 'yellow' },
    { id: 5, title: 'brown' },
    { id: 6, title: 'white' },
    { id: 7, title: 'black' },
    { id: 8, title: 'purple' },
    { id: 9, title: 'orange' },
    { id: 10, title: 'grey' },
  ];
  return (
    <div>
      <div>Which styles/subjects apply to this item?</div>
      <div>
        {styles.map(({ title }) => (
          <CheckBox label={title} />
        ))}
      </div>
      <div>which colours apply to this item?</div>
      <div>
        {colors.map(({ title }) => (
          <CheckBox label={title} />
        ))}
      </div>
      <div>Select an orientation:</div>
      <div className="flex">
        <Button>landscape</Button>
        <Button>portrait</Button>
        <Button>square</Button>
      </div>
      <div className="flex">
        <div>choose an edition:</div>
        <img src="" alt="" />
      </div>
      <div className="flex">
        <Button>open edition</Button>
      </div>
      <div className="flex">
        <Button>previous</Button>
        <Button>next</Button>
      </div>
    </div>
  );
}

export default Categories;
