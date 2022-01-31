import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper';
import 'swiper/css';

const TimeBlock = () => {
    const [maxShownedTime, setMaxShownedTime] = useState(4);

    const values = {
        sat: ['12.12pm'],
        sun: ['12.12pm', '10.12pm', '10.12pm'],
        mon: ['12.12pm', '11.1pm', '10.12pm', '10.12pm'],
        tues: ['12.12pm', '11.1pm', '10.12pm', '10.12pm']

    };

    const getDateRenderer = (dates = []) => {
        let dateElements = [];
        for (let i = 0; i < maxShownedTime; i++) {

            let element = dates[i] ? (
                <button
                    style={{ height: '33px', width: '68px', margin: '5px', backgroundColor: '#6655C5', color: 'white', border: 'none' }}
                >{dates[i]}</button>
            ) : <div
                style={{ display: 'flex', justifyContent: 'center' }}
            > - </div>;
            dateElements.push(element);
        }

        return dateElements;
    }

    let slides = Object.keys(values).map(key => (
        <SwiperSlide>
            {/* <h4 style={{ display: 'flex', justifyContent: 'center' }}>{key}</h4> */}
            {
                getDateRenderer(values[key])
            }
        </SwiperSlide>
    ));

    return (
        <div className="App" style={{ width: '100%' }}>
            <Swiper
                // spaceBetween={50}
                slidesPerView={3}
                modules={[Controller]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {slides}

            </Swiper>
        </div>
    );
};

export default TimeBlock;