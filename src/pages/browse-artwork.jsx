import GalleryCard from 'components/atoms/cards/GalleryCard'
import SelectOptions from 'components/atoms/form/SelectOptions'

import Footer from 'components/molecules/footer/Footer'
import Header from 'components/molecules/header/Header'
import SideBarWithLogin from 'components/molecules/sidebar/SideBarWithLogin'
import React from 'react'
import { Link } from 'react-router-dom'

function BrowseArtwork() {
  const counter = [1,2,2,2,2,2,2,2,3,3,3,3]
    return (
        <>
        <Header />
        {/* <GalleryBar />d */}
        <div className='flex'>
            {/* <div className='w-21% '> */}

                <SideBarWithLogin/>
            {/* </div> */}
            <div className='w-91% bg-backgroundColor'>
                <div className="flex justify-end pt-31 px-57">
                    <div className="mr-25">
                        <SelectOptions width="180" label="SOHW 50" />
                    </div>
                    <SelectOptions label="sort: Most popular" />
                </div>
                <div className='pt-30 pl-57 pb-43'> 
                    <div className='flex flex-wrap gap-36'>{
                    counter.map(() => <Link to={"/gallery-detail"}><GalleryCard className="w-100% h-100%"/></Link> )
                    }    
                    </div>    
                    <div className='text-primary link mt-25 text-base'>1</div>
                </div>
            {/* <DiscoverMore background="bg-gray-lighter" /> */}
            </div>
        </div>
        <Footer />
      </>
    )
}

export default BrowseArtwork
