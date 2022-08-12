import React from "react"
import styled from "styled-components"
import * as routes from "./constants/routes"
import "./assets/fonts/index.css"
import GlobalStyle from "./globalStyles"
import { SpaceShip, MksIcon } from "./assets/images"
import {
    SendButton,
    NextQuestionButton,
    BackToChapterButton,
    Timer,
    MenuProgressBar,
    StepProgressBar,
	VideoPlayer,
} from "./components/atoms"
import {
    MailButton,
    CourseProgressButton,
    SoundButton,
    CourseStepButton,
    CourseStepPoint,
    MenuButton,
} from "./components/molecules"
import {
    Flower,
    Close,
    Arrow,
    Next,
    Prev,
    Headphones,
    Tree,
} from "./assets/svg"
import { COLORS, FONTS } from "./constants"
import { HeadphonesIcon, TimerIcon } from "./assets/svg/static"
// eslint-disable-next-line import/named
import { menuButtonData, courseStepButtonData1 } from "./data"
import { AvtVideo } from './assets/video'

function App() {
    return (
		<>
			<GlobalStyle/>
			<Wrapper>
				<Title>Hello World!</Title>
				<Subtitle>Start</Subtitle>
				<span>{routes.HOME}</span>
				<ButtonContainer>
					{courseStepButtonData1.map((item) => (
						<CourseStepButton
							key={item.rotate}
							title={item.title}
							description={item.description}
							time={item.time}
							bgColor={item.bgColor}
							image={item.image}
							rotate={item.rotate}
						/>
					))}
				</ButtonContainer>
				{/*  */}
				<img src={SpaceShip} alt="spaceship" />
				<img src={MksIcon} alt="mksicon" />
				<img src={HeadphonesIcon} alt="mksicon" />
				<img src={TimerIcon} alt="mksicon" />
				<Testy style={FONTS.modalTitleWhite}>gfsjgfjdgbfsdjg</Testy>
				<SendButton text="Отправить" />
				<Flower />
				<Close color={COLORS.orange} />
				<Close color={COLORS.blue} />
				<Arrow color={COLORS.orange} />
				<Next />
				<Prev color={COLORS.orange} />
				<NextQuestionButton />
				<BackToChapterButton />
				<Headphones />
				<Timer />
				<CourseProgressButton />
				<MailButton />
				<SoundButton />
				<CourseStepPoint color="rgba(218, 170, 0)" />
				<ButtonContainer>
					{menuButtonData.map((item) => (
						<MenuButton
							key={item.index}
							index={item.index}
							text={item.text}
							bgColor={item.bgColor}
							bgAnimateColor={item.bgAnimateColor}
							rotate={item.rotate}
						/>
					))}
				</ButtonContainer>
				<StepProgressBar width="608" slidesAmount="7" />
				<StepProgressBar width="608" slidesAmount="5" />
				<StepProgressBar width="608" slidesAmount="8" />
				<StepProgressBar width="608" slidesAmount="3" />
				<Tree />
				<MenuProgressBar max={100} value={25} color={COLORS.orange} />
				<MenuProgressBar max={100} value={50} color={COLORS.brown_light} />
				<MenuProgressBar max={100} value={100} color={COLORS.green_light} />
				<MenuProgressBar max={100} value={78} color={COLORS.green_dark} />
				<VideoPlayer src={AvtVideo} />
			</Wrapper>
		</>
    )
}
const ButtonContainer = styled.div`
    display: flex;
`

const Testy = styled.div``

const Title = styled.h1`
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: palevioletred;
`

const Wrapper = styled.section`
    padding: 4em;
    background: #99c4e7;
`

const Subtitle = styled.div`
    font-size: calc(10px + 2vmin);
`

export default App
