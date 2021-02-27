import React from "react";
import OurMission from "./Mission/Mission";
import WhyCompost from "./WhyCompost/WhyCompost";
import CompostBenefits from "./CompostBenefits/CompostBenefits";
import OurTeam from "./OurTeam/OurTeam";

function About() {
    return (
        <div>
            <OurMission />
            <WhyCompost />
            <CompostBenefits />
            <OurTeam />
        </div>
    );
}

export default About;
