import { autoGrader } from '../helpers/autoGrader';
import { winner } from '../helpers/winner'


describe('Auto grade students', () => {
  it('should accept only positiv numbers', () => {
    const summerize = autoGrader (-5); 

    expect(summerize).toEqual('Invalid grade');
  });
  it('should accept only numbers under 100', () => {
    const summerize = autoGrader (101 ); 

    expect(summerize).toEqual('Invalid grade');
  });
  it('if grade is less than 60 points', () => {
    const summerize = autoGrader (2); 

    expect(summerize).toEqual('F');
  });
it('if grade is at least 60 points and less than 70', () => {
    const summerize = autoGrader (62);

    expect(summerize).toEqual('D');
  });
  it('if grade is at least 70 points and less than 80', () => {
    const summerize = autoGrader (70);

    expect(summerize).toEqual('C');
  });
  it('if grade is at least 80 points and less than 90', () => {
    const summerize = autoGrader (85);

    expect(summerize).toEqual('B');
  });
  it('if grade is at least 90 points and less than 100', () => {
    const summerize = autoGrader (99);

    expect(summerize).toEqual('A');
  });
 
  it('if 100', () => {
    const summerize = autoGrader (100);
    
    expect(summerize).toEqual(undefined);
  });


 // jest.mock('../helpers/winner')
      it('winner function value has been called', () =>{

          expect(winner(100)).toEqual("Respect, bro! You get 10000 dollars"); 
      }) 
});

