import React from "react"
import styled from "styled-components"
import { COLORS, DEVICE } from "../../constants"
import { LinkIcon } from "../../assets/svg"

export default function DocsLink({
    text = "Отчет о деятельности компании",
    // text = "Повестка дня в области устойчивого развития на период до 2030 года",
    url = "#",
}) {
    // текст для проверки
    // Повестка дня в области устойчивого развития на период до 2030 года
    // Контакты
    // Отчет о деятельности компании
    return (
        <Container href={url} target="_blank" rel="noopener noreferrer" className="docs-link">
            <Wrapper>
                <TextWrapper>
                    <Icon />
                    <Text>{text}</Text>
                </TextWrapper>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    max-width: 84%;
    margin: 0 auto;

    @media ${DEVICE.laptopS} {
        max-width: 76%;
    }
`

const Text = styled.span`
    display: inline-block;

    font-family: "CalibriLight";
    line-height: 1;
    color: ${COLORS.black};
`

const TextWrapper = styled.div`
    position: relative;
    display: inline-block;
`

const Icon = styled(LinkIcon)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 10px), -50%);
    width: 1.7vw;

    @media ${DEVICE.laptopS} {
        width: 20px;
    }
`

const Container = styled.a`
    position: relative;
    display: block;
    padding: 0.8em 1em;

    text-align: center;
    transition: 0.3s;
    background-color: ${COLORS.color_animate};

    /* относительный border-radius не получится сделать, тк нужна dashed border */
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='%2300529BFF' stroke-width='2' stroke-dasharray='9%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 18px;

    max-width: 28vw;
    margin: 0;
    font-size: 1.1vw;

    &:hover {
        background-color: ${COLORS.blue};

        ${Text} {
            color: ${COLORS.white};
        }

        ${Icon} {
            fill: ${COLORS.white};
        }
    }

    @media ${DEVICE.laptopS} {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        font-size: 15px;
    }
`
