import { PXFieldState, PXActionState, controlConfig, viewInfo, createCollection, gridConfig, GridPreset, PXView, linkCommand } from "client-controls";
import {
    AR301000,
    ARInvoice2 as ARInvoice2_Base
} from "src/screens/AR/AR301000/AR301000";

export interface AR301000_ICFBCustomization extends AR301000 {}
export class AR301000_ICFBCustomization {
    // Action for Hyperlink grid link
    GoToUrl: PXActionState;

    // Notes Log view
    @viewInfo({ containerName: "Notes Log" })
    NotesLog = createCollection(ICFBNotelogs);

    // Hyperlink file details view
    @viewInfo({ containerName: "Hyperlink" })
    FileDetails = createCollection(ICFBFileDetails);
}

// Extend CurrentDocument view (ARInvoice2) to add custom fields
export interface ARInvoice2 extends ARInvoice2_Base {}
export class ARInvoice2 {
    UsrICFBInvoiceInstruction: PXFieldState;
}

// Notes Log grid view
@gridConfig({ preset: GridPreset.Details, initNewRow: true })
export class ICFBNotelogs extends PXView {
    Date_Date: PXFieldState;
    Date_Time: PXFieldState;
    UserID: PXFieldState;
    UserName: PXFieldState;
    Comments: PXFieldState;
}

// Hyperlink file details grid view
@gridConfig({ preset: GridPreset.Details })
export class ICFBFileDetails extends PXView {
    DocumentUrl: PXFieldState;
    DocumentNotes: PXFieldState;

    @linkCommand("GoToUrl")
    AttachmentLink: PXFieldState;

    FileLocation: PXFieldState;
}
