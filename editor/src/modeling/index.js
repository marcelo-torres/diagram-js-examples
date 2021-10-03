import CommandModule from 'diagram-js/lib/command';
import LabelSupportModule from 'diagram-js/lib/features/label-support';
import PDModeling from './PDModeling';

import TooltipsModule from 'diagram-js/lib/features/tooltips';
import AttachSupportModule from 'diagram-js/lib/features/attach-support';
import SelectionModule from 'diagram-js/lib/features/selection';
import ChangeSupportModule from 'diagram-js/lib/features/change-support';
import SpaceToolModule from 'diagram-js/lib/features/space-tool';


export default {
    __init__: [
      'modeling'
    ],
    __depends__: [
        CommandModule,
        LabelSupportModule,

        TooltipsModule,
        AttachSupportModule,
        SelectionModule,
        ChangeSupportModule,
        SpaceToolModule
    ],
    modeling: [ 'type', PDModeling ]
};