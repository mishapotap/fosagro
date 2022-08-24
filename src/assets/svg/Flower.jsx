import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"

export default function Flower({ active, className }) {
    return (
        <Wrapper
            className={`${active ? "active" : ""} ${className}`}
            viewBox="0 0 60 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Leaf
                d="M0 33.146C4.76206 33.1684 9.51857 33.4742 14.2443 34.0615C28.4079 36.6061 28.9733 50.0695 28.9733 50.0695C28.9733 50.0695 26.6711 50.2042 20.5856 50.2042C6.38167 50.2042 0 33.146 0 33.146Z"
                fill="#A3A3A3"
            />
            <Leaf
                d="M59.8453 33.146C55.0788 33.1687 50.3178 33.4744 45.5875 34.0615C31.4509 36.633 30.8989 50.0965 30.8989 50.0965C30.8989 50.0965 33.2012 50.2311 39.2867 50.2311C53.4771 50.2042 59.8453 33.146 59.8453 33.146Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M29.9313 36.8489C32.8535 36.8489 35.2224 34.4799 35.2224 31.5577C35.2224 28.6355 32.8535 26.2666 29.9313 26.2666C27.0091 26.2666 24.6401 28.6355 24.6401 31.5577C24.6401 34.4799 27.0091 36.8489 29.9313 36.8489Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M40.7262 31.6531C43.6484 31.6531 46.0173 29.2841 46.0173 26.3619C46.0173 23.4397 43.6484 21.0708 40.7262 21.0708C37.804 21.0708 35.4351 23.4397 35.4351 26.3619C35.4351 29.2841 37.804 31.6531 40.7262 31.6531Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M35.92 10.5823C38.8422 10.5823 41.2112 8.21334 41.2112 5.29113C41.2112 2.36892 38.8422 0 35.92 0C32.9978 0 30.6289 2.36892 30.6289 5.29113C30.6289 8.21334 32.9978 10.5823 35.92 10.5823Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M23.9254 10.5823C26.8476 10.5823 29.2165 8.21334 29.2165 5.29113C29.2165 2.36892 26.8476 0 23.9254 0C21.0032 0 18.6343 2.36892 18.6343 5.29113C18.6343 8.21334 21.0032 10.5823 23.9254 10.5823Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M19.1168 31.6531C22.039 31.6531 24.4079 29.2841 24.4079 26.3619C24.4079 23.4397 22.039 21.0708 19.1168 21.0708C16.1946 21.0708 13.8257 23.4397 13.8257 26.3619C13.8257 29.2841 16.1946 31.6531 19.1168 31.6531Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M43.4034 19.9538C46.3256 19.9538 48.6946 17.5849 48.6946 14.6627C48.6946 11.7405 46.3256 9.37158 43.4034 9.37158C40.4812 9.37158 38.1123 11.7405 38.1123 14.6627C38.1123 17.5849 40.4812 19.9538 43.4034 19.9538Z"
                fill="#A3A3A3"
            />
            <Circle
                d="M16.4508 19.9538C19.373 19.9538 21.7419 17.5849 21.7419 14.6627C21.7419 11.7405 19.373 9.37158 16.4508 9.37158C13.5286 9.37158 11.1597 11.7405 11.1597 14.6627C11.1597 17.5849 13.5286 19.9538 16.4508 19.9538Z"
                fill="#A3A3A3"
            />
        </Wrapper>
    )
}
const Leaf = styled.path``
const Circle = styled.path``
const Wrapper = styled.svg`
    cursor: pointer;
    /* &:hover, */
    &.active {
        ${Leaf} {
            fill: ${COLORS.green};
        }
        ${Circle} {
            fill: ${COLORS.blue};
        }
    }

    width: 60px;

    @media ${DEVICE.laptopM} {
        width: 40px;
    }
`
