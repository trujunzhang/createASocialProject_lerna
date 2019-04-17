import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ReactChildrenHelper } from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('ReactChildrenHelper', () => {
  test('filter', () => {
    const Filtered = ({ children }) => (
      <div>{ReactChildrenHelper.filter(children, (item: any) => item.type === 'span')}</div>
    )
    Filtered.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <Filtered>
        <span>1</span>
        <span>2</span>
        <strong>3</strong>
      </Filtered>
    )
    // expect(wrapper.find('span')).toExist()
    expect(wrapper.find('span')).toBeDefined()
    expect(wrapper.find('span')).toHaveLength(2)
    expect(wrapper.find('strong')).toBeUndefined()
  })

  test('deep filter', () => {
    const DeepFiltered = ({ children }) => (
      <div>{ReactChildrenHelper.deepFilter(children, (item: any) => item.type === 'span')}</div>
    )
    DeepFiltered.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <DeepFiltered>
        <span>1</span>
        <span>2</span>
        <span>
          <strong>3</strong>
          <span>
            <strong>4</strong>
            <span>5</span>
          </span>
        </span>
      </DeepFiltered>
    )
    expect(wrapper.find('span')).toBeDefined()
    expect(wrapper.find('span')).toHaveLength(5)
    expect(wrapper.find('strong')).toBeUndefined()
  })

  test('group by type', () => {
    const Grouped = ({ children }) => (
      <div>
        <div className="spans">
          {(ReactChildrenHelper.groupByType(children, ['span', 'i'], 'rest') as any).span}
        </div>
        <div className="rest">
          {(ReactChildrenHelper.groupByType(children, ['span', 'i'], 'rest') as any).rest}
        </div>
        <div className="empty">
          {(ReactChildrenHelper.groupByType(children, ['span', 'i'], 'rest') as any).i}
        </div>
      </div>
    )
    Grouped.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <Grouped>
        <span>
          <b>1</b>
        </span>
        <span>
          <b>2</b>
        </span>
        <strong>3</strong>
      </Grouped>
    )
    expect(wrapper.find('.spans b')).toBeDefined()
    expect(wrapper.find('.spans b')).toHaveLength(2)
    expect(wrapper.find('.spans strong')).toBeUndefined()
    expect(wrapper.find('.rest span')).toBeUndefined()
    expect(wrapper.find('.rest strong')).toBeDefined()
    expect(wrapper.find('.rest strong')).toHaveLength(1)
    expect(wrapper.find('.empty').children()).toBeUndefined()
  })

  test('deep map', () => {
    const DeepMapped = ({ children }) => (
      <div>
        {ReactChildrenHelper.deepMap(
          children,
          (child: any) =>
            child &&
            (child.type === 'b'
              ? cloneElement(child, { ...child.props, className: 'mapped' })
              : child)
        )}
      </div>
    )
    DeepMapped.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <DeepMapped>
        <b>1</b>
        <b>2</b>
        <span>
          <b>3</b>
        </span>
        <div>
          <div>
            <b>4</b>
          </div>
        </div>
        {null && <div>will not show up</div>}
        {false && <div>will not show up</div>}
        {undefined && <div>will not show up</div>}
      </DeepMapped>
    )
    expect(wrapper.find('.mapped')).toBeDefined()
    expect(wrapper.find('.mapped')).toHaveLength(4)
  })

  test('deep each', () => {
    const texts: any = []
    const DeepForEached = ({ children }) => (
      <div>
        {(ReactChildrenHelper as any).deepForEach(children, (child: any) => {
          if (child && child.type === 'b') {
            texts.push(child.props.children)
          }
        })}
      </div>
    )
    DeepForEached.propTypes = { children: PropTypes.node.isRequired }
    shallow(
      <DeepForEached>
        <b>1</b>
        <b>2</b>
        <span>
          <b>3</b>
        </span>
        <div>
          <div>
            <b>4</b>
          </div>
        </div>
        {null && <div>will not show up</div>}
        {false && <div>will not show up</div>}
        {undefined && <div>will not show up</div>}
      </DeepForEached>
    )
    expect(texts).toStrictEqual(['1', '2', '3', '4'])
  })

  test('deep find', () => {
    const DeepFound = ({ children }) => (
      <div>
        {(ReactChildrenHelper as any).deepFind(children, (child: any) => child.type === 'i')}
      </div>
    )
    DeepFound.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <DeepFound>
        <b>1</b>
        <b>2</b>
        <span>
          <i>3</i>
        </span>
        <i>4</i>
        {null && <div>will not show up</div>}
        {false && <div>will not show up</div>}
        {undefined && <div>will not show up</div>}
      </DeepFound>
    )
    expect(wrapper.find('i')).toBeDefined()
    expect(wrapper.find('i')).toHaveLength(1)
    // expect(wrapper).toHaveText('3')
    expect(wrapper.indexOf('3') !== -1).toBeTruthy()
  })

  test('only text', () => {
    const OnlyText = ({ children }) => <div>{ReactChildrenHelper.onlyText(children)}</div>
    OnlyText.propTypes = { children: PropTypes.node.isRequired }
    const wrapper = shallow(
      <OnlyText>
        <span>0</span>
        <b>1</b>
        <span>
          <i>2</i>
        </span>
        <i>3</i>
      </OnlyText>
    )
    expect(wrapper.find('i')).toBeUndefined()
    expect(wrapper.find('b')).toBeUndefined()
    expect(wrapper.find('span')).toBeUndefined()
    // expect(wrapper).toHaveText('0123')
    expect(wrapper.indexOf('0123') !== -1).toBeTruthy()
  })
})
