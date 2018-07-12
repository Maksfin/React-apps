import React from 'react';
import App from '../App';

import {shallow} from 'enzyme';

describe('Компонент App', () => {
  const wrapper = shallow(<App />);
  describe('Рендер', () => {
    describe('Должен присутствовать элемент с классом ', () => {
      it('container', () => {
        expect(wrapper.find('.container')).toHaveLength(1);
      });

      it('container tab-panel', () => {
        expect(wrapper.find('.container .tab-panel')).toHaveLength(1);
      });

      it('form-content', () => {
        expect(wrapper.find('.form-content')).toHaveLength(1);
      });

      it('button-panel', () => {
        expect(wrapper.find('.button-panel')).toHaveLength(1);
      });

      it('button-panel button.button-next', () => {
        expect(wrapper.find('.button-panel button.button-next')).toHaveLength(1);
      });
    });

    describe('Кнопка button.button-next', () => {
      it('При клике должен быть вызыван метод handleClickNextForm', () => {
        const wrapper = shallow(<App />);
        const before = wrapper.state().step;

        wrapper.find('button.button-next').simulate('click');
        expect(wrapper.state().step).toEqual(before + 1);
      });
    });
  });

  describe('state должен содержать поля со значениями:', () => {
    const wrapper = shallow(<App />);
    const state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      cardNumber: ''
    };
    Object.keys(state).forEach(key => {
      it(`${key}: ${state[key] === '' ? "''" : state[key]}`, () => {
        expect(wrapper.state()[key]).toEqual(state[key]);
      });
    });
  });

  describe('Методы класса', () => {
    describe('handleTabClick', () => {
      const wrapper = shallow(<App />);
      it('Присутствует', () => {
        expect(wrapper.instance().handleTabClick).toBeDefined();
      });

      it('При вызове с аргументом меняется state.step на значение аргумента', () => {
        wrapper.instance().handleTabClick(10);
        wrapper.update();
        expect(wrapper.state().step).toEqual(10);
      });
    });

    describe('handleChangeForm', () => {
      const wrapper = shallow(<App />);
      it('Присутствует', () => {
        expect(wrapper.instance().handleChangeForm).toBeDefined();
      });
      it('При вызове с 2 аргументами меняется state[первый аргумент] = второй аргумент', () => {
        wrapper.instance().handleChangeForm('firstName', 'Иван');
        wrapper.update();
        expect(wrapper.state().firstName).toEqual('Иван');
      });
    });
    

    describe('handleClickNextForm', () => {
      const wrapper = shallow(<App />);
      it('Присутствует', () => {
        expect(wrapper.instance().handleClickNextForm).toBeDefined();
      });
      it('После вызова state.step увеличивается на 1', () => {
        const val = wrapper.state().step;
        wrapper.instance().handleClickNextForm();
        wrapper.update();
        expect(wrapper.state().step).toEqual(val + 1);
      });
    });


  });
});
