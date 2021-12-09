import React from 'react'
import Button from "../buttons/Button"

function ProfileCard({ obj = { title: "excellent", image_url: "/images/card/profilecard_image.svg", views: 1302, incImages: 1302, } }) {

    return (
        <div className="flex justify-center items-center">
            <div className="w-191 h-171 relative link">
                <img src={obj.image_url} />
                <Button className="w-100% h-33 uppercase absolute bottom-0 tracking text-secondary" color="bg-gray"> View Gallery</Button>
            </div>
            <div className="w-100% text-dark ml-26">
                <div className="flex ">
                    <div className=" font-avenir-reg text-20 text-primary tracking-tight uppercase mr-13">{obj.title}</div>
                    <div className="flex pt-4">{[...Array(5)].map((item, index) => <img className="w-17 h-17 mr-2" src="/images/card/star_image.svg" />)}</div>
                </div>
                <div className="w-35% font-light text-sm text-secondary-dark leading-9 mb-15">Lorem ipsum dolor sit amet, consectetur adipihg elit. Tincidunt viverra pharetra ultricies elaentum. </div>
                <div className="flex text-xsm">
                    <div className="flex justify-center items-center text-secondary">
                        <img className="w-28 h-29" src="/images/card/userprofile_image.svg" />
                        <div className="font-avenir-reg text-base  tracking-tight uppercase ml-10">kate smith</div>
                        <div><span className="font-bold ml-10">{obj.incImages}</span> Gallery views</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
