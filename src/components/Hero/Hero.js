import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection, Span } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello. <br />
        I am Felipe Silva <br />
        <Span>Developer / UX/UI Designer / Freelance</Span>
      </SectionTitle>
      <SectionText>
        I am a developer and UX/UI designer based in Brazil.
      </SectionText>
      <Button
        onClick={() => (window.location = 'mailto:feehlipeeh422@gmail.com')}
      >
        Get in touch
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </LeftSection>
  </Section>
)

export default Hero
