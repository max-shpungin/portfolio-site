import Hero from "../../modules/Parts/Hero/Hero";
import Divider from "../../modules/Parts/Divider/Divider";

import Challenge from "../../modules/Parts/Challenge/Challenge";
import Approach from "../../modules/Parts/Approach/Approach";

import Delivery from "../../modules/Parts/Delivery/Delivery";
import DatalayerDelivery from "../../modules/Parts/Delivery/DataLayerDelivery";
import AnalyticsDelivery from "../../modules/Parts/Delivery/AnalyticsDelivery";

import measurement_plan from "../../assets/envoy_placeholder_blurme.png";
import privacy_options from "../../assets/privacyoptions.png";
import outtro from "../../assets/outtro-forest.png";



import "./CaseStudyEnvoy.css";

function CaseStudyEnvoy() {
    return (
        <div className="CaseStudyEnvoy">
            <Hero />
            <Challenge />
            <Approach />
            <Divider content="What I Built" />
            <Delivery {...delivery_details_mp} />
            <DatalayerDelivery />
            <AnalyticsDelivery />
            <Delivery {...delivery_details_privacy} />
            <Outtro />
        </div>
    );
}

export default CaseStudyEnvoy;

/******** OUTTRO SECTION THAT WILL BE A COMPONENT AT SOME POINT */
function Outtro() {



    return (
        <div className="Outtro">
            <div className="outtro-wrapper">
                <img className="outtro-image" src={outtro} alt="" />
                <div className="outtro-content">
                    <div className="outtro-contact">
                        <h5>Questions?</h5>
                        <h6>
                            <p>email: max (at) workingwithmax dot com</p>
                        </h6>
                    </div>

                    <br></br>
                    <a href="#top">
                        <button className="outtro-button-top">
                            <p>Take me to the top!</p>
                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
}

/**********************************CONTENT!***************************** */

/** MEASUREMENT PLAN */
const delivery_content_mp = (
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

const delivery_details_mp = {
    title: "Measurement Plan",
    leader: "Just what the heck is a lead anyway? And how do we measure it?",
    imageUrl: measurement_plan,
    content: delivery_content_mp,
};

/** MEASUREMENT PLAN */
const delivery_content_privacy = (
    <>
        <p>
            How are users allowing us to use their data? Are we allowed to
            capture interactions on our own site? Are we allowed to use that
            data for advertising purposes? Ultimately, privacy compliance means
            respecting user choice - and requires a few key elements:
        </p>
        <ul>
            <li>
                A <strong>data protection officer (DPO)</strong> - the
                individual (or group) responsible for outlining how a business
                operates with respect to data responsibility. Working directly
                with Envoy's DPO allowed for a clear stream of communication to
                identify requirements.
            </li>
            <li>
                A <strong>consent management platform (CMP)</strong> that can
                identify visitors' point of origin and respond with the
                appropriate privacy options. The platform should gather and
                store user privacy choices, and interact with relevant
                advertising and analytics tools to allow or forbid data sharing
                as appropriate. In our case, the platform was Cookiebot.
            </li>
            <li>
                A marketing team comfortable with{" "}
                <strong>operating in ambiguity.</strong> Users that opt out of
                data sharing are a blind spot for the business - the solution
                lies in the team's ability to see and predict general trends, as
                well as model performance based on observed results. Naturally
                Envoy has this one on lock!
            </li>
        </ul>

        <p>
            Respecting user privacy is a key value and tenet of the business,
            and this principle guides system implementation and marketing
            operations throughout the customer journey.
        </p>
    </>
);

const delivery_details_privacy = {
    title: "Data Privacy",
    leader: "How do we get permission to do all the cool stuff we have in mind?",
    imageUrl: privacy_options,
    content: delivery_content_privacy,
};
