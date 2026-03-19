import {
    PXFieldState,
    PXFieldOptions,
    PXView,
    PXActionState,
    controlConfig,
    createCollection,
    gridConfig,
    GridPreset,
    linkCommand
} from "client-controls";
import { SO301000, SOOrderHeader as SOOrderHeader_Base, SOOrder as SOOrder_Base } from "src/screens/SO/SO301000/SO301000";

// Screen extension - interface+class pattern (NO extends on class)
export interface SO301000_ICFBCustomization extends SO301000 {}
export class SO301000_ICFBCustomization {
    // Custom views for tabs
    NotesLog = createCollection(ICFBNotelogs);
    FileDetails = createCollection(ICFBFileDetails);
}

// Extend Document view (SOOrderHeader) for header fields
export interface SOOrderHeader extends SOOrderHeader_Base {}
export class SOOrderHeader {
    UsrICFBMemo: PXFieldState;
    UsrICFBContractNo: PXFieldState;
    UsrICFBContractDate: PXFieldState;
}

// Extend CurrentDocument view (SOOrder) for Shipping tab fields
export interface SOOrder extends SOOrder_Base {}
export class SOOrder {
    UsrICFBConsignee: PXFieldState;
    UsrICFBConsigneeAddress: PXFieldState;
    UsrICFBNotifyParty: PXFieldState;
    UsrICFBNotifyPartyAddress: PXFieldState;
    UsrICFBAlsoNotify: PXFieldState;
    UsrICFBAlsoNotifyAddress: PXFieldState;
    UsrICFBOtherNotifyParty: PXFieldState;
    UsrICFBOtherNotifyPartyAddress: PXFieldState;

    @controlConfig({ type: 1, rows: 4 })
    UsrICFBDefaultShippingInstruction: PXFieldState;

    @controlConfig({ type: 1, rows: 4 })
    UsrICFBSpecialShippingInstruction: PXFieldState;
}

// Notes Log view for custom tab
@gridConfig({ preset: GridPreset.Details })
export class ICFBNotelogs extends PXView {
    Date_Date: PXFieldState;
    Date_Time: PXFieldState;
    UserID: PXFieldState;
    UserName: PXFieldState;
    Comments: PXFieldState;
}

// File Details view for Hyperlink tab
@gridConfig({ preset: GridPreset.Details })
export class ICFBFileDetails extends PXView {
    GoToUrl: PXActionState;

    DocumentUrl: PXFieldState;
    DocumentNotes: PXFieldState;

    @linkCommand("GoToUrl")
    AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

    FileLocation: PXFieldState;
}
