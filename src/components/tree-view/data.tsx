
export interface DataType {
  id : string;
  label : string;
  children? : DataType[];
}

export const data : DataType[] = [{
  id : '1',
  label : 'Home',
},
{
  id : '2',
  label : 'Profile',
  children : [
    {
      id : '3',
      label : 'Profile Setup',
    }
  ]
},
{
  id : '4',
  label : 'Address',
  children : [
    {
      id : '5',
      label : 'Permanent Address',
      children : [
        {
          id : '6',
          label : 'First Address',
        },
        {
          id : '7',
          label : 'Second Address',
        }
      ]
    }
    ,{
      id : '8',
      label : 'Current Address',
      children : [
        {
          id : '9',
          label : 'First Address',
        },
        {
          id : '10',
          label : 'Second Address',
        }
      ]
    }
  ]
}
];