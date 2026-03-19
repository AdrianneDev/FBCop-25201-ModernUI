import {
    PXFieldState,
    PXView,
    controlConfig,
    createCollection,
    viewInfo,
    gridConfig,
    GridPreset,
    columnConfig,
    PXActionState
} from "client-controls";
import {
    SO302000,
    SOShipment as SOShipment_Base,
    Transactions as Transactions_Base
} from "src/screens/SO/SO302000/SO302000";

// Screen extension - interface+class pattern (NO extends on class)
export interface SO302000_ICFBCustomization extends SO302000 {}
export class SO302000_ICFBCustomization {
    // Add FileDetails view for Hyperlink tab
    @viewInfo({ containerName: "Hyperlink" })
    FileDetails = createCollection(FileDetails);
}

// Extend CurrentDocument view (SOShipment) for Shipping tab fields
export interface SOShipment extends SOShipment_Base {}
export class SOShipment {
    UsrICFBNotfitfor: PXFieldState;
    UsrICFBTimeIn: PXFieldState;
    UsrICFBTimeOut: PXFieldState;
    UsrICFBTareFare: PXFieldState;
    UsrICFBNetWeight: PXFieldState;
    UsrICFBRefFGEWRNbr: PXFieldState;
    UsrICFBWaybillNbr: PXFieldState;
    UsrICFBVehicleNbr: PXFieldState;
    UsrICFBVanNbr: PXFieldState;
    UsrICFBSealNbr: PXFieldState;

    @controlConfig({ type: 1, rows: 4 })
    UsrICFBContainerLoadingInstructions: PXFieldState;
}

// Extend Transactions view for grid column
export interface Transactions extends Transactions_Base {}
export class Transactions {
    UsrICFBCodeDate: PXFieldState;
}

// FileDetails view for the Hyperlink tab
@gridConfig({
    preset: GridPreset.Details,
    syncPosition: true
})
export class FileDetails extends PXView {
    GoToUrl: PXActionState;

    DocumentUrl: PXFieldState;
    DocumentNotes: PXFieldState;
    AttachmentLink: PXFieldState;
    FileLocation: PXFieldState;
}
