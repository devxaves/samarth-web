import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

Channels.propTypes = {
  data: PropTypes.array,
};

function Channels(props) {
  const { data } = props;

  // useEffect(() => {
  //   const swiperAutoScroll = setInterval(() => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(swiperAutoScroll);
  //   };
  // }, []);

  const swiperRef = React.useRef(null);

function control_prev(params) {
  if (swiperRef.current && swiperRef.current.swiper) {
    swiperRef.current.swiper.slidePrev();
  }
}
function control_next(params) {
  if (swiperRef.current && swiperRef.current.swiper) {
    swiperRef.current.swiper.slideNext();
  }
}

  return (
    <div className="channel-carousel">
      <div class='control' id='control-prev' 
      onClick={control_prev}
      ></div>
      <section className="channel-section">
        {/* <div className="shape right"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="swiper-container project-swiper-container">
                <Swiper
                  ref={swiperRef}
                  className="project-swiper"
                  spaceBetween={20}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                  }}
                  slidesPerGroup={1}
                  {...gestureParams}
                >
                  {data.map((idx) => (
                    <SwiperSlide key={idx.id}>
                      <div className="swiper-slide">
                          <a href={idx.url} target="_blank" rel="noopener noreferrer">
                            <div class="channel-container">
                              <img class="channel-box"  src={idx.img} alt="Cyfonii" />
                              <div class="channel-name">
                              {idx.title}
                              </div>
                            </div>
                          </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class='control' id='control-next' onClick={control_next}></div>
    </div>
  );
}

export default Channels;


const gestureParams = {
  touchEventsTarget: 'wrapper', 
  touchStartPreventDefault: false, 
  touchMoveStopPropagation: false, 
  simulateTouch: true, 
  longSwipes: true,
  longSwipesRatio: 0.5, 
  longSwipesMs: 300, 
};
