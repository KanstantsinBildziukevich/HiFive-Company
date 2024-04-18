import {useEffect} from "react";
import {ReviewsContentWrapper, ReviewsTitle, SlideWrapper} from "./styled";
import {ReviewsCarousel} from "../../components/reviewsCarousel/reviewsCarousel";

export const Reviews = () => {

  useEffect(() => {
    document.title = "HiFive - Reviews";
  }, []);

  return (
    <SlideWrapper>
      <ReviewsContentWrapper>
        <ReviewsTitle>Reviews</ReviewsTitle>
        <ReviewsCarousel/>
      </ReviewsContentWrapper>
    </SlideWrapper>
  );
}
