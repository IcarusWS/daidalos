# FlyEvents
Test documentation

## Action object format
Create the action object in the following fashion:
```json
{
    '[Class]': {
        '[Actions]': {
            'event': function(){}
        }
    }
}
```
Where the class is the class of the target object, action the action called by the emitter 

## Methods

#### ```fe.actions([actionsObject])```
