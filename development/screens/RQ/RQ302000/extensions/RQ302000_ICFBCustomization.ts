import {
  PXFieldState,
  PXFieldOptions,
  PXView,
  PXActionState,
  viewInfo,
  gridConfig,
  columnConfig,
  GridPreset,
  GridFastFilterVisibility,
  createCollection,
} from "client-controls";
import { RQ302000 } from "src/screens/RQ/RQ302000/RQ302000";

export interface RQ302000_ICFBCustomization_converted extends RQ302000 {}

export class RQ302000_ICFBCustomization_converted {
  @viewInfo({ containerName: "Hyperlink" })
  FileDetails = createCollection(ICFBFileDetails);
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
