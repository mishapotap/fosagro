import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ReviewModalStore } from "../../../store";
import { Flower } from "../../../assets/svg"
import { DEVICE } from "../../../constants";

function Rating() {
    return (
        <StyledRating
        onMouseLeave={() => ReviewModalStore.setRatingHoverVal(0)}
        inert={ReviewModalStore.isLoading ? "" : undefined}
    >
        {Array.from({ length: 5 }, (_, i) => i + 1).map(
            (i) => (
                <RatingItem
                    key={i}
                    value={i}
                    onClick={() => ReviewModalStore.setRatingVal(i)}
                    onMouseEnter={() => ReviewModalStore.setRatingHoverVal(i)}
                >
                    <Flower
                        active={
                            (ReviewModalStore.ratingHoverVal &&
                                i <= ReviewModalStore.ratingHoverVal) ||
                            (!ReviewModalStore.ratingHoverVal &&
                                i <= ReviewModalStore.ratingVal)
                        }
                    />
                </RatingItem>
            )
        )}
    </StyledRating>
    )
}


const StyledRating = styled.div`
    display: flex;
    margin-bottom: 3.7vh;
`

const RatingItem = styled.div`
    cursor: pointer;
    padding: 0 0.99vw;

    @media ${DEVICE.laptopM} {
        padding: 0 10px;
    }
`

export default observer(Rating)
