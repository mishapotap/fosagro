import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { courseStepButtonData1 } from "../../data"
import {
    CourseStepButton,
    CourseStepPoint,
    MailButton,
    CourseProgressButton,
    SoundButton,
} from "../molecules"
import { COLORS } from "../../constants"
import { Close } from "../../assets/svg"
import * as routes from "../../constants/routes"
import { MenuBackground } from "../../assets/images"

export default function Course01() {
    return (
        <Layout>
            <Logo>ЗНАЧЕК ФОСАГРО</Logo>
            <div>01</div>
            <div>
                Устойчивое развитие - модный термин или реальность, которая
                касается каждого?
            </div>
            <Link to={routes.HOME}>
                <Close color={COLORS.blue} />
            </Link>
            <MenuContainer>
                {courseStepButtonData1.map((item) => (
                    <Link to={routes.HOME}>
                        <CourseStepButton
                            key={item.rotate}
                            title={item.title}
                            description={item.description}
                            time={item.time}
                            bgColor={item.bgColor}
                            image={item.image}
                            rotate={item.rotate}
                        />
                    </Link>
                ))}
            </MenuContainer>
            <CourseStepPoint color="rgba(218, 170, 0)" />
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

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    background: url(${MenuBackground}) no-repeat center center / cover;
    overflow-x: hidden;
    overflow-y: hidden;
    svg {
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
`
