import React from 'react'

function GalleryCard({ obj = { title: "Gallery Name", image_url: "/images/card/bg_image2.svg", views: 1302, incImages: 28, } }) {
    return (
        <div className="relative w-280 h-280 rounded-lg">
            <img src={obj.image_url} />
            <div className="w-100% justify-between absolute left-0 bottom-0 pb-22 pl-20 text-white">
                <div className=" font-avenir-reg tracking-tight uppercase">{obj.title}</div>
                <div className="flex text-xsm">
                    <div><span className="font-bold">{obj.views}</span> views</div>
                    <div><span className="font-bold ml-10">{obj.incImages}</span> Images Included</div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCard
