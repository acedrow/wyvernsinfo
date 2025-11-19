<script setup lang="ts">
const membershipFormUrl = import.meta.env.VITE_INTAKE_SURVEY_LINK;
</script>

<!-- TODO: navigating from faq page doesn't reset the page scroll -->
<!-- TODO: collapsible sections with expand/collapse all at top -->

<template>
    <div>
        <h2>New Member Information</h2>
        <h3>Joining Minnesota Armored Combat</h3>
        <p>
            Both the Twin Cities Wyverns open division team and the Flowers of Battle women's division team are looking
            for new members! There are no tryouts or prior experience needed - so long as you're
            willing to put in some work and learn something new, we will get you fighting.
            <br /> <br />
            MNAC is an inclusive organization and we welcome anyone aged 18+ regardless of gender, sexual orientation,
            or background. So long as you have determination and love in your heart, there is a place for you here.
            <br /> <br />
            <b>The first step to get started with us is filling out our <a
                    v-bind:href="`${membershipFormUrl}`">membership
                    form</a>. We'll reach out via email with details.</b>
        </p>

        <h3>Your First Practice</h3>

        <p>
            Our introductory practices are held quarterly and aim to provide you with an
            introduction to our team and the basics of our sport. These lessons include a mobility routine, cardio
            warmup,
            and grappling instruction drills. Intro practice is completely free, and all you need to bring are athletic
            clothes and a water bottle.

        </p>

        <h3>Next Steps</h3>

        <p>
            After your first practice, if you'd like to join MNAC as a full member and continue attending practice you
            can sign up for a monthly fee of $50.
            <br /> <br />
            Fundamentals practices are held each Sunday. These practices are always
            conducted in soft kit (more info on that below). <br /> <br /> Real life always comes first, and there is no
            practice
            attendance requirement, but <b>regular attendance of
                fundamentals practice is the single most important factor to improve your skills and progress to
                advanced
                classes and full-steel fighting.</b>
        </p>

        <h3>Practice Conduct</h3>
        <p>
            Practice needs to be fun and safe for everyone. All members are expected to remain humble, respectful, and
            considerate of their training partners. Practice is both give and take, sometimes you may help others learn
            more than you may learn yourself. We always respect a teammate's wishes to lower the intensity level of
            training.
        </p>

        <h3>Equipment</h3>
        <h4>The Basics</h4>
        <P>You will need athletic clothes you can easily move in and a water bottle. After the intro lesson, you'll also
            need groin protection for soft sparring - we recommend an athletic cup from a combat sports brand like
            Diamond MMA or similar. </P>

        <h4>Soft Kit</h4>
        In order to simulate fighting in armor with weapons in hand, we often don 'soft kit' at practice. This gear
        consists of a closed-face padded helmet, padded gloves, and a foam shield and weapon. We have loaner soft kit
        available for new members. Most members purchase their own soft kit after a few months of practice attendance.

        <h4>Full Steel</h4>
        After our new members have shown consistent attendance at practice and have demonstrated competence and safety
        in our basic techniques, they are invited to borrow a teammate's armor and attend steel practice.
        <br /> <br />
        Buying armor of your
        own takes time, research, and a total financial committment of around $4000. We don't recommend shopping for
        armor until
        you've progressed to full steel practice and are sure the sport is right for you.
        <br /> <br />
        Our members are very generous with their armor and we have an excellent track record of getting our newer
        members
        into borrowed steel at both practice and our local events. However, these resources are prioritized for new
        members with good practice attendance and committment to the sport and team.

        <h3>Risks and Safety</h3>
        Just like any other sport, there are risks involved in training and practicing armored combat. We take safety
        very seriously and proper, safe execution of techniques is the core of our pedagogy. While bumps and bruises are
        simply part of combat sports training, more serious injuries at practice are
        extremely rare.
        <br /> <br />
        Our armor is heavy and protective. The most common injuries in steel are pulled muscles or joint strains from
        grappling mishaps. Concussions and broken bones are rare and generally only happen at the competitive level.
        <br /> <br />
        <b>We awalk away from 99% of our fights unscathed. Good physical fitness and proper understanding of your body,
            gear, and technique are the best ways to stay safe.</b>
        <h3>Are there rules?</h3>

        <p>
            Safety is a big concern for us. As such, fighters are barred from
            thrusting with their weapons. Joint locks and any strikes to the feet,
            knees, groin, or neck are likewise forbidden. There are a number of
            leagues with different regulations, but our events generally conform to
            the
            <a href="https://www.buhurtinternational.com/">Buhurt International</a>
            ruleset.
        </p>

        <h3>Guests and Observing Practice</h3>
        <p>If you're interested in observing practice, please reach out to <a
                href="mailto:info@mn-armored-combat.org">info@mn-armored-combat.org</a>. Family and friends of our
            members are always welcome to observe practice so long as they are accompanied by a
            member and follow our safety rules.</p>
    </div>
</template>

<style lang="css" scoped>
h3 {
    margin-top: 25px;
    margin-bottom: 2 px;
    color: var(--yellow);
}

h4 {
    margin-top: 15px;
    margin-bottom: 5px;
}
</style>
