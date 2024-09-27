import Hero from "../../modules/Parts/Hero/Hero";
import Challenge from "../../modules/Parts/Challenge/Challenge";
import Approach from "../../modules/Parts/Approach/Approach";
import Delivery from "../../modules/Parts/Delivery/Delivery";

import measurement_plan from "../../assets/envoy_placeholder_blurme.png";

import "./CaseStudyEnvoy.css";



function CaseStudyEnvoy() {
    return (
        <div className="CaseStudyEnvoy">
            <Hero />
            <Challenge />
            <Approach />
            <Delivery {...delivery_content_mp} />
            <Hero />
        </div>
    );
}

export default CaseStudyEnvoy;

/**********************************CONTENT!***************************** */

/** MEASUREMENT PLAN */
const delivery_mp_content = (
    <>
        <p>
            The measurement plan is a living document that captures key areas:
        </p>
        <ul>
            <li>What actions do we want our users to take on our site/app?</li>
            <li>
                How are we going to translate those actions into measurable
                metrics?
            </li>
            <li>How are we going to categorize and segment our users?</li>
        </ul>

        <p>
            By sitting down with key stakeholders across the marketing
            organization, we were able to identify the specific interactions
            that would be most valuable for our business, and map those to
            measurement requirements.
        </p>
    </>
);

const delivery_content_mp = {
    title: "Measurement Plan",
    leader: "Just what the heck is a lead anyway? And how do we measure it?",
    imageUrl: measurement_plan,
    content: delivery_mp_content,
};


