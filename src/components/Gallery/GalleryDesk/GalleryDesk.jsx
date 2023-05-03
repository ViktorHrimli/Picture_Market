import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

import {
  ButtonPagination,
  ConteinerContorol,
  ConteinerList,
  ListScroll,
  Root,
  ButtonNext,
  ButtonPrev,
} from 'components/Gallery/GalleryDesk/GalleryDesk.styled';

const styles = {
  itemSnapPoint: {
    scrollSnapAlign: 'start',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  nextPrevButton: {
    width: '30px',
    height: '25px',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nextPrevButtonDisabled: { opacity: 0.3 },

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
        <ButtonPrev
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === 0 ? styles.nextPrevButtonDisabled : {}),
          }}
          onClick={() => prev()}
        />
        {pages.map((_, i) => (
          <ButtonPagination
            key={i}
            flag={activePageIndex === i}
            onClick={() => goTo(i)}
          ></ButtonPagination>
        ))}
        <ButtonNext
          style={{
            ...styles.nextPrevButton,
            ...(activePageIndex === pages.length - 1
              ? styles.nextPrevButtonDisabled
              : {}),
          }}
          onClick={() => next()}
        />
      </ConteinerContorol>
    </Root>
  );
};

export const CarouselItem = ({ isSnapPoint, children, isBigDesktop }) => (
  <ConteinerList
    isWidth={isBigDesktop}
    style={{
      ...(isSnapPoint ? styles.itemSnapPoint : {}),
    }}
  >
    {children}
  </ConteinerList>
);
