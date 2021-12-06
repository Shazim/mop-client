import React from 'react'

function VideoCard({ videoObj = { title: "Prospect 4", image_url: "/images/card/bg_image.png", views: 1302, incImages: 28, comments: 6 } }) {
    return (
        <div className="relative max-w-sm">
            <img className="w-100%" src={videoObj.image_url} />
            <img className="absolute link left-50% top-50% transform-xy" src="/images/card/play-button.svg" />
            <div className="flex w-100% justify-between absolute left-0 bottom-0 pb-32 pl-30 pr-30 text-white">
                <div>
                    <div className=" font-avenir-reg font-medium tracking-tight uppercase">{videoObj.title}</div>
                    <div className="flex">
                        <div><span>{videoObj.views}</span> views</div>
                        <div><span>{videoObj.incImages}</span> Images Included</div>
                        <div><span className="font-bold text-xsm">{videoObj.comments}</span> Comments</div>
                    </div>
                </div>
                <div className="flex items-center" >
                    <div className="bg-white rounded-md pt-8 pb-8 pl-20 pr-20">
                        <div className="font-bold text-sm tracking text-secondary-darkest">Edit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard