/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"
import "../../assets/fonts/index.css"
import {
    Layout,
    WavesThreeJS
} from "../atoms"


export default function Test() {

    return (
        <Layout page="section">
            <WavesThreeJS/>

            {/* <VideoPlayer src={TepkVideo} /> */}
        </Layout>
    )
}

const Container = styled.div`
    /* padding: 20px; */
`
const Text = styled.span``
const Testy = styled.div``

const Title = styled.h1`
    font-size: calc(10px + 2vmin);
    text-align: center;
    color: palevioletred;
`

const Subtitle = styled.div`
    font-size: calc(10px + 2vmin);
`
