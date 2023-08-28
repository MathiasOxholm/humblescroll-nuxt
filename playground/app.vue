<script setup lang="ts">
</script>

<template>
  <main>
    <section class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <HumbleScroll
        animation="zoom-in fade"
        class="absolute object-cover w-full h-full"
        inner-class="w-full h-full"
        :variables="{ duration: '3000ms' }"
      >
        <img 
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          class="object-cover w-full h-full opacity-75"
        >
      </HumbleScroll>
      <div class="container relative">
        <HumbleScroll
          animation="fade up"
          :variables="{ delay: '1000ms' }"
          class="text-center"
          speed="slow"
        >
          <h1 class="font-semibold text-7xl">
            HumbleScroll
          </h1>
          <p class="mt-8 text-xl">
            A Vue 3 component for scroll animations.
          </p>
        </HumbleScroll>
      </div>
    </section>
    <div class="container">
      <div class="grid gap-20 px-6 pb-8 lg:grid-cols-12 lg:px-8">
        <div class="lg:col-span-9">
          <TheSection 
            id="fade"
            title="Fade animations"
            description="Opacity from 0 to 1 - you know the drill."
          >
            <TheCard
              title="Fade up"
              animation="fade up lg:left lg:blur"
            />
            <TheCard
              title="Fade down"
              animation="fade down"
            />
            <TheCard
              title="Fade right"
              animation="fade right"
            />
            <TheCard
              title="Fade left"
              animation="fade left"
            />
            <TheCard
              title="Fade in"
              animation="fade"
            />
            <TheCard
              title="Fade up left"
              animation="fade up left"
            />
          </TheSection>

          <TheSection
            id="zoom"
            title="Zoom animations"
            description="Zoom in and out. Perfect for images."
          >
            <TheCard
              title="Zoom in"
              animation="zoom-in fade"
            />
            <TheCard
              title="Zoom out"
              animation="zoom-out fade"
            />
            <TheCard
              title="Zoom out + right + up"
              animation="zoom-out right up fade"
            />
            <TheCard
              title="Zoom in + left + up"
              animation="zoom-in left up fade"
            />
          </TheSection>
          
          <TheSection
            id="slide"
            title="Slide animations"
            description="Slide to the left, slide it to the right!"
          >
            <TheCard
              title="Slide right"
              animation="right"
            />
            <TheCard
              title="Slide left"
              animation="left"
            />
            <TheCard
              title="Slide up"
              animation="right up"
            />
            <TheCard
              title="Slide down"
              animation="left up"
            />
          </TheSection>

          <TheSection
            id="flip"
            title="Flip animations"
            description="Who uses these? Here's four of them anyway."
          >
            <TheCard
              title="Flip right"
              animation="flip-right"
            />
            <TheCard
              title="Flip left"
              animation="flip-left"
            />
            <TheCard
              title="Flip up"
              animation="flip-up"
            />
            <TheCard
              title="Flip down"
              animation="flip-down"
            />
          </TheSection>

          <TheSection
            id="skew"
            title="Skew animations"
            description="Skew it to the left, skew it to the right! Combine with blur to make them feel blazingly fast."
          >
            <TheCard
              title="Skew right"
              animation="skew-right fade right blur"
              speed="fast"
              easing="ease-out-back"
              size="extra-large"
            />
            <TheCard
              title="Skew left"
              animation="skew-left fade left blur"
              speed="fast"
              easing="ease-out-back"
              size="extra-large"
            />
            <TheCard
              title="Skew up"
              animation="skew-up fade up blur"
              speed="fast"
              easing="ease-out-back"
              size="extra-large"
            />
            <TheCard
              title="Skew down"
              animation="skew-down fade down blur"
              speed="fast"
              easing="ease-out-back"
              size="extra-large"
            />
          </TheSection>

          <TheSection
            id="reveal"
            title="Reveal animations"
            description="Parent has overflow hidden and child slides from 100% to 0"
          >
            <TheCard
              title="Reveal up"
              animation="reveal-up fade"
            />
            <TheCard
              title="Reveal down"
              animation="reveal-down fade"
            />
            <TheCard
              title="Reveal right"
              animation="reveal-right fade"
            />
            <TheCard
              title="Reveal left"
              animation="reveal-left fade"
            />
          </TheSection>

          <TheSection
            id="blur"
            title="Blur effect"
            description="Who doesn't like a good motion blur effect?"
            :columns="3"
          >
            <TheCard
              title="Blur effect"
              animation="fade right blur"
            />
            <TheCard
              title="Blur effect"
              animation="zoom-in fade up blur"
              :variables="{ blur: '40px' }"
            />
            <TheCard
              title="Blur effect"
              animation="fade left blur"
            />
          </TheSection>
          
          <TheSection
            id="easing"
            title="Easing variations"
            description="We only ship with a few easings, but you can easily add your own."
          >
            <TheCard
              title="Ease in"
              animation="fade up"
              easing="ease-in"
            />
            <TheCard
              title="Ease out"
              animation="fade up"
              easing="ease-out"
            />
            <TheCard
              title="Ease in out"
              animation="fade up"
              easing="ease-in-out"
            />
            <TheCard
              title="Ease out back"
              animation="fade up"
              easing="ease-out-back"
            />
          </TheSection>

          <TheSection
            id="speed"
            title="Speed variations"
            description="Gotta go fast! Scales from the global duration."
          >
            <TheCard
              title="Slow"
              animation="zoom-in fade up right blur"
              speed="slow"
            />
            <TheCard
              title="Extra slow"
              animation="fade up left blur"
              speed="extra-slow"
            />
            <TheCard
              title="Regular"
              animation="fade zoom-out"
              class="col-span-2"
            />
            <TheCard
              title="Fast"
              animation="fade up right blur"
              speed="fast"
            />
            <TheCard
              title="Extra fast"
              animation="fade up left blur"
              speed="extra-fast"
            />
          </TheSection>
          
          <TheSection
            id="size"
            title="Size variations"
            description="Define the size of the animation. Scales from the global size."
          >
            <TheCard
              title="Small"
              animation="fade right"
              size="small"
            />
            <TheCard
              title="Medium"
              animation="fade left"
              size="medium"
            />
            <TheCard
              title="Regular"
              animation="fade zoom-out"
              class="col-span-2"
            />
            <TheCard
              title="Large"
              animation="fade right"
              size="large"
            />
            <TheCard
              title="Extra large"
              animation="fade left"
              size="extra-large"
            />
          </TheSection>

          <TheSection
            id="stagger"
            title="Stagger"
            description="Adjust delay for each item in a loop"
          >
            <div class="grid col-span-2 gap-2 lg:grid-cols-4">
              <TheCard
                v-for="n in 8"
                :key="n"
                :title="`TheCard ${n + 1}`"
                class-name="min-h-[200px]"
                animation="fade up"
                :variables="{ delay: `${n}00ms` }"
              >
                <p>{{ `--hs-delay: ${n}00ms` }}</p>
              </TheCard>
            </div>
          </TheSection>

          <TheSection
            id="once"
            title="Once"
            description="Stays visible even with repeat or mirror enabled"
          >
            <TheCard
              title="Once"
              animation="fade up once"
            />
            <TheCard
              title="Not once"
              animation="fade up"
            />
          </TheSection>

          <TheSection
            id="responsive"
            title="Responsive"
            description="Responsive animations based on breakpoints. Like any other TailwindCSS utility class. Default prefixes are sm:, md:, lg:, xl:, 2xl: "
          >
            <TheCard
              title="Example 1"
              animation="fade left md:up"
            />
            <TheCard
              title="Example 2"
              animation="fade up lg:down"
            />
          </TheSection>
        </div>
      </div>
    </div>
  </main>
</template>


