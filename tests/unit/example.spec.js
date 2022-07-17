import { mount } from '@vue/test-utils'
import TestComponent from './testComponent'

describe('TestComponent testing', () => {
  test('Test content', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Test message'
      }
    })

    expect(wrapper.html()).toContain('Test message is Test message')
  })
})
