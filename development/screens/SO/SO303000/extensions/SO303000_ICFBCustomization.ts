import {
  PXFieldState,
  PXFieldOptions,
  PXView,
  PXActionState,
  placeAfterProperty,
  viewInfo,
  gridConfig,
  columnConfig,
  GridPreset,
  GridFastFilterVisibility,
  createCollection,
} from "client-controls";
import { SO303000, ARInvoiceCurrent } from "src/screens/SO/SO303000/SO303000";

export interface SO303000_ICFBCustomization extends SO303000 {}

export class SO303000_ICFBCustomization {
  @viewInfo({ containerName: "Notes Log" })
  NotesLog = createCollection(ICFBNotelogs);
  @viewInfo({ containerName: "Hyperlink" })
  FileDetails = createCollection(ICFBFileDetails);
}

@gridConfig({
  initNewRow: true,
  allowUpdate: false,
  showFastFilter: GridFastFilterVisibility.False,
  preset: GridPreset.Details,
})
export class ICFBNotelogs extends PXView {
  @columnConfig({
    width: 90,
  })
  Date_Date: PXFieldState;

  @columnConfig({
    width: 90,
  })
  Date_Time: PXFieldState;

  @columnConfig({
    width: 140,
  })
  UserID: PXFieldState;

  @columnConfig({
    width: 220,
  })
  UserName: PXFieldState;

  @columnConfig({
    width: 280,
  })
  Comments: PXFieldState;
}
@gridConfig({
  syncPosition: true,
  showFastFilter: GridFastFilterVisibility.False,
  preset: GridPreset.Details,
})
export class ICFBFileDetails extends PXView {
  GoToUrl: PXActionState;

  @columnConfig({
    width: 280,
  })
  DocumentUrl: PXFieldState;

  @columnConfig({
    width: 280,
  })
  DocumentNotes: PXFieldState;

  @columnConfig({
    editorConfig: {
      linkCommand: "GoToUrl",
    },
    width: 140,
  })
  AttachmentLink: PXFieldState<PXFieldOptions.CommitChanges>;

  @columnConfig({
    width: 280,
  })
  FileLocation: PXFieldState;
}
export interface SO303000_ARInvoiceCurrent_ICFBCustomization_converted extends ARInvoiceCurrent {}
export class SO303000_ARInvoiceCurrent_ICFBCustomization_converted {
  @placeAfterProperty("CuryDiscountedPrice")
  UsrICFBInvoiceInstruction: PXFieldState;

  UsrICFBEntryDateNbr: PXFieldState;

  UsrICFBBillOfLadingNbr: PXFieldState;

  UsrICFBAirWayBillNbr: PXFieldState;

  UsrICFBBLOrAWDDate: PXFieldState;

  UsrICFBVessel: PXFieldState;

  UsrICFBContainerNbr: PXFieldState;

  UsrICFBSealNbr: PXFieldState;

  UsrICFBEstDeliveryDate: PXFieldState;

  UsrICFBEstArrivalDate: PXFieldState;

  UsrICFBActualDateofDep: PXFieldState;

  @placeAfterProperty("UsrICFBActualDateofDep")
  MultiShipAddress: PXFieldState<PXFieldOptions.CommitChanges>;
}
