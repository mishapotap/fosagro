import styled from "styled-components"
import { COLORS, DEVICE } from "../../../constants"
import { Title } from "../Content"

const TextBase = styled.div`
    font-size: 1.3vw;
    color: ${COLORS.black};
    line-height: 1.3;

    @media ${DEVICE.laptop} {
        font-size: 20px;
    }

    @media ${DEVICE.mobile} {
        font-size: 18px;
    }
`

const Label = styled(TextBase)`
    font-family: "CalibriRegular", sans-serif;
`

const Text = styled(TextBase)`
    font-family: "CalibriLight", sans-serif;
`

const StyledTitle = styled(Title)``

const Block = styled.div`
    ${StyledTitle} {
        margin-bottom: 3vh;
        max-width: 32.5vw;

        @media ${DEVICE.laptopS} {
            margin-bottom: 2.5vh;
        }

        @media ${DEVICE.laptop} {
            margin-bottom: 30px;
            max-width: 400px;
        }

        @media ${DEVICE.laptopS} {
            max-width: 100%;
        }
    }

    ${Label} {
        margin-bottom: 2vh;
        max-width: 33vw;

        @media ${DEVICE.laptop} {
            max-width: 450px;
        }

        @media ${DEVICE.laptopS} {
            margin-bottom: 20px;
        }
    }

    ${Text} {
        margin-bottom: 3.5vh;
        max-width: 28vw;

        @media ${DEVICE.laptopM} {
            margin-bottom: 3vh;
        }

        @media ${DEVICE.laptop} {
            margin-bottom: 30px;
            max-width: 100%;
        }
    }
`

export { Label, Text, Block, StyledTitle }
