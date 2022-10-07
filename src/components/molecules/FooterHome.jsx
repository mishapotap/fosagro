import React from "react"
import styled from "styled-components"
import { AVTdigital } from "../../assets/images"
import { Footer } from "../organisms"
import { COLORS, DEVICE } from "../../constants"

export default function FooterHome() {
    return(
        <FooterContainer>
            <CopyRight>© Группа компаний ФосАгро 2001 — 2022</CopyRight>
            <Footer className="home"/>
            <LinkAVT
                href="https://avt.digital/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={AVTdigital} alt="AVTdigital" />
                Разработано AVT Digital
            </LinkAVT>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 17px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: end;
    width: 100%;
    padding: 0 2.3vw 0 4.3vw;

    font-size: 16px;
    line-height: 20px;

    @media ${DEVICE.laptopM} {
        padding-left: 3vw;
    }

    @media ${DEVICE.laptopS} {
        padding: 0 23px;
    }

    @media ${DEVICE.tablet} {
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
        align-items: center;
    }

    @media ${DEVICE.mobile} {
        font-size: 12px;
        line-height: 14px;
    }
`

const CopyRight = styled.div`
    padding-bottom: 5px;
    font-family: "CalibriBold";
    font-weight: 700;

    color: ${COLORS.copy_right};

    opacity: 0.9;
`

const LinkAVT = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-self: flex-end;

    font-family: "CalibriRegular";
    font-weight: 400;

    color: ${COLORS.white};

    opacity: 0.3;
    transition: all 0.3s;

    img {
        margin-right: 5px;
        @media ${DEVICE.tablet} {
            width: 25px;
        }

        @media ${DEVICE.mobile} {
            width: 18px;
        }
    }

    &:hover {
        opacity: 0.8;
    }

    @media ${DEVICE.tablet} {
        justify-content: flex-start;
        justify-self: auto;
    }
`