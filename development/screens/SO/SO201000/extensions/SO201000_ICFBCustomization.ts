import {
  PXFieldState,
  PXFieldOptions,
  PXView,
  placeAfterProperty,
  viewInfo,
  gridConfig,
  columnConfig,
  GridPreset,
  GridFastFilterVisibility,
  createCollection,
} from "client-controls";
import { SO201000 } from "src/screens/SO/SO201000/SO201000";
import { SOOrderTypeHeaderSettingsAM } from "src/screens/SO/SO201000/extensions/SO201000_Manufacturing";

export interface SO201000_ICFBCustomization_converted extends SO201000 {}

export class SO201000_ICFBCustomization_converted {
  @viewInfo({ containerName: "User Roles" })
  RolesDetail = createCollection(ICFBSOOrderTypeRolesDetail);
}

@gridConfig({
  showFastFilter: GridFastFilterVisibility.False,
  preset: GridPreset.Details,
})
export class ICFBSOOrderTypeRolesDetail extends PXView {
  @columnConfig({
    width: 220,
  })
  RolenameID: PXFieldState<PXFieldOptions.CommitChanges>;

  @columnConfig({
    width: 280,
  })
  RolenameID_description: PXFieldState;
}
export interface SO201000_SOOrderTypeHeaderSettings_ICFBCustomization_converted extends SOOrderTypeHeaderSettingsAM {}
export class SO201000_SOOrderTypeHeaderSettings_ICFBCustomization_converted {
  @placeAfterProperty("DaysToKeep")
  UsrICFBActivateOrderTypeRestriction: PXFieldState<PXFieldOptions.CommitChanges>;

  UsrICFBPrintSalesInvoice: PXFieldState;

  UsrICFBPrintSalesInvoiceFBI: PXFieldState;

  UsrICFBPrintCommercialInvoice: PXFieldState;

  UsrICFBPrintCommercialInvoiceVerde: PXFieldState;

  UsrICFBPrintAuthorityToWithdraw: PXFieldState;

  UsrICFBPrintOrderSlip: PXFieldState;

  UsrICFBPrintOrderConfirmation: PXFieldState;

  UsrICFBPrintProformaInvoice: PXFieldState;

  @placeAfterProperty("UsrICFBPrintProformaInvoice")
  HoldEntry: PXFieldState;

  @placeAfterProperty("AMConfigurationEntry")
  AMEnableWarehouseLinkedProduction: PXFieldState;

  @placeAfterProperty("AMLinkableSOStatuses")
  AMMTOOrder: PXFieldState;

  @placeAfterProperty("AMMTOOrder")
  Behavior: PXFieldState<PXFieldOptions.CommitChanges>;
}
