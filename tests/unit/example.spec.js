import { mount } from '@vue/test-utils'
import Calc from '@/components/calcComponents'

// eslint-disable-next-line no-undef
describe('Calculator testing', () => {
  // eslint-disable-next-line no-undef
  test('Test first operand', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')

    op1Input.setValue(1)

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(1)
  })

  // eslint-disable-next-line no-undef
  test('Test second operand', () => {
    const wrapper = mount(Calc)
    const op2Input = wrapper.find('input[name="op2"]')

    op2Input.setValue(2)

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op2).toBe(2)
  })

  // eslint-disable-next-line no-undef
  test('Test sum method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="sum"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(6)
  })

  // Test sub
  // eslint-disable-next-line no-undef
  test('Test sub method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="sub"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(2)
  })

  // Test mult
  // eslint-disable-next-line no-undef
  test('Test mult method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="mult"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(8)
  })

  // Test div
  // eslint-disable-next-line no-undef
  test('Test div method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="div"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(2)
  })

  // Test pow
  // eslint-disable-next-line no-undef
  test('Test pow method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="pow"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(16)
  })

  // Test trunc
  // eslint-disable-next-line no-undef
  test('Test trunc method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name="op1"]')
    const op2Input = wrapper.find('input[name="op2"]')
    const sumButton = wrapper.find('button[name="trunc"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.result).toBe(2)
  })

  // Test numKeys
  // eslint-disable-next-line no-undef
  test('Test numKeys method', () => {
    const wrapper = mount(Calc)
    // const op1Input = wrapper.find('input[name="op1"]')
    const op1Radio = wrapper.find('input[name="op1Radio"]')
    const checkbox = wrapper.find('input[name="checkbox"]')
    const numButton = wrapper.find('button[name="1"]')

    checkbox.trigger('change')
    op1Radio.trigger('change')
    numButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(1)
  })

  // Test numKeys and del
  // eslint-disable-next-line no-undef
  test('Test numKeys and del method', () => {
    const wrapper = mount(Calc)
    // const op1Input = wrapper.find('input[name="op1"]')
    const op1Radio = wrapper.find('input[name="op1Radio"]')
    const checkbox = wrapper.find('input[name="checkbox"]')
    const numButton = wrapper.find('button[name="2"]')
    const delButton = wrapper.find('button[name="delButton"]')

    checkbox.trigger('change')
    op1Radio.trigger('change')
    numButton.trigger('click')
    numButton.trigger('click')
    numButton.trigger('click')
    delButton.trigger('click')

    // eslint-disable-next-line no-undef
    expect(wrapper.vm.op1).toBe(22)
  })
})
