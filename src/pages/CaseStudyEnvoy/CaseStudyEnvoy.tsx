import Hero from "../../modules/Parts/Hero/Hero";
import Challenge from "../../modules/Parts/Challenge/Challenge";
import Approach from "../../modules/Parts/Approach/Approach";

import "./CaseStudyEnvoy.css";

function CaseStudyEnvoy() {
    return (
        <div className="CaseStudyEnvoy">
            <Hero />
            <Challenge />
            <Approach />
            <Hero />
        </div>
    );
}

export default CaseStudyEnvoy;
