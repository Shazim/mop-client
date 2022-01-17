import React from 'react';

function Pricing() {
  return (
    <div>
      <div className="flex">
        <div>Would you like to sell this item?</div>
        <SwitchButton />
        <div>
          Would you like to sell via our printing partner or self fulfil?
        </div>
        <div>
          The quickest and easiest option is to let us handle your printing,
          framing, shipping and payment costs and logistics. You just need to
          decide how much profit you want to make! If you choose to self fulfil,
          and if someone chooses to buy your work, they will be connected to you
          via email, and you will be responsible for all printing, framing,
          shipping and payment costs and logistics.
        </div>
      </div>
    </div>
  );
}

export default Pricing;
