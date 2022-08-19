import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import {
    MailButton,
    CourseProgressButton,
    SoundButton, 
} from "../molecules"
import { COLORS } from "../../constants"
import { Close } from "../../assets/svg"
import * as routes from "../../constants/routes"
import { MenuBackground } from "../../assets/images"
import timelineData from "../../data/timelineData"
import modules from "../modules"
import { ContentModule } from "../atoms"

export default function Course01() {
    return (
        <Layout>
            <Logo>ЗНАЧЕК ФОСАГРО</Logo>
            <div>01</div>
            <div>
                Устойчивое развитие - модный термин или реальность, которая
                касается каждого?
            </div>
            <TempSvgContainer>
                <Link to={routes.HOME}>
                    <Close color={COLORS.blue} />
                </Link>
            </TempSvgContainer>
            <MenuContainer>
                {timelineData.map((section, index) => (
                    // TODO обернуть компоненты в link и дописать его в data
                    // eslint-disable-next-line react/no-array-index-key
                    <ContentModule key={index} data={section} modules={modules.base} />
                ))}
            </MenuContainer>
            
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <CourseProgressButton />
                <MailButton />
                <SoundButton />
            </div>
        </Layout>
    )
}

const TempSvgContainer = styled.div``

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    background: url(${MenuBackground}) no-repeat center center / cover;
    overflow-x: hidden;
    overflow-y: hidden;
    ${ TempSvgContainer } {
        position: absolute;
        right: 0;
        top: 0; 
    }
`

const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`
const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
`
