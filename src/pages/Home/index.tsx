import React from "react";
import {Hero}  from "./Hero/hero";
import { Cards } from "./Cards";
import { Space } from "@mantine/core";
import { ServiceCards } from "./ServiceCards";
import { TabCard } from "./TabCard";
import { Banner } from "./Banner";
import { Footer } from "@/components/Footer";

export function HomePage() {
    return(
        <>
            <Hero/>
            <Cards/>
            <Space h={50}/>
            <ServiceCards/>
            <Space h={50}/>
            <TabCard/>
            <Space h={70}/>
            <Banner/>
            <Space h={50}/>
            <Footer/>
        </>
    )
}