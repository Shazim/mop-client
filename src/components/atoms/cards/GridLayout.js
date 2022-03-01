import React, { useState, useEffect } from 'react';
import "../../../index.css"

export default function GridLayout({ column, gap, obj=[
  {
  imageUrl:'/images/gallery/image0.png',
  userName:'Amy Moore',
  status: 'available',
  userImage:'/images/gallery/userImage.png',
  galleryImage:'1,786',
  totalImages:'1,643',
},
{
  imageUrl:'/images/gallery/image1.png',
  userName:'Amy Moore',
  status: 'available',
  userImage:'/images/gallery/userImage.png',
  galleryImage:'1,786',
  totalImages:'1,643',
},
{
  imageUrl:'/images/gallery/image2.png',
  userName:'Amy Moore',
  status: 'available',
  userImage:'/images/gallery/userImage.png',
  galleryImage:'1,786',
  totalImages:'1,643',
},
{
  imageUrl:'/images/gallery/image3.png',
  userName:'Amy Moore',
  status: 'available',
  userImage:'/images/gallery/userImage.png',
  galleryImage:'1,786',
  totalImages:'1,643',
},
// {
//   imageUrl:'/images/gallery/image4.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
// {
//   imageUrl:'/images/gallery/image5.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
// {
//   imageUrl:'/images/gallery/image6.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
// {
//   imageUrl:'/images/gallery/image7.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
// {
//   imageUrl:'/images/gallery/image8.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
// {
//   imageUrl:'/images/gallery/image9.jpg',
//   userName:'Amy Moore',
//   status: 'available',
//   userImage:'/images/gallery/userImage.png',
//   galleryImage:'1,786',
//   totalImages:'1,643',
// },
] }) {
  useEffect(() => {
    // AOS.init();
    // AOS.refresh();
  }, []);
  return (
    <div  style={{ columns: column, columnGap: 12 }}>
      {obj.map((item, i) => <div className='relative'>

        <img src={item.imageUrl} key={i} className='image' style={{ paddingBottom: 12  }} />
        <div className='absolute bottom-20 left-21'>
                        <div className='flex items-center mb-8'>
                            <img className='w-30 h-32 rounded-50%' src={item.userImage}/>
                            <p className='text-white ml-10'>{item.userName}</p>
                        </div>
                        <p className='text-white capitalize'>{item.galleryImage} gallary views</p>
                        <p className='text-white capitalize'>{item.totalImages} images {item.status}</p>
                    </div>
      </div>
      )}
    </div>
  );
}
