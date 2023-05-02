import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

import {
  ButtonPagination,
  ConteinerContorol,
} from 'components/Gallery/GalleryDesk/GalleryDesk.styled';

const styles = {
  root: {
    padding: '20px',
    width: '100vw',
  },
  scroll: {
    position: 'relative',

    display: 'flex',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',

    gap: '20px',
  },
  item: {
    width: '600px',
    height: '450px',
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
  controls: {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: 'flex',
  },
  paginationButton: {
    margin: '10px',
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export const Carousel = ({ items, renderItem }) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();
  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ul>
      <ConteinerContorol aria-hidden>
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => prev()}
        >
          {String.fromCharCode(8592)}
        </button>
        {pages.map((_, i) => (
          <ButtonPagination
            key={i}
            flag={activePageIndex === i}
            // style={{
            //   ...styles.paginationButton,
            //   ...(activePageIndex === i ? styles.paginationButtonActive : {}),
            // }}

            onClick={() => goTo(i)}
          >
            {/* {i + 1} */}
          </ButtonPagination>
        ))}
        <button
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {}),
          }}
          onClick={() => next()}
        >
          {String.fromCharCode(8594)}
        </button>
      </ConteinerContorol>
    </div>
  );
};

export const CarouselItem = ({ isSnapPoint, children }) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </li>
);
