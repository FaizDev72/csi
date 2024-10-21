import React, { useState, useEffect } from "react";

const EventPage = () => {
    return (
        <section className="relative h-[calc(100vh)] bg-gradient-to-b from-[#C7DDFD] to-white">
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-ethno text-primary p-5 shiny-text" data-text="NO EVENTS TO SHOW">
                    <span className="inline">NO EVENTS </span>
                    <span className="inline">TO SHOW</span>
                </h1>
            </div>
        </section>
    )
}

export default EventPage
