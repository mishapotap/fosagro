import React from "react"
import styled from "styled-components"
import { Grass, GrassGrey, Canyons, CanyonsGrey, Rocks, RocksGrey, Wave, WaveGrey, 
    Flowers, FlowersGrey, Tropics, TropicsGrey, Desert, DesertGrey, PlaneWaves, 
    PlaneWavesGrey, Mountains, MountainsGrey, Ground, GroundGrey } from "../../assets/svg/static/ProgressBars"

export default function StepProgressBarImages({progressWidth, type}) {

    const barsArray = new Map([
        ["grass", {
            grey: GrassGrey,
            colored: Grass
        }],
        ["canyons", {
            grey: CanyonsGrey,
            colored: Canyons
        }],
        ["rocks", {
            grey: RocksGrey,
            colored: Rocks
        }],
        ["wave", {
            grey: WaveGrey,
            colored: Wave
        }], 
        ["flowers", {
            grey: FlowersGrey,
            colored: Flowers
        }],
        ["tropics", {
            grey: TropicsGrey,
            colored: Tropics
        }],
        ["desert", {
            grey: DesertGrey,
            colored: Desert
        }],
        ["planeWaves", {
            grey: PlaneWavesGrey,
            colored: PlaneWaves
        }],
        ["mountains", {
            grey: MountainsGrey,
            colored: Mountains
        }],
        ["ground", {
            grey: GroundGrey,
            colored: Ground
        }]
      ]);

    const greyImage = barsArray.get(type).grey;
    const coloredImage = barsArray.get(type).colored;
    return(
        <Container>
            <Back image={greyImage}/>
            <Front progressWidth={`${progressWidth}%`} image={coloredImage} />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 607px;
    overflow-x: hidden;
`

const Back = styled.div`
    width: 607px;
    max-width: 100%;    
    height: 102px;
    background-image: url(${(props) => props.image})
`

const Front = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 102px;
    width: ${(props) => props.progressWidth};
    max-width: 100%;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    transition: all 0.3s;
`