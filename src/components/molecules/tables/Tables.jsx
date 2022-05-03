import React, { useState, useEffect } from 'react';

function Tables({
  filter = false,
  isOpen,
  handler,
  tableHeading = ['order', 'date', 'shipping date', 'status'],
  obj = [
    {
      order: '#123457',
      date: '12/10/21',
      'shipping date': '12/10/21',
      status: 'completed',
      details: {
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      order: '#123456',
      date: '12/10/21',
      'shipping date': '12/10/21',
      status: 'completed',
      details: {
        'customer name': 'mr dean horlock2',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      order: '#123456',
      date: '12/10/21',
      'shipping date': '12/10/21',
      status: 'completed',
      details: {
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      order: '#123456',
      date: '12/10/21',
      'shipping date': '12/10/21',
      status: 'completed',
      details: {
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
  ],
}) {
  const [id, setId] = useState();
  const handleId = (i) => {
    setId((prev) => (prev == i ? null : i));
  };

  const orderDetail = (details) => {
    const textClass = 'font-reg text-base leading-6 text-black capitalize';
    return (
      <>
        <div className="border-b flex pl-18 sm:pl-10 border-gray justify-between bg-white sm:flex-col sm:pr-18 sm:border-b-0 sm:bg-gray-dark">
          <div className="w-50% flex justify-between sm:w-100%">
            <div className="w-50% sm:w-50%">
              <p className="heading mt-17">name</p>
              <p className={`${textClass} mb-17`}>{details['customer name']}</p>
            </div>
            <div className="w-50% sm:w-50%">
              <p className="heading mt-17">shipping address</p>
              <p className={`${textClass} mb-17`}>
                {details['shipping address']}
              </p>
            </div>
          </div>
          <div className="w-50% flex justify-between sm:pl-0 sm:w-100%">
            <div className="w-50%">
              <p className="heading mt-17">order date</p>
              <p className={`${textClass} mb-17`}>{details['order date']}</p>
            </div>
            <div className="w-50%">
              <p className="heading mt-17">shipping date</p>
              <p className={`${textClass} mb-17`}>{details['shipping date']}</p>
            </div>
          </div>
        </div>
        <div className="border-b-2 flex border-gray bg-white sm:flex-col-reverse sm:bg-gray-dark">
          <div className="w-25% pl-18 sm:pl-10 sm:w-100% sm:px-18">
            <img className="w-100% mt-38 mb-38" src={details['image'].url} />
          </div>
          <div className="flex w-75% pl-18 sm:pl-10 sm:w-100%">
            <div className="w-33% align-top pt-23 sm:w-50%">
              <p className="heading">size</p>
              <p className={textClass}>{details['image'].size}</p>
              <p className="heading">paper</p>
              <p className={textClass}>{details['image'].paper}</p>
              <p className="heading">frame</p>
              <p className={textClass}>{details['image'].frame}</p>
            </div>
            <div className="w-33% sm:hidden"></div>
            <div className="w-33% align-top pt-23 sm:w-50% sm:pl-0">
              <p className="heading">order total</p>
              <p className={textClass}>190.00</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const divider = (i) => {
    const index = window.screen.width < '540' ? i - 1 : i;
    const percentage = 100 / index;
    return Math.floor(percentage) + '%';
  };

  return (
    <div className="w-full">
      <div className="h-42 w-full flex pl-18 sm:pl-10 tracking-wider font-avenir-reg text-base uppercase border-b-2 border-gray bg-white">
        {tableHeading.map((heading, i) => (
          <div
            className={`w-${divider(tableHeading.length)} sm:${
              i == 2 ? 'hidden' : ''
            } font-medium`}
          >
            <div className="flex leading-5 text-secondary">
              {heading}{' '}
              {filter ? (
                <img
                  className="-mt-6 link"
                  src={`${
                    i == 0
                      ? '/images/table/nameFilter.svg'
                      : '/images/table/filterIcon.svg'
                  }`}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
      {obj.map((keys, index) => (
        <>
          <div className="h-60 relative flex items-center border-b capitalize text-base pl-18 sm:pl-10 pr-0 font-reg text-black border-gray ">
            {Object.values(keys).map(
              (value, i) =>
                typeof value != 'object' && (
                  <div
                    className={`w-${divider(tableHeading.length)} sm:${
                      i == 2 ? 'hidden' : ''
                    }`}
                  >
                    {value}
                  </div>
                )
            )}
            {filter ? (
              <div
                className="link absolute right-20 sm:right-10"
                onClick={() => handleId(index)}
              >
                <img
                  className={`${id == index ? 'transform rotate-180' : ''}`}
                  src="/images/table/downArrow.svg"
                />
              </div>
            ) : (
              <div className="tracking text-xl link absolute sm:right-10 right-20">
                ...
              </div>
            )}
          </div>
          {id == index && orderDetail(keys.details)}
        </>
      ))}
    </div>
  );
}

export default Tables;
