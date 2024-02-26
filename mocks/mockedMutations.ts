import ADD_CARD from '../graphql/mutations/AddCardMutation';
import ADD_COLUMN from '../graphql/mutations/AddColumnMutation';
import CLEAR_COLUMN from '../graphql/mutations/ClearColumnMutation';
import DELETE_COLUMN from '../graphql/mutations/DeleteColumnMutation';
import EDIT_CARD from '../graphql/mutations/EditCardMutation';
import MOVE_CARD from '../graphql/mutations/MoveCardMutation';
import RENAME_COLUMN from '../graphql/mutations/RenameColumnMutation';

export const mockedAddColumnMutation = {
    request :{
        query: ADD_COLUMN,
        variables:{
            columnTitle: 'To Do'
        }
    },
    result:{
        data:{
            addColumn: [
                {
                    id:'1',
                    columnTitle:'To Do',
                    cards:[
                        {
                            id:'232',
                            columnId:'1',
                            cardText:'Create Reusable component'
                        }
                    ]
                },
                {
                    id:'2',
                    columnTitle:'Test',
                    cards:[]
                },
                {
                id:'3',
                columnTitle:'Third',
                cards:[]
                }
            ]
        }
    }
}

export const mockedAddCardMutation = {
    request: {
      query: ADD_CARD,
      variables: {
        // mock variables
        cardText:'Not test',
        columnId: '1'
      },
    },
    result: {
      data: {
        // mock response data
        addCard:{
        id:'1',
        columnId:'1',
        cardText:'Create reusable component',
        _typename:'card'
        }
      },
    },
  };
  export const mockedEditCardMutation = {
    request: {
      query: EDIT_CARD,
      variables: {
        // mock variables
        cardId:'32',
        updatedText: 'Not Test'
      },
    },
    result: {
      data: {
        // mock response data
      },
    },
  };
  export const mockedClearColumnMutation = {
    request: {
      query: CLEAR_COLUMN,
      variables: {
        // mock variables
        columnId:'1'
      },
    },
    result: {
      data: {
        // mock response data
        clearColumn:{}
      },
    },
  };
  export const mockedRenameColumnMutation = {
    request: {
      query: RENAME_COLUMN,
      variables: {
        // mock variables
        columnId:'1',
        columnTitle: 'NotRandomTitle'
      },
    },
    result: {
      data: {
        // mock response data
        renameColumn:{
            id:'1',
            columnTitle:'NotRandomTitle',
            cards:[],
            _typename:'column'
        }
      },
    },
  };
  export const mockedDeleteColumnMutation = {
    request: {
      query: DELETE_COLUMN,
      variables: {
        // mock variables
        columnId:'1',
        columnTitle:'Test'
      },
    },
    result: {
      data: {
        // mock response data
        id:'1',
        columnTitle:'Test',
        cards:[],
        _typename:'column'
      },
    },
  };
  export const mockedMoveCardMutation = {
    request: {
        query: MOVE_CARD,
        variables: {
          // mock variables
          cardId:'232',
          newColumnId: '2'
        },
      },
      result: {
        data: {
          // mock response data
          changeCardColumnId:[
            {
                id:'1',
                columnTitle:'To Do',
                cards:[
                ]
            },
            {
                id:'2',
                columnTitle:'Test',
                cards:[
                  {
                    id:'232',
                    columnId:'2',
                    cardText:'Create Reusable component'
                }
                ]
            }
        ]
        },
      },
}

export const mockedRenameColumnMutationError = {
    request: {
      query: RENAME_COLUMN,
      variables: {
        // mock variables
      },
    },
    error: new Error('Network Offline! Cannot rename at this time.'),
  };

  export const mockedClearColumnMutationError = {
    request: {
      query: CLEAR_COLUMN,
      variables: {
        // mock variables
        columnId:'1'
      },
    },
    error: new Error('Network offline! Cards not deleted.')
  };
  export const mockedEditCardMutationError = {
    request: {
      query: EDIT_CARD,
      variables: {
        // mock variables
      },
    },
    error: new Error('Network Offline! Cannot edit the card at this time.')
  };