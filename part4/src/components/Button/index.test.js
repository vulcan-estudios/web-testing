import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Components', function () {

  describe('Button', function () {

    it('Default tag', function () {
      const el = shallow(<Button />);
      const actual = el.is('button');
      expect(actual).to.be.true;
    });

    it('Default className', function () {
      const el = shallow(<Button />);
      const actual = el.prop('className');
      const expected = 'mybutton';
      expect(actual).to.equal(expected);
    });

    it('Add className', function () {
      const el = shallow(<Button className='extra' />);
      const actual = el.prop('className');
      const expected = 'mybutton extra';
      expect(actual).to.equal(expected);
    });

    it('Content', function () {
      const el = shallow(<Button>The button content.</Button>);
      const actual = el.text();
      const expected = 'The button content.';
      expect(actual).to.equal(expected);
    });

    it('Icon', function () {
      const el = shallow(<Button icon={true} />);
      const actual = el.contains(<i className='myicon' />);
      expect(actual).to.be.true;
    });

    it('Elements', function () {
      const el = shallow(
        <Button>
          <b>Hola</b>
          <b>Mundo!</b>
        </Button>
      );
      const actual = el.find('b');
      expect(actual).to.have.lengthOf(2);
    });

  });

});
