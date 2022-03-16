import SelectOptions from 'components/atoms/form/SelectOptions';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SubHeader from 'components/molecules/header/SubHeader';
import React from 'react';


export default function StockItem({addItem}) {
    return (
        <div className="w-80%">
                    <SubHeader handler={addItem} title="stockroom" subtitle="up for sale" buttonText="ADD NEW ITEM" button={true} />
                    <div className="px-43 pt-32">
                        <div className="flex justify-between">
                            <SearchBar placeholder="Search For An Artist" bgColor="bg-backgroundColor"/>
                            <div className="w-60% flex justify-between">
                                <SelectOptions width="30%" label="up for sale"/>
                                <SelectOptions width="35%" label="sort low - high"/>
                                <SelectOptions width="30%" label="show 50"/>
                            </div>
                        </div>
                        <div className="text-center justify-center pt-112">
                            <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">You have no images for sale</p>
                            <p className="font-avenir-reg text-secondary text-xl uppercase leading-55 tracking-wider">Drag your images here to start uploading. </p>
                            <p className="font-reg text-black text-base leading-snug">When uploaded, you can edit your image details by clicking the pencil icon. Adding this will<br/> make your images more visible for search engines.</p>
                            <img className="mx-auto w-180 h-180 mt-56 mb-491" src="/images/galleryIcon.svg"/>
                        </div>
                    </div>
                </div> 
    );
}