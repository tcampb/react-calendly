import React from 'react'
import { render, screen } from '@testing-library/react'
import faker from 'faker'
 
import InlineWidget from './InlineWidget';
 
describe('InlineWidget', () => {
  it('renders InlineWidget component', () => {
    const url = faker.internet.url()
    const { container } = render(<InlineWidget url={url} />)
    const iframe = container.querySelector('iframe')
    const srcParams = new URLSearchParams(new URL(iframe.src).searchParams)

    expect(iframe.src).toContain(url)
    expect(srcParams.get('embed_type')).toEqual('Inline')
    expect(srcParams.get('embed_domain')).toEqual(global.location.host)
  })

  describe('when styles are provided', () => {
    it('renders the style in div wrapper', () => {
      const height = `${faker.random.number()}px`
      const url = faker.internet.url()

      render(<InlineWidget
        url={url}
        styles={{ height }} />)

      const mainDiv = screen.getByTestId('inline-widget-main')

      expect(mainDiv.style.height).toEqual(height)
    })
  })

  describe('when page settings are provided', () => {
    it('renders correct query parameters in iframe', () => {
      const url = faker.internet.url()
      const pageSettings = {
        backgroundColor: faker.internet.color().substring(1),
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        hideGdprBanner: true,
        primaryColor: faker.internet.color().substring(1),
        textColor: faker.internet.color().substring(1)
      }
      const { container } = render(<InlineWidget
        url={url}
        pageSettings={pageSettings} />)
      const iframe = container.querySelector('iframe')
      const srcParams = new URLSearchParams(new URL(iframe.src).searchParams)
  
      expect(srcParams.get('background_color')).toEqual(pageSettings.backgroundColor)
      expect(srcParams.get('hide_event_type_details')).toEqual('1')
      expect(srcParams.get('hide_landing_page_details')).toEqual('1')
      expect(srcParams.get('hide_gdpr_banner')).toEqual('1')
      expect(srcParams.get('primary_color')).toEqual(pageSettings.primaryColor)
      expect(srcParams.get('text_color')).toEqual(pageSettings.textColor)
    })
  })
});