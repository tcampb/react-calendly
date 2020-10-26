import React from 'react'
import { render, screen } from '@testing-library/react'
import faker from 'faker'
 
import PopupWidget from './PopupWidget';
 
describe('PopupWidget', () => {
  it.only('renders PopupWidget component', () => {
    const url = faker.internet.url()
    const buttonText = faker.lorem.sentence()
    render(<PopupWidget url={url} text={buttonText} />)
    const button = screen.queryByText(buttonText)

    expect(button).toBeTruthy()
  })

  describe('when the button is clicked', () => {
    it('renders PopupWidget component', () => {
      const url = faker.internet.url()
      const buttonText = faker.lorem.sentence()
      render(<PopupWidget url={url} text={buttonText} />)

      const button = screen.queryByText(buttonText)
      button.click()

      const iframe = screen.getByTestId('calendly-iframe') as HTMLIFrameElement
      const srcParams = new URLSearchParams(new URL(iframe.src).searchParams)
  
      expect(iframe.src).toContain(url)
      expect(srcParams.get('embed_type')).toEqual('PopupWidget')
      expect(srcParams.get('embed_domain')).toEqual(global.location.host)
    })
  })

  describe('when page settings are provided', () => {
    it('renders correct query parameters in iframe', () => {
      const url = faker.internet.url()
      const buttonText = faker.lorem.sentence()
      const pageSettings = {
        backgroundColor: faker.internet.color().substring(1),
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
        hideGdprBanner: true,
        primaryColor: faker.internet.color().substring(1),
        textColor: faker.internet.color().substring(1)
      }
      render(<PopupWidget url={url} text={buttonText} pageSettings={pageSettings} />)
      const button = screen.queryByText(buttonText)
      button.click()

      const iframe = screen.getByTestId('calendly-iframe') as HTMLIFrameElement
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