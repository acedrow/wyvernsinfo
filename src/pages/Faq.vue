<script setup lang="ts">
const membershipFormUrl = import.meta.env.VITE_INTAKE_SURVEY_LINK;
</script>

<template>
  <div>
    <h2>Frequently Asked Questions</h2>
    <h3>What is Minnesota Armored Combat?</h3>
    <p>
      Minnesota Armored Combat (MNAC) is a not-for-profit steel-fighting
      organization with the goal of promoting our sport throughout the state of
      Minnesota. MNAC currently organizes two teams: the Twin Cities Wyverns
      open division team and The Flowers of Battle women's division team.
    </p>

    <h3>What is Armored Combat?</h3>

    <p>
      Armored Combat or 'Buhurt' (from old French 'Béhourd' which was used to
      describe the knightly tournaments of the age) is a historiccombat sport in
      which fighters don period-accurate armor to engage in melee battles using
      blunted weapons. Our fights are full-contact, full-speed, and entirely
      unscripted.
    </p>

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

    <h3>Can I hire the Wyverns for my event?</h3>

    <p>
      Yes! We can put on a show for events of all shapes and sizes. Whether you
      just want a few small demo fights, or a headline tournament of 20 knights,
      we've got you covered. Our shows are family-friendly, informative, and
      most of all, exciting!
    </p>
    <br />

    <p>
      If you want to get even closer to the action, inquire about our knight
      experience! After a crash course in buhurt basics, we'll get you and your
      party armored up so you can try your hand at armored combat! Perfect for
      birthdays, bachelor(ette) parties, or team-building events.
    </p>
    <br />

    Drop us a line at
    <a href="mailto:info@mn-armored-combat.org">info@mn-armored-combat.org</a>
    with any booking inquiries.

    <h3>How do I join?</h3>

    We're always looking for new members! Our introductory practices are held
    quarterly and are completely free. They cover the basics of the sport and
    require no prior experience or special equipment. If interested, please fill
    out our <a v-bind:href="`${membershipFormUrl}`">membership form</a> and
    we'll reach out with details!
  </div>
</template>

<style lang="css" scoped>
h3 {
  margin-top: 25px;
  margin-bottom: 2 px;
  color: var(--yellow);
}
</style>
