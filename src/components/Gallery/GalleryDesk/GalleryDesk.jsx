import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

import {
  ButtonPagination,
  ConteinerContorol,
  ConteinerList,
  ListScroll,
  Root,
} from 'components/Gallery/GalleryDesk/GalleryDesk.styled';

const styles = {
  item: {
    width: '620px',
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

export const Carousel = ({ items, renderItem, isBigDesktop }) => {
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
    <Root>
      <ListScroll ref={scrollRef} isWidth={isBigDesktop}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i),
          })
        )}
      </ListScroll>
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
            onClick={() => goTo(i)}
          ></ButtonPagination>
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
    </Root>
  );
};

export const CarouselItem = ({ isSnapPoint, children }) => (
  <ConteinerList
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </ConteinerList>
);
