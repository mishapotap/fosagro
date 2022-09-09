import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { ModalStore } from "../../store"
import { IntroModal, CourseStepButton, CourseStepPoint } from "../atoms"

function CourseStep({button, points, dataModal, className}) {
    return(
        <Container>
            {
                button.value.modal 
                ? <>
                    <Button onClick={() => ModalStore.showModal("intro")}>
                        <CourseStepButton data={button.value} className={`${className}-button`}/>
                    </Button>
                    <IntroModal
                        isOpen={ModalStore.isVisible.intro}
                        onClose={() => ModalStore.closeModal("intro")}
                        // TODO прописать data (картинки и аудио)
                        items={dataModal}/>
                    </>
                : <Link to={ button.link }>
                    <CourseStepButton data={button.value} className={`${className}-button`}/>
                </Link>
            }
            {points && points.map((item) => <CourseStepPoint key={item.id} data={item.value} className={`${className}-point`}/>)}
        </Container>
    )
}

export default observer(CourseStep)

const Container = styled.div``

const Button = styled.button``
